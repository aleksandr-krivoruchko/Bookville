var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},o=e.parcelRequirea36e;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in t){var o=t[e];delete t[e];var n={id:e,exports:{}};return r[e]=n,o.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,r){t[e]=r},e.parcelRequirea36e=o),o.register("8X9V8",(function(e,r){var t,o,n,a;t=e.exports,o="refs",n=function(){return u},Object.defineProperty(t,o,{get:n,set:a,enumerable:!0,configurable:!0});const u={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),headerCartBooksCount:document.querySelector(".cart__count span"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),bookList:document.querySelector(".cart__list"),cartMessage:document.querySelector(".cart__message"),popBooksList:document.querySelector(".popular__books"),menuBtn:document.querySelector("[data-menu]"),menu:document.querySelector(".menu"),orderForm:document.querySelector(".form"),radioPaymentBtns:document.querySelector(".form__payment-method"),radioDeliveryBtns:document.querySelector(".form__delivery-method")}}));var n=o("8X9V8");n.refs.orderForm.addEventListener("submit",(function(e){e.preventDefault(),localStorage.clear(),e.currentTarget.reset()})),n.refs.orderForm.addEventListener("input",(function(e){a[e.target.name]=e.target.value,localStorage.setItem("order-form",JSON.stringify(a))}));const a={};!function(){let e=localStorage.getItem("order-form");e&&(e=JSON.parse(e));Object.entries(e).forEach((([e,r])=>{n.refs.orderForm.elements[e].value=r}))}();
//# sourceMappingURL=order-page.0ddb481d.js.map
