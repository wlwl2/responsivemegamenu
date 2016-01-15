//http://cssmenumaker.com/blog/responsive-menu-tutorial
//http://stackoverflow.com/questions/24259016/responsive-menu-show-and-hide-on-click

var samples = {};

samples.clickmenu = {

  init: function() {
      document.querySelector(".menubutton").addEventListener("click", function() {
      document.querySelector(".menubutton ul").classList.toggle(".menu");
      this.blur();
      return false;
      })}
};

document.addEventListener("DOMContentLoaded", function() {
  samples.clickmenu.init();
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
