function t(t,e,o,n){Object.defineProperty(t,e,{get:o,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=e.parcelRequirea36e;null==r&&((r=function(t){if(t in o)return o[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return o[t]=r,e.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){n[t]=e},e.parcelRequirea36e=r),r.register("ctMCH",(function(t,e){var o=r("8X9V8"),n=r("5KpGu");const a=[{id:1,img:"https://cdn.pixabay.com/photo/2019/08/19/08/34/portrait-4415789__340.jpg",author:"Ольга Примаченко",name:"К себе нежно",price:790},{id:2,img:"https://cdn.pixabay.com/photo/2020/01/21/17/40/mechanism-failure-4783468__340.jpg",author:"Барбара Колорозо",name:"Травля",price:990}],c=({id:t,img:e,author:o,name:n,price:r})=>`<li class="cart__item" id=${t}>\n        <div class="cart__img-wrapper">\n          <img src=${e} alt=${n} class="cart__img" width='80' height='100' />\n        </div>\n        <div class="cart__book-info">\n          <div>\n            <p class="cart__book-info-author">${o}</p>\n            <p class="cart__book-info-name">${n}</p>\n          </div>\n          <div class="cart__book-wrapper">\n            <div class="cart__book-amount">\n              <button class="cart__book-amount-btn" data-action="incr">\n                +\n              </button>\n              <span class="cart__book-amount-text">0</span>\n              <button class="cart__book-amount-btn" data-action="decr">\n                -\n              </button>\n            </div>\n            <p class="cart__book-price"><span>${r}</span> $</p>\n          </div>\n        </div>\n      </li>`;!function(){const t=a.map(c);o.refs.bookList.insertAdjacentHTML("beforeend",t.join(""))}(),(0,n.bookCounter)()})),r.register("8X9V8",(function(e,o){t(e.exports,"refs",(function(){return n}));const n={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),popBooksList:document.querySelector(".popular__books"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),bookList:document.querySelector(".cart__list")}})),r.register("5KpGu",(function(e,o){t(e.exports,"bookCounter",(function(){return a}));var n=r("8X9V8");function a(){document.querySelectorAll(".cart__list .cart__item").forEach((t=>{let e=t.querySelector(".cart__book-amount-text");const o=t.querySelector('button[data-action="incr"]'),r=t.querySelector('button[data-action="decr"]');let a=t.querySelector(".cart__book-price span");0==e.textContent&&(r.disabled=!0,r.classList.add("cart__book-amount-btn--disabled")),o.addEventListener("click",(t=>{"incr"===t.target.dataset.action&&(e.textContent++,n.refs.paymentTotalPrice.textContent=Number(n.refs.paymentTotalPrice.textContent)+Number(a.textContent)),e.textContent>0&&(r.disabled=!1,r.classList.remove("cart__book-amount-btn--disabled"))})),r.addEventListener("click",(t=>{"decr"===t.target.dataset.action&&(e.textContent--,n.refs.paymentTotalPrice.textContent=Number(n.refs.paymentTotalPrice.textContent)-Number(a.textContent)),e.textContent<=0&&(r.disabled=!0,r.classList.add("cart__book-amount-btn--disabled"))}))}))}})),r("ctMCH");
//# sourceMappingURL=cart-page.f91a1bd9.js.map
