!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequirea36e;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequirea36e=o);var a=o("4HWmI");var l=e(o("7jKnM")).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,r,o){var a,l=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",i=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<li class="order-card__item">\n\t<div>\n\t\t<p class="card__author">'+i(typeof(a=null!=(a=u(n,"author")||(null!=t?u(t,"author"):t))?a:s)===c?a.call(l,{name:"author",hash:{},data:o,loc:{start:{line:3,column:26},end:{line:3,column:36}}}):a)+'</p>\n\t\t<p class="card__book">'+i(typeof(a=null!=(a=u(n,"name")||(null!=t?u(t,"name"):t))?a:s)===c?a.call(l,{name:"name",hash:{},data:o,loc:{start:{line:4,column:24},end:{line:4,column:32}}}):a)+'</p>\n\t</div>\n<div>\n\t\t<span class="card__amount">1</span>\n\t\t<span>x</span>\n\t\t<span class="card__price">'+i(typeof(a=null!=(a=u(n,"price")||(null!=t?u(t,"price"):t))?a:s)===c?a.call(l,{name:"price",hash:{},data:o,loc:{start:{line:9,column:28},end:{line:9,column:37}}}):a)+"$</span>\n</div>\n</li>"},useData:!0});const s="order-form";!function(){const e=localStorage.getItem("booksInCart"),t=JSON.parse(e);console.log(t);const n=t.map(l);a.refs.booksInOrder.insertAdjacentHTML("beforeend",n.join(""))}(),function(){let e=localStorage.getItem("booksInCart");e&&(e=JSON.parse(e));a.refs.totalPriceInOrder.textContent=e.length}(),a.refs.orderForm.addEventListener("submit",(function(e){e.preventDefault();const t={};let n=localStorage.getItem("booksInCart");n&&(n=JSON.parse(n));t.order=n;new FormData(a.refs.orderForm).forEach(((e,n)=>{t[n]=e})),console.log(t),localStorage.removeItem(s),localStorage.removeItem("booksInCart"),e.currentTarget.reset()})),a.refs.orderForm.addEventListener("change",(function(e){let t=localStorage.getItem(s);t=t?JSON.parse(t):{},t[e.target.name]=e.target.value,localStorage.setItem(s,JSON.stringify(t))})),function(){let e=localStorage.getItem(s);e&&(e=JSON.parse(e));Object.entries(e).forEach((([e,t])=>{a.refs.orderForm.elements[e].value=t}))}()}();
//# sourceMappingURL=order-page.5cd6e666.js.map
