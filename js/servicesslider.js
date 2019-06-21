var delivery = document.querySelector(".service-delivery-button");
var guarantee = document.querySelector(".service-guarantee-button");
var credit = document.querySelector(".service-credit-button");
var sliderDelivery = document.querySelector(".service-slider-delivery");
var sliderGuarantee = document.querySelector(".service-slider-guarantee");
var sliderCredit = document.querySelector(".service-slider-credit");

delivery.addEventListener("click", function (evt) {
    if (delivery.classList.contains("service-button-active") && sliderDelivery.classList.contains(service-slider-active)) {
        evt.preventDefault();
    } else {
        evt.preventDefault();
        guarantee.classList.remove("service-button-active");
        sliderGuarantee.classList.remove("service-slider-active");
        credit.classList.remove("service-button-active");
        sliderCredit.classList.remove("service-slider-active");
        delivery.classList.add("service-button-active");
        sliderDelivery.classList.add("service-slider-active");
    }
});

guarantee.addEventListener("click", function (evt) {
    if (guarantee.classList.contains("service-button-active") && sliderGuarantee.classList.contains("service-slider-active")) {
        evt.preventDefault();
    } else {
        evt.preventDefault();
        delivery.classList.remove("service-button-active");
        sliderDelivery.classList.remove("service-slider-active");
        credit.classList.remove("service-button-active");
        sliderCredit.classList.remove("service-slider-active");
        guarantee.classList.add("service-button-active");
        sliderGuarantee.classList.add("service-slider-active");
    }
});

credit.addEventListener("click", function (evt) {
    if (credit.classList.contains("service-button-active") && sliderCredit.classList.contains("service-slider-active")) {
        evt.preventDefault();
    } else {
        evt.preventDefault();
        delivery.classList.remove("service-button-active");
        sliderDelivery.classList.remove("service-slider-active");
        guarantee.classList.remove("service-button-active");
        sliderGuarantee.classList.remove("service-slider-active");
        credit.classList.add("service-button-active");
        sliderCredit.classList.add("service-slider-active");
    }
});