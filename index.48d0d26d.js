!function(){function t(t){return t&&t.__esModule?t.default:t}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},s=o.parcelRequirea36e;null==s&&((s=function(t){if(t in e)return e[t].exports;if(t in i){var o=i[t];delete i[t];var s={id:t,exports:{}};return e[t]=s,o.call(s.exports,s,s.exports),s.exports}var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,o){i[t]=o},o.parcelRequirea36e=s),s("4HWmI");const n="AIzaSyB5N6znZPkO97yxX04QwMbQ_K9Z9BPTspA";fetch(`https://www.googleapis.com/books/v1/volumes?q=IT&key=${n}&maxResults=10`).then((t=>t.json())).then((t=>{const o=[];t.items.map((t=>{const e=t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.smallThumbnail,i=t.volumeInfo.title,s=t.volumeInfo.authors?t.volumeInfo.authors:"unknown",n=t.saleInfo.listPrice?t.saleInfo.listPrice.amount:t.saleInfo.saleability,a=t.volumeInfo.averageRating&&t.volumeInfo.averageRating;o.push({img:`${e}`,title:`${i}`,author:`${s}`,price:`${n}`,rate:`${a}`})})),localStorage.setItem("pop",JSON.stringify(o))})).catch((t=>console.error(t))),fetch(`https://www.googleapis.com/books/v1/volumes?q=trees&key=${n}&maxResults=10`).then((t=>t.json())).then((t=>{const o=[];t.items.map((t=>{const e=t.volumeInfo.imageLinks&&t.volumeInfo.imageLinks.smallThumbnail,i=t.volumeInfo.title,s=t.volumeInfo.authors?t.volumeInfo.authors:"unknown",n=t.saleInfo.listPrice?t.saleInfo.listPrice.amount:t.saleInfo.saleability,a=t.volumeInfo.averageRating&&t.volumeInfo.averageRating;o.push({img:`${e}`,title:`${i}`,author:`${s}`,price:`${n}`,rate:`${a}`})})),localStorage.setItem("deposits",JSON.stringify(o))})).catch((t=>console.error(t))),s("4HWmI"),(0,(u=s("020dy")).setBooksCountInCart)(),(0,u.setBooksCountInFav)(),(l=s("4HWmI")).refs.heroBtn.addEventListener("click",(()=>console.log("go to ...")));new Swiper(".swiper",{loop:!0,pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}});var a,r,l=s("4HWmI"),c={};
/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */
a=c,r=function(t){var o=function(t){return new o.lib.init(t)};function e(t,o){return o.offset[t]?isNaN(o.offset[t])?o.offset[t]:o.offset[t]+"px":"0px"}function i(t,o){return!(!t||"string"!=typeof o||!(t.className&&t.className.trim().split(/\s+/gi).indexOf(o)>-1))}return o.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},o.lib=o.prototype={toastify:"1.12.0",constructor:o,init:function(t){return t||(t={}),this.options={},this.toastElement=null,this.options.text=t.text||o.defaults.text,this.options.node=t.node||o.defaults.node,this.options.duration=0===t.duration?0:t.duration||o.defaults.duration,this.options.selector=t.selector||o.defaults.selector,this.options.callback=t.callback||o.defaults.callback,this.options.destination=t.destination||o.defaults.destination,this.options.newWindow=t.newWindow||o.defaults.newWindow,this.options.close=t.close||o.defaults.close,this.options.gravity="bottom"===t.gravity?"toastify-bottom":o.defaults.gravity,this.options.positionLeft=t.positionLeft||o.defaults.positionLeft,this.options.position=t.position||o.defaults.position,this.options.backgroundColor=t.backgroundColor||o.defaults.backgroundColor,this.options.avatar=t.avatar||o.defaults.avatar,this.options.className=t.className||o.defaults.className,this.options.stopOnFocus=void 0===t.stopOnFocus?o.defaults.stopOnFocus:t.stopOnFocus,this.options.onClick=t.onClick||o.defaults.onClick,this.options.offset=t.offset||o.defaults.offset,this.options.escapeMarkup=void 0!==t.escapeMarkup?t.escapeMarkup:o.defaults.escapeMarkup,this.options.ariaLive=t.ariaLive||o.defaults.ariaLive,this.options.style=t.style||o.defaults.style,t.backgroundColor&&(this.options.style.background=t.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var t=document.createElement("div");for(var o in t.className="toastify on "+this.options.className,this.options.position?t.className+=" toastify-"+this.options.position:!0===this.options.positionLeft?(t.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):t.className+=" toastify-right",t.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.'),this.options.style)t.style[o]=this.options.style[o];if(this.options.ariaLive&&t.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)t.appendChild(this.options.node);else if(this.options.escapeMarkup?t.innerText=this.options.text:t.innerHTML=this.options.text,""!==this.options.avatar){var i=document.createElement("img");i.src=this.options.avatar,i.className="toastify-avatar","left"==this.options.position||!0===this.options.positionLeft?t.appendChild(i):t.insertAdjacentElement("afterbegin",i)}if(!0===this.options.close){var s=document.createElement("button");s.type="button",s.setAttribute("aria-label","Close"),s.className="toast-close",s.innerHTML="&#10006;",s.addEventListener("click",function(t){t.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var n=window.innerWidth>0?window.innerWidth:screen.width;("left"==this.options.position||!0===this.options.positionLeft)&&n>360?t.insertAdjacentElement("afterbegin",s):t.appendChild(s)}if(this.options.stopOnFocus&&this.options.duration>0){var a=this;t.addEventListener("mouseover",(function(o){window.clearTimeout(t.timeOutValue)})),t.addEventListener("mouseleave",(function(){t.timeOutValue=window.setTimeout((function(){a.removeElement(t)}),a.options.duration)}))}if(void 0!==this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),!0===this.options.newWindow?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),"function"==typeof this.options.onClick&&void 0===this.options.destination&&t.addEventListener("click",function(t){t.stopPropagation(),this.options.onClick()}.bind(this)),"object"==typeof this.options.offset){var r=e("x",this.options),l=e("y",this.options),c="left"==this.options.position?r:"-"+r,d="toastify-top"==this.options.gravity?l:"-"+l;t.style.transform="translate("+c+","+d+")"}return t},showToast:function(){var t;if(this.toastElement=this.buildToast(),!(t="string"==typeof this.options.selector?document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||"undefined"!=typeof ShadowRoot&&this.options.selector instanceof ShadowRoot?this.options.selector:document.body))throw"Root element is not defined";var e=o.defaults.oldestFirst?t.firstChild:t.lastChild;return t.insertBefore(this.toastElement,e),o.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(t){t.className=t.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),t.parentNode&&t.parentNode.removeChild(t),this.options.callback.call(t),o.reposition()}.bind(this),400)}},o.reposition=function(){for(var t,o={top:15,bottom:15},e={top:15,bottom:15},s={top:15,bottom:15},n=document.getElementsByClassName("toastify"),a=0;a<n.length;a++){t=!0===i(n[a],"toastify-top")?"toastify-top":"toastify-bottom";var r=n[a].offsetHeight;t=t.substr(9,t.length-1),(window.innerWidth>0?window.innerWidth:screen.width)<=360?(n[a].style[t]=s[t]+"px",s[t]+=r+15):!0===i(n[a],"toastify-left")?(n[a].style[t]=o[t]+"px",o[t]+=r+15):(n[a].style[t]=e[t]+"px",e[t]+=r+15)}return this},o.lib.init.prototype=o.lib,o},c?c=r():a.Toastify=r();var d,p=s("fk3mF"),u=s("020dy");d=JSON.parse('[{"id":1,"img":"https://readrate.com/img/pictures/book/292/29286/29286/w160h240-stretch-5ed3128e.jpg","author":"Рэй Брэдбери","name":"451° по Фаренгейту","price":79},{"id":2,"img":"https://readrate.com/img/pictures/book/295/29554/29554/w160h240-stretch-eccecf43.jpg","author":"Джордж Оруэлл","name":"1984","price":70},{"id":3,"img":"https://readrate.com/img/pictures/book/294/29495/29495/w160h240-stretch-98cc5ada.jpg","author":"Михаил Булгаков","name":"Мастер и Маргарита","price":80},{"id":4,"img":"https://readrate.com/img/pictures/book/300/30024/30024/w160h240-stretch-1cf76e6f.jpg","author":"Грегори Дэвид Робертс","name":"Шантарам","price":93},{"id":5,"img":"https://readrate.com/img/pictures/book/338/33800/33800/w160h240-stretch-dfdf5ef1.jpg","author":"Эрих Мария Ремарк","name":"Три товарища","price":66},{"id":6,"img":"https://readrate.com/img/pictures/book/292/29234/29234/w160h240-stretch-c262b73b.jpg","author":"Дэниел Киз","name":"Цветы для Элджернона","price":74},{"id":7,"img":"https://readrate.com/img/pictures/book/298/29818/29818/w160h240-stretch-bd100eb2.jpg","author":"Оскар Уайльд","name":"Портрет Дориана Грея","price":85},{"id":8,"img":"https://readrate.com/img/pictures/book/338/33800/33800/w160h240-stretch-dfdf5ef1.jpg","author":"Эрих Мария Ремарк","name":"Три товарища","price":66},{"id":9,"img":"https://readrate.com/img/pictures/book/292/29234/29234/w160h240-stretch-c262b73b.jpg","author":"Дэниел Киз","name":"Цветы для Элджернона","price":74},{"id":10,"img":"https://readrate.com/img/pictures/book/298/29818/29818/w160h240-stretch-bd100eb2.jpg","author":"Оскар Уайльд","name":"Портрет Дориана Грея","price":85}]');const h=(0,(g=s("gGHLW")).getBooksFromStorage)("booksInCart");console.log(h);const f=(0,g.getBooksFromStorage)("booksInFav"),m=(0,g.getBooksFromStorage)("pop");console.log(m),l.refs.popBooksList.addEventListener("click",(function(o){if("svg"===o.target.nodeName&&o.target.classList.contains("card__icon-cart")){const e=Number(o.target.closest("li").getAttribute("id")),i=t(d).find((t=>t.id===e));i.quantity=1;h.find((t=>t.id===e))?t(c)({text:"Эта книга уже есть в корзине",duration:2e3}).showToast():(h.push(i),t(c)({text:"Книга успешно добавлена в корзину",duration:2e3,style:{background:"linear-gradient(to right, #00b09b, green)"}}).showToast()),localStorage.setItem("booksInCart",JSON.stringify(h)),(0,u.setBooksCountInCart)()}})),l.refs.popBooksList.addEventListener("click",(function(o){if("svg"===o.target.nodeName&&o.target.classList.contains("card__icon-heart")){const e=Number(o.target.closest("li").getAttribute("id")),i=t(d).find((t=>t.id===e));f.find((t=>t.id===e))?t(c)({text:"Эта книга уже есть в избранных",duration:2e3}).showToast():(f.push(i),t(c)({text:"Книга успешно добавлена в избранное",duration:2e3,style:{background:"linear-gradient(to right, #00b09b, green)"}}).showToast()),localStorage.setItem("booksInFav",JSON.stringify(f))}console.log(f)})),function(){const t=m.map(p.default);l.refs.popBooksList.insertAdjacentHTML("beforeend",t.join(""))}();var g;l=s("4HWmI"),p=s("fk3mF"),u=s("020dy");const b=(0,(g=s("gGHLW")).getBooksFromStorage)("booksInCart"),v=(0,g.getBooksFromStorage)("booksInFav"),k=(0,g.getBooksFromStorage)("deposits");l.refs.depoBooksList.addEventListener("click",(function(o){if("svg"===o.target.nodeName&&o.target.classList.contains("card__icon-cart")){const e=Number(o.target.closest("li").getAttribute("id")),i=POPULAR_BOOKS.find((t=>t.id===e));i.quantity=1;b.find((t=>t.id===e))?t(c)({text:"Эта книга уже есть в корзине",duration:2e3}).showToast():(b.push(i),t(c)({text:"Книга успешно добавлена в корзину",duration:2e3,style:{background:"linear-gradient(to right, #00b09b, green)"}}).showToast()),localStorage.setItem("booksInCart",JSON.stringify(b)),(0,u.setBooksCountInCart)()}})),l.refs.depoBooksList.addEventListener("click",(function(o){if("svg"===o.target.nodeName&&o.target.classList.contains("card__icon-heart")){const e=Number(o.target.closest("li").getAttribute("id")),i=POPULAR_BOOKS.find((t=>t.id===e));v.find((t=>t.id===e))?t(c)({text:"Эта книга уже есть в избранных",duration:2e3}).showToast():(v.push(i),t(c)({text:"Книга успешно добавлена в избранное",duration:2e3,style:{background:"linear-gradient(to right, #00b09b, green)"}}).showToast()),localStorage.setItem("booksInFav",JSON.stringify(v))}console.log(v)})),function(){const t=k.map(p.default);l.refs.depoBooksList.insertAdjacentHTML("beforeend",t.join(""))}(),s("020dy");l=s("4HWmI");(()=>{const t=document.querySelector(".menu"),o=document.querySelector(".js-open-menu"),e=document.querySelector(".js-close-menu"),i=()=>{const e="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!e),t.classList.toggle("is-open");bodyScrollLock[e?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",i),e.addEventListener("click",i),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(t.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})(),l.refs.menu.addEventListener("click",(t=>{"P"===t.target.nodeName&&t.target.nextElementSibling.classList.toggle("visible")}))}();
//# sourceMappingURL=index.48d0d26d.js.map