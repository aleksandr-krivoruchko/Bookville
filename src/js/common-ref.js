export const refs = {
  // ============header============
  headerLogo: document.querySelector('.logo'),
  headerTel: document.querySelector('.header__phone'),
  headerMenu: document.querySelector('[data-menu]'),
  headerDandruffLeft: document.querySelector('[data-dandruff-l]'),
  headerDandruffRight: document.querySelector('[data-dandruff-r]'),
  headerHeart: document.querySelector('[data-heart]'),
  headerCart: document.querySelector('[data-cart]'),

  // ============hero============
  heroBtn: document.querySelector('.btn'),
  heroArrowLeft: document.querySelector('.hero__icon--left'),
  heroArrowRight: document.querySelector('.hero__icon--right'),

  //============cart=====================================
  paymentBtn: document.querySelector('.cart__btn'),
  paymentTotalPrice: document.querySelector('.cart__total-price span'),
  increaseBtn: document.querySelector('button[data-action="incr"]'),
  decreaseBtn: document.querySelector('button[data-action="decr"]'),
  bookCount: document.querySelectorAll('.cart__book-amount-text'),
  bookPrice: document.querySelectorAll('.cart__book-price'),
  bookList: document.querySelector('.cart__list'),
  bookListItem: document.querySelectorAll('.cart__list li'),
};
