

//create function w. parameter id
function toggle_visibility(id) {
  //store navContent in variable theList
  var thelist = document.getElementsByClassName("navContent");
  //loop through the elements in the list and set style to display none
  for(var i = 0; i <thelist.length; i++) {
    thelist[i].style.display = 'none';
  }

  //create a variable to hold the grabId
  var e = document.getElementById(id);
  //take the grabId we put into the function when it is called and assign block to it.
  if(e.style.display == 'block') {
    e.style.display = 'none';
  } else {
    e.style.display = 'block';
  }
}




















