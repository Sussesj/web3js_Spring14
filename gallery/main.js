
//create two arrays to hold the tab link elements and the content divs
var tabLinks = new Array();

var contentDivs = new Array();

//init is called when the page loads because init is in the body! 
function init() {

      // Grab the tab links and content divs from the page

      var tabListItems = document.getElementByClassName('tabs').childNodes;
      for ( var i = 0; i < tabListItems.length; i++ ) {
        if ( tabListItems[i].nodeName == "LI" ) {
          //creates tabLink, that assignes function getFirstChildWithTagName to it
          var tabLink = getFirstChildWithTagName( tabListItems[i], 'A' );
          //creates id, that assignes the function getHash to it, so that we can flip between the divs. 
          var id = getHash( tabLink.getAttribute('href') );

          tabLinks[id] = tabLink;
          contentDivs[id] = document.getElementByClassName( id );
        }
      }

      // Assign onclick events to the tab links, and
      // highlight the first tab
      var i = 0;

      for ( var id in tabLinks ) {
        tabLinks[id].onclick = showTab;
        tabLinks[id].onfocus = function() { this.blur() };
        if ( i == 0 ) tabLinks[id].className = 'selected';
        i++;
      }

      // Hide all content divs except the first
      var i = 0;

      for ( var id in contentDivs ) {
        if ( i != 0 ) contentDivs[id].className = 'tabContent hide';
        i++;
      }
    }

//is called whenever a tab link is clicked 

function showTab() {
      var selectedId = getHash( this.getAttribute('href') );

      // Highlight the selected tab, and dim all others.
      // Also show the selected content div, and hide all others.
      for ( var id in contentDivs ) {
        if ( id == selectedId ) {
          tabLinks[id].className = 'selected';
          contentDivs[id].className = 'tabContent';
        } else {
          tabLinks[id].className = '';
          contentDivs[id].className = 'tabContent hide';
        }
      }

      // Stop the browser following the link
      return false;
    }

//assigned paramenters to the function getFirstChildWithTagName, we use it in the tabListItem
function getFirstChildWithTagName( element, tagName ) {
      for ( var i = 0; i < element.childNodes.length; i++ ) {
        if ( element.childNodes[i].nodeName == tagName ) return element.childNodes[i];
      }
    }

//takes where ever the # and this to the tabList array! 
function getHash( url ) {
      var hashPos = url.lastIndexOf ( '#' );
      return url.substring( hashPos + 1 );
    }
