!function(){const e={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),headerCartBooksCount:document.querySelector(".cart__count span"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),bookList:document.querySelector(".cart__list"),cartMessage:document.querySelector(".cart__message"),popBooksList:document.querySelector(".popular__books"),menuBtn:document.querySelector("[data-menu]"),menu:document.querySelector(".menu"),orderForm:document.querySelector(".form")};e.orderForm.addEventListener("submit",(function(t){t.preventDefault();const r=new FormData(e.orderForm);r.forEach((e=>{console.log(e[e.name])}))}));const t=document.querySelector(".form__payment-method");t.addEventListener("click",(function(e){if("LABEL"!==e.target.nodeName)return;const r=t.querySelector(".form__payment-label--active"),o=t.querySelector(".form__icon--checked");r&&r.classList.remove("form__payment-label--active");o&&o.classList.remove("form__icon--checked");e.target.classList.add("form__payment-label--active"),e.target.firstElementChild.classList.add("form__icon--checked")}));const r=document.querySelector(".form__delivery-method");r.addEventListener("click",(function(e){if("LABEL"!==e.target.nodeName)return;const t=r.querySelector(".form__payment-label--active"),o=r.querySelector(".form__icon--checked");t&&t.classList.remove("form__payment-label--active");o&&o.classList.remove("form__icon--checked");e.target.classList.add("form__payment-label--active"),e.target.firstElementChild.classList.add("form__icon--checked")}))}();
//# sourceMappingURL=order-page.4a58cf54.js.map
