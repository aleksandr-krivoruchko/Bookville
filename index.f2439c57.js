function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},i=t.parcelRequirea36e;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequirea36e=i),i("8X9V8");i("8X9V8");var o=i("8X9V8");function l(){const e=localStorage.getItem("booksInCart"),t=JSON.parse(e);t&&(o.refs.headerCartBooksCount.textContent=t.length)}l(),(o=i("8X9V8")).refs.heroBtn.addEventListener("click",(()=>console.log("go to ...")));new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});o=i("8X9V8");var r,c=e(i("1Gatq")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,a,i){var o,l=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,c="function",s=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'\n\n<li class="card" id='+s(typeof(o=null!=(o=d(n,"id")||(null!=t?d(t,"id"):t))?o:r)===c?o.call(l,{name:"id",hash:{},data:i,loc:{start:{line:3,column:20},end:{line:3,column:26}}}):o)+'>\n  <div class="card__heart">\n\t<svg width="16" height="16" viewBox="0 0 16 16" fill="none" class="card__icon-heart">\n\t\t<path\n\t\t\td="M4.53672 1.37702C5.87143 1.36989 7.14027 1.95606 8.00002 2.977C8.85438 1.94909 10.1267 1.36124 11.4633 1.37702C13.9689 1.37702 16 3.40815 16 5.9137C16 10.2074 8.50634 14.3998 8.20253 14.5618C8.07995 14.6437 7.92008 14.6437 7.79747 14.5618C7.49366 14.3998 0 10.2681 0 5.9137C0 3.40815 2.03117 1.37702 4.53672 1.37702ZM8.00002 13.7517C9.1747 13.0631 15.1899 9.39727 15.1899 5.9137C15.1899 3.85559 13.5214 2.18711 11.4633 2.18711C10.2029 2.17055 9.02344 2.80627 8.3443 3.86811C8.20641 4.05825 7.94044 4.10063 7.75029 3.9627C7.71397 3.93634 7.68202 3.90443 7.6557 3.86811C6.52936 2.14555 4.21985 1.66222 2.49729 2.78856C1.44278 3.47809 0.808072 4.65374 0.810165 5.91366C0.810127 9.43775 6.82534 13.0833 8.00002 13.7517Z"\n\t\t\tfill="#675B56" />\n\t</svg>\n\n  </div>\n  <div class="card__wrapper">\n    <div class="card__thumb">\n      <img src='+s(typeof(o=null!=(o=d(n,"img")||(null!=t?d(t,"img"):t))?o:r)===c?o.call(l,{name:"img",hash:{},data:i,loc:{start:{line:14,column:15},end:{line:14,column:22}}}):o)+" alt="+s(typeof(o=null!=(o=d(n,"name")||(null!=t?d(t,"name"):t))?o:r)===c?o.call(l,{name:"name",hash:{},data:i,loc:{start:{line:14,column:27},end:{line:14,column:35}}}):o)+' class="card__img" />\n    </div>\n    <div class="card__info">\n      <p class="card__author">'+s(typeof(o=null!=(o=d(n,"author")||(null!=t?d(t,"author"):t))?o:r)===c?o.call(l,{name:"author",hash:{},data:i,loc:{start:{line:17,column:30},end:{line:17,column:40}}}):o)+'</p>\n      <p class="card__book">'+s(typeof(o=null!=(o=d(n,"name")||(null!=t?d(t,"name"):t))?o:r)===c?o.call(l,{name:"name",hash:{},data:i,loc:{start:{line:18,column:28},end:{line:18,column:36}}}):o)+'</p>\n      <p class="card__price">'+s(typeof(o=null!=(o=d(n,"price")||(null!=t?d(t,"price"):t))?o:r)===c?o.call(l,{name:"price",hash:{},data:i,loc:{start:{line:19,column:29},end:{line:19,column:38}}}):o)+'$</p>\n<svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="card__icon-cart">\n\t<g clip-path="url(#clip0_48_1658)">\n\t\t<path\n\t\t\td="M17.9262 7.65149C17.8557 7.55625 17.7439 7.5 17.6254 7.5H0.375346C0.256834 7.5 0.145107 7.55625 0.073845 7.65075C0.00335638 7.74599 -0.0184054 7.869 0.016083 7.98224L1.94508 14.4135C2.18509 15.213 2.90735 15.75 3.74132 15.75H14.2594C15.0934 15.75 15.8156 15.213 16.0549 14.4142L17.9839 7.98298C18.0184 7.86974 17.9967 7.74599 17.9262 7.65149ZM15.3372 14.1983C15.1924 14.6775 14.7597 15 14.2587 15H3.74136C3.24035 15 2.80761 14.6775 2.66361 14.1983L0.879348 8.24999H17.1214L15.3372 14.1983Z"\n\t\t\tfill="#675B56" />\n\t\t<path\n\t\t\td="M8.06127 2.29968C7.88201 2.19692 7.65251 2.25845 7.549 2.43919L4.549 7.68919C4.44701 7.86919 4.50924 8.09796 4.68924 8.20068C4.74774 8.23443 4.81148 8.25018 4.87525 8.25018C5.00501 8.25018 5.13175 8.18268 5.2015 8.06118L8.20154 2.81118C8.30353 2.63117 8.24127 2.40241 8.06127 2.29968Z"\n\t\t\tfill="#675B56" />\n\t\t<path\n\t\t\td="M13.451 7.68919L10.451 2.43919C10.346 2.25845 10.1158 2.19692 9.93876 2.29968C9.75802 2.40245 9.69576 2.63117 9.79852 2.81118L12.7985 8.06118C12.8683 8.18268 12.995 8.25018 13.1248 8.25018C13.1885 8.25018 13.2523 8.23443 13.3108 8.20068C13.4915 8.09796 13.5538 7.86919 13.451 7.68919Z"\n\t\t\tfill="#675B56" />\n\t</g>\n\t<defs>\n\t\t<clipPath id="clip0_48_1658">\n\t\t\t<rect width="18" height="18" fill="white" />\n\t\t</clipPath>\n\t</defs>\n</svg>\n    </div>\n  </div>\n</li>\n'},useData:!0});r=JSON.parse('[{"id":1,"img":"https://readrate.com/img/pictures/book/292/29286/29286/w160h240-stretch-5ed3128e.jpg","author":"Рэй Брэдбери","name":"451° по Фаренгейту","price":79},{"id":2,"img":"https://readrate.com/img/pictures/book/295/29554/29554/w160h240-stretch-eccecf43.jpg","author":"Джордж Оруэлл","name":"1984","price":70},{"id":3,"img":"https://readrate.com/img/pictures/book/294/29495/29495/w160h240-stretch-98cc5ada.jpg","author":"Михаил Булгаков","name":"Мастер и Маргарита","price":80},{"id":4,"img":"https://readrate.com/img/pictures/book/300/30024/30024/w160h240-stretch-1cf76e6f.jpg","author":"Грегори Дэвид Робертс","name":"Шантарам","price":93},{"id":5,"img":"https://readrate.com/img/pictures/book/338/33800/33800/w160h240-stretch-dfdf5ef1.jpg","author":"Эрих Мария Ремарк","name":"Три товарища","price":66},{"id":6,"img":"https://readrate.com/img/pictures/book/292/29234/29234/w160h240-stretch-c262b73b.jpg","author":"Дэниел Киз","name":"Цветы для Элджернона","price":74},{"id":7,"img":"https://readrate.com/img/pictures/book/298/29818/29818/w160h240-stretch-bd100eb2.jpg","author":"Оскар Уайльд","name":"Портрет Дориана Грея","price":85}]');const s=localStorage.getItem("booksInCart"),d=JSON.parse(s)||[];o.refs.popBooksList.addEventListener("click",(function(t){if("svg"===t.target.nodeName&&t.target.classList.contains("card__icon-cart")){const n=t.target.closest("li").getAttribute("id"),a=e(r).find((e=>e.id===Number(n)));d.push(a),localStorage.setItem("booksInCart",JSON.stringify(d)),l()}})),function(){const t=e(r).map(c);o.refs.popBooksList.insertAdjacentHTML("beforeend",t.join(""))}();o=i("8X9V8");(()=>{const e=document.querySelector(".menu"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),a=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open");bodyScrollLock[n?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",a),n.addEventListener("click",a),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),o.refs.menu.addEventListener("click",(e=>{"P"===e.target.nodeName&&e.target.nextElementSibling.classList.toggle("visible")}));
//# sourceMappingURL=index.f2439c57.js.map
