var cartButton = document.querySelectorAll(".button-cart");

var cartPopup = document.querySelector(".modal-cart-add");
var cartClose = cartPopup.querySelector(".modal-close");
var modalCartClose = cartPopup.querySelector(".modal-close-btn");

cartButton.forEach(function(item) {
   item.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartPopup.classList.add("modal-show");
    }); 
});

cartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

modalCartClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    cartPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (cartPopup.classList.contains("modal-show")) {
         cartPopup.classList.remove("modal-show");
        }
    }
});