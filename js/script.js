//http://cssmenumaker.com/blog/responsive-menu-tutorial

document.querySelector('has-sub').addeventlistener("click", function(e) {
    e.preventDefault();
    this.parentElement.classList.toggle('tap');
});
