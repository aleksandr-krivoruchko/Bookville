function e(e,t,o,n){Object.defineProperty(e,t,{get:o,set:n,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},r=t.parcelRequirea36e;null==r&&((r=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var r={id:e,exports:{}};return o[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequirea36e=r),r.register("ctMCH",(function(e,t){var o=r("8X9V8"),n=r("5KpGu");const a=[{id:1,img:"book-mob.c771a6fa.jpg",author:"Ольга Примаченко",name:"К себе нежно",price:790},{id:2,img:"book-mob.c771a6fa.jpg",author:"Барбара Колорозо",name:"Травля",price:990},{id:3,img:"book-mob.c771a6fa.jpg",author:"Максим Поташев, Павел Ершов",name:"Правила команды",price:1190},{id:4,img:"book-mob.c771a6fa.jpg",author:"Максим Поташев, Павел Ершов",name:"Правила команды",price:1190}],c=({id:e,img:t,author:o,name:n,price:r})=>`<li class="cart__item" id=${e}>\n        <div class="cart__img-wrapper">\n          <img src='${t}' alt="book" class="cart__img" />\n        </div>\n        <div class="cart__book-info">\n          <div>\n            <p class="cart__book-info-author">${o}</p>\n            <p class="cart__book-info-name">${n}</p>\n          </div>\n          <div class="cart__book-wrapper">\n            <div class="cart__book-amount">\n              <button class="cart__book-amount-btn" data-action="incr">\n                +\n              </button>\n              <span class="cart__book-amount-text">0</span>\n              <button class="cart__book-amount-btn" data-action="decr">\n                -\n              </button>\n            </div>\n            <p class="cart__book-price"><span>${r}</span> ₽</p>\n          </div>\n        </div>\n      </li>`;!function(){const e=a.map(c);o.refs.bookList.insertAdjacentHTML("beforeend",e.join("")),console.log(o.refs.bookListItems)}(),(0,n.bookCounter)()})),r.register("8X9V8",(function(t,o){e(t.exports,"refs",(function(){return n}));const n={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),increaseBtn:document.querySelector('button[data-action="incr"]'),decreaseBtn:document.querySelector('button[data-action="decr"]'),bookCount:document.querySelectorAll(".cart__book-amount-text"),bookPrice:document.querySelectorAll(".cart__book-price"),bookList:document.querySelector(".cart__list")}})),r.register("5KpGu",(function(t,o){function n(){document.querySelectorAll(".cart__list .cart__item").forEach((e=>{let t=e.querySelector(".cart__book-amount-text");const o=e.querySelector('button[data-action="incr"]'),n=e.querySelector('button[data-action="decr"]');let r=e.querySelector(".cart__book-price span");0==t.textContent&&(n.disabled=!0,n.classList.add("cart__book-amount-btn--disabled")),o.addEventListener("click",(e=>{"incr"===e.target.dataset.action&&(t.textContent++,r.textContent=r.textContent*t.textContent),t.textContent>0&&(n.disabled=!1,n.classList.remove("cart__book-amount-btn--disabled"))})),n.addEventListener("click",(e=>{"decr"===e.target.dataset.action&&t.textContent--,t.textContent<=0&&(n.disabled=!0,n.classList.add("cart__book-amount-btn--disabled"))}))}))}e(t.exports,"bookCounter",(function(){return n}))})),r("ctMCH");
//# sourceMappingURL=cart-page.e42cc98f.js.map
