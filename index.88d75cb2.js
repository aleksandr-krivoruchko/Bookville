function e(e,t,r,n){Object.defineProperty(e,t,{get:r,set:n,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},a=r.parcelRequirea36e;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},r.parcelRequirea36e=a),a.register("kyEFX",(function(t,r){var n,o;e(t.exports,"register",(function(){return n}),(function(e){return n=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};n=function(e){for(var t=Object.keys(e),r=0;r<t.length;r++)a[t[r]]=e[t[r]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"5ZPII":"index.88d75cb2.js","8vMka":"book.8cea7579.jpg","9v6fF":"symbol-defs.c9718b6d.svg"}'));const c={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),headerCartBooksCount:document.querySelector(".cart__count span"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),bookList:document.querySelector(".cart__list"),cartMessage:document.querySelector(".cart__message"),popBooksList:document.querySelector(".popular__books"),menuBtn:document.querySelector("[data-menu]"),menu:document.querySelector(".menu")};function i(){const e=localStorage.getItem("booksInCart"),t=JSON.parse(e);t&&(c.headerCartBooksCount.textContent=t.length)}i(),c.heroBtn.addEventListener("click",(()=>console.log("go to ...")));new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var d;d=new URL(a("kyEFX").resolve("8vMka"),import.meta.url).toString();var s;s=new URL(a("kyEFX").resolve("9v6fF"),import.meta.url).toString();const u=[{id:1,img:t(d),author:"Ольга Примаченко",name:"К себе нежно",price:790},{id:2,img:t(d),author:"Барбара Колорозо",name:"Травля",price:990},{id:3,img:t(d),author:"Максим Поташев, Павел Ершов",name:"Правила команды",price:1190},{id:4,img:t(d),author:"Барбара Колорозо",name:"Травля",price:990},{id:5,img:t(d),author:"Максим Поташев, Павел Ершов",name:"Правила команды",price:1190}],l=({id:e,img:r,author:n,name:o,price:a})=>`<li class="card" id=${e}>\n        <div class="card__wrapper">\n          <div class="card__heart">\n            <svg class="card__icon-heart">\n              <use href="${t(s)}#icon-heart"></use>\n            </svg>\n          </div>\n          <div class="card__thumb">\n            <img src='${r}' alt='${o}' class="card__img" />\n          </div>\n          <div class="card__info">\n            <p class="card__author">${n}</p>\n            <p class="card__book">${o}</p>\n            <p class="card__price">${a}$</p>\n            <svg class="card__icon-cart">\n              <use href="${t(s)}#icon-cart"></use>\n            </svg>\n          </div>\n        </div>\n      </li>`;!function(){const e=u.map(l);c.popBooksList.insertAdjacentHTML("beforeend",e.join(""))}(),c.popBooksList.addEventListener("click",(function(e){if("svg"===e.target.nodeName&&e.target.classList.contains("card__icon-cart")){const t=e.target.closest("li").getAttribute("id"),r=u.find((e=>e.id===Number(t)));m.push(r),localStorage.setItem("booksInCart",JSON.stringify(m)),i()}}));const m=[];(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".js-open-menu"),r=document.querySelector(".js-close-menu"),n=()=>{const r="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!r),e.classList.toggle("is-open");bodyScrollLock[r?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",n),r.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(r=>{r.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),c.menu.addEventListener("click",(e=>{"P"===e.target.nodeName&&e.target.nextElementSibling.classList.toggle("visible")}));
//# sourceMappingURL=index.88d75cb2.js.map
