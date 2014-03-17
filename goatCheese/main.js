
//creates an object
var socialMedia = {
	facebook : 'http://facebook.com/viewsource',
	twitter : 'http://twitter.com',
	flickr : 'http://flickr.com',
	yourtube : 'http://youtube.com'
};

//create a self executing function
var social = function() {
	var output = '<ul>',
	myList = document.querySelectorAll('.socialmediaicons');

	for( var key in arguments[0]) {
		output += '<li><a href="' + socialMedia[key] + ' ">' +
		'<img src="images/' + key + '.png" alt = "icon for ' + key +' ">' +
		'</a></li>';
	}

	output += '<ul>';

	for (var i = myList.length - 1; i >= 0; i--) {
		myList[i].innerHTML = output;
	};

}(socialMedia);