export const refs = {
  // ============header============
  headerLogo: document.querySelector('.logo'),
  headerTel: document.querySelector('.header__phone'),
  headerMenu: document.querySelector('[data-menu]'),
  headerDandruffLeft: document.querySelector('[data-dandruff-l]'),
  headerDandruffRight: document.querySelector('[data-dandruff-r]'),
  headerHeart: document.querySelector('[data-heart]'),
  headerCart: document.querySelector('[data-cart]'),
  headerCartBooksCount: document.querySelector('.cart__count span'),
  headerFavBooksCount: document.querySelector('.fav__count span'),

  // ============hero============
  heroBtn: document.querySelector('.btn'),
  heroArrowLeft: document.querySelector('.hero__icon--left'),
  heroArrowRight: document.querySelector('.hero__icon--right'),

  //============cart=====================================
  paymentBtn: document.querySelector('.cart__btn'),
  paymentTotalPrice: document.querySelector('.cart__total-price span'),
  bookList: document.querySelector('.cart__list'),
  cartMessage: document.querySelector('.cart__message'),

  //===========favorites==============================
  favoritesList: document.querySelector('.fav__list'),
  favMessage: document.querySelector('.fav__message'),

  //=========pop books====================
  popBooksList: document.querySelector('.popular__books'),
  popularGoods: document.querySelector('.popular__goods'),

  //===============deposits books====================
  depoBooksList: document.querySelector('.deposits__books'),
  //==========menu=======================
  menuBtn: document.querySelector('[data-menu]'),
  menu: document.querySelector('.menu'),

  //===========order form================
  orderForm: document.querySelector('.form'),
  radioPaymentBtns: document.querySelector('.form__payment-method'),
  radioDeliveryBtns: document.querySelector('.form__delivery-method'),
  booksInOrder: document.querySelector('.order-card__list'),
  totalPriceInCart: document.querySelector('.cart__total-price span'),
  totalPriceInOrder: document.querySelector('.order-card__total-wrapper span'),
};
