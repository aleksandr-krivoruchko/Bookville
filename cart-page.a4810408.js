const t={headerLogo:document.querySelector(".logo"),headerTel:document.querySelector(".header__phone"),headerMenu:document.querySelector("[data-menu]"),headerDandruffLeft:document.querySelector("[data-dandruff-l]"),headerDandruffRight:document.querySelector("[data-dandruff-r]"),headerHeart:document.querySelector("[data-heart]"),headerCart:document.querySelector("[data-cart]"),headerCartBooksCount:document.querySelector(".cart__count span"),heroBtn:document.querySelector(".btn"),heroArrowLeft:document.querySelector(".hero__icon--left"),heroArrowRight:document.querySelector(".hero__icon--right"),paymentBtn:document.querySelector(".cart__btn"),paymentTotalPrice:document.querySelector(".cart__total-price span"),bookList:document.querySelector(".cart__list"),cartMessage:document.querySelector(".cart__message"),popBooksList:document.querySelector(".popular__books")};const e=localStorage.getItem("booksInCart"),o=JSON.parse(e);t.headerCartBooksCount.textContent=o.length,o&&t.cartMessage.classList.add("cart__message--none");const a=({id:t,img:e,author:o,name:a,price:n})=>`<li class="cart__item" id=${t}>\n        <div class="cart__img-wrapper">\n          <img src='${e}' alt=${a} class="cart__img" width="50" height="80"/>\n        </div>\n        <div class="cart__book-info">\n          <div>\n            <p class="cart__book-info-author">${o}</p>\n            <p class="cart__book-info-name">${a}</p>\n          </div>\n          <div class="cart__book-wrapper">\n            <div class="cart__book-amount">\n              <button class="cart__book-amount-btn" data-action="incr">\n                +\n              </button>\n              <span class="cart__book-amount-text">1</span>\n              <button class="cart__book-amount-btn" data-action="decr">\n                -\n              </button>\n            </div>\n            <p class="cart__book-price"><span>${n}</span> $</p>\n          </div>\n        </div>\n      </li>`;!function(){const e=o.map(a);t.bookList.insertAdjacentHTML("beforeend",e.join(""))}(),document.querySelectorAll(".cart__list .cart__item").forEach((e=>{let o=e.querySelector(".cart__book-amount-text");const a=e.querySelector('button[data-action="incr"]'),n=e.querySelector('button[data-action="decr"]');let r=e.querySelector(".cart__book-price span");t.paymentTotalPrice.textContent=Number(t.paymentTotalPrice.textContent)+Number(r.textContent),0==o.textContent&&(n.disabled=!0,n.classList.add("cart__book-amount-btn--disabled")),a.addEventListener("click",(e=>{"incr"===e.target.dataset.action&&(o.textContent++,t.paymentTotalPrice.textContent=Number(t.paymentTotalPrice.textContent)+Number(r.textContent)),o.textContent>0&&(n.disabled=!1,n.classList.remove("cart__book-amount-btn--disabled"))})),n.addEventListener("click",(e=>{"decr"===e.target.dataset.action&&(o.textContent--,t.paymentTotalPrice.textContent=Number(t.paymentTotalPrice.textContent)-Number(r.textContent)),o.textContent<=0&&(n.disabled=!0,n.classList.add("cart__book-amount-btn--disabled"))}))}));
//# sourceMappingURL=cart-page.a4810408.js.map
