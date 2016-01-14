//http://cssmenumaker.com/blog/responsive-menu-tutorial
//http://stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click

document.querySelector('has-sub').addeventlistener("click", function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('tap');
});

var clickmenu = function() {
  var menuVisible = false;
    document.querySelector('has-sub').addeventlistener("click", function(e) {    if (menuVisible) {
      $('#myMenu').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#myMenu').css({'display':'block'});
    menuVisible = true;
  });
  $('#myMenu').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
});


/*$(function() {
  var menuVisible = false;
  $('#menuBtn').click(function() {
    if (menuVisible) {
      $('#myMenu').css({'display':'none'});
      menuVisible = false;
      return;
    }
    $('#myMenu').css({'display':'block'});
    menuVisible = true;
  });
  $('#myMenu').click(function() {
    $(this).css({'display':'none'});
    menuVisible = false;
  });
});
*/

/*
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
*/
