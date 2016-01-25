if (!juis) {
  var juis = {};
}

juis.oneButtonMegaMenu = {

  init: function () {
    document.querySelector(".oneButtonMegaMenu a").addEventListener("click",juis.oneButtonMegaMenu.openMenu);
  },
  openMenu: function () {
    document.querySelector(".menu").classList.toggle("showMenu");
  },

};


document.addEventListener("DOMContentLoaded", function() {
  juis.oneButtonMegaMenu.init();
});
