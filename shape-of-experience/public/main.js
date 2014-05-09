var app = app || {};

app.main  = (function(w, d, $, _) {  

  var elements = {
    expField : $('.write-exp'),
    expSubmit : $('.submit-exp'),
    expList : $('.experience'),
    noExperienceFound : $('.no-experience-found'),
    status : $('.status'),
    expCount : $('.status').find('.exp-count'),
    likeCount : $('.status').find('.like-count')
  };

  var experience = [];

  var expTemplate = $('.exp-template').text();
  var compiledTemplate = _.template(expTemplate);

  var attachEvents = function() {

    elements.expSubmit.on('click', function(event) {
      event.preventDefault();
      var fieldValue = elements.expField.val();

      var newExp = new Model({ 
          expBodyText : fieldValue,
          liked: false
      }, experience).save();
      new View(newExp, elements.expList).init();
      
      elements.expField.val('');

    });

    app.events.subscribe('status:update', updateStatus);
    app.events.subscribe('ajax:GETcomplete', initialRender);

  };

  var View = function(model, containerElement) {
    //console.log('___________________passed exp model is:', exp);
    var index = experience.indexOf(model),
        that = this;
        //console.log(exp);
    this.render = function() {

      this.$listItem = $(compiledTemplate({exp : model.data}));
      this.likeButton = this.$listItem.find('.like');
      this.removeButton = this.$listItem.find('.remove');

      //console.log('list item is: ',this.$listItem);

      elements.expList.prepend(this.$listItem);
      elements.noExperienceFound.addClass('hidden');

      return this;     
    };

    this.like = function() {
      model.like(); // update the "liked" in our Model (data)
      that.likeButton.toggleClass('liked'); // update the UI and show a red heart
      return this;
    };

    this.remove = function() {
      model.remove();
      that.$listItem.remove();
      if(containerElement.children().length === 0) {
        elements.noExperienceFound.removeClass('hidden'); 
      }
    };
    
    this.attachEvents = function() {
      this.likeButton.on('click', this.like);
      this.removeButton.on('click', this.remove)
      return this;
    };

    this.init = function() {
      console.log('experience is this: ', experience);
      app.events.publish('status:update', [experience.length, _.where(experience,{liked : true}).length]);
      this.render();
      this.attachEvents();
      return this;
    };

  };


  var Model = function(expData, collection) {
    this.data = expData;
    var that = this;
    
    this.save = function() {
      
      // 1 - stringify the data
      var stringified  = JSON.stringify(this.data);
      //console.log('Model.save says: stringified the data: ', stringifiedData);
      
      // 2 - Hit our API with a POST request and send the new exp along.
      $.ajax({
        url : '/experience',
        type : 'POST',
        dataType : 'json',
        data : { exp : stringified },
        success : function(data, textStatus, jqXHR) {
          that._id = data._id;
          console.log('######################################################## model save data is: ', data, jqXHR, textStatus);
          
          //collection.push(data);
          app.events.publish('ajax:POSTcomplete', data);
        },
        error : function(jqXHR, textStatus, errorThrown) {
          console.log('something went wront. Here is the error: ', errorThrown);
        }
      
      });
      
      return this;
    };

  this.remove = function() {
      var id = this['_id'],
        ajaxUrl = '/experience/'+id; // add URL to "this"
        console.log('url is: ', ajaxUrl);
      $.ajax({
        url : ajaxUrl,
        type : 'DELETE',
        dataType : 'json',
        success : function(data, textStatus, jqXHR) {
          //window.res  =  res;
          //experience = _.clone(res);
          //app.events.publish('ajax:GETcomplete', experience);
          // Parse the json response
          
         console.log(data, 'delete success'); 
          
        }, error: function(jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        }
      }); 
      //console.log('my data is: ', this.data); 
      return this;
    };


    this.like = function() {
      
      var id = this['_id'],
        ajaxUrl = '/experience/'+id; // add URL to "this"
      this.data.liked = !this.data.liked;
      var stringified  = JSON.stringify(this.data);
      $.ajax({
        url: ajaxUrl,
        type: 'PUT',
        dataType: 'json',
        data : { exp : stringified },
        success : function(data, textStatus, jqXHR) {
          app.events.publish('ajax:PUTcomplete', data);
        },
        error : function(jqXHR, textStatus, errorThrown) {
          console.log('wooops! something went wront. Here is the error: ', errorThrown);
        }
      });
      return this;
    };

  };

  var initialRender = function(experience) {
    if(experience.length > 0) {
      

      var i = 0,
      len = experience.length,
     exp, 
      data,
      _id,
      model;
      for(i; i < len; i += 1) {
        exp = experience[i];
        //console.log(i, ' exp ', exp);
        data = JSON.parse(exp.exp);
        //console.log('___id ', id);
        model = new Model(data, experience);
        model._id = exp._id;
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~ initial render created this model: ', model);
        //console.log('____ initialRender says this is the model: ', Model);  
        new View(model, elements.expList).init();
      }
    
    } else {
      elements.noExperienceFound.removeClass('hidden');
      app.events.publish('status:update', [0,0]);
    }


  };

  var initialFetch = function() {
    $.ajax({
      url : '/experience',
      type : 'GET',
      dataType : 'json',
      success : function(res) {
        console.log('++++++ res : ', res);
        experience = _.clone(res);
        app.events.publish('ajax:GETcomplete', experience);
        // Parse the json response
        for(var i = 0; i < experience.length; i ++) {
          //console.log('exp' + i + ' : ', JSON.parse(experience[i].exp));  
        }
        
        
      }
    });
  };

  var updateStatus = function(counts) {
      //console.log('updating experience count with args', counts);
      elements.expCount.text(counts[0]);
      
  };

  
  var init = function() {
    console.log('App init');
    attachEvents();
    initialFetch();
  };
  
  return {
    init : init,
  };

})(window, document, jQuery, _);

window.addEventListener('DOMContentLoaded', app.main.init);