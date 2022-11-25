import { refs } from './common-ref';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import orderItemTpl from '../templates/order-item.hbs';
import { setBooksCountInCart } from './setBooksCountInCart';
import { getBooksFromStorage } from './getBooksFromStorage';

const STORAGE_KEY = 'order-form';
const savedBooks = getBooksFromStorage('booksInCart');
let total = 0;

render();
setBooksCountInCart();
setBooksCountInOrder();

refs.orderForm.addEventListener('submit', onFormSubmit);
refs.orderForm.addEventListener('change', setInputToStorage);

initForm();
calculationFinalAmount();

function setInputToStorage(e) {
  let persistedValues = localStorage.getItem(STORAGE_KEY);
  persistedValues = persistedValues ? JSON.parse(persistedValues) : {};
  persistedValues[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedValues));
}

function onFormSubmit(e) {
  e.preventDefault();

  const obj = {};

  obj.order = savedBooks;
  obj.order.totalPrice = total;

  const formData = new FormData(refs.orderForm);

  formData.forEach((value, name) => {
    obj[name] = value;
  });

  console.log(obj);

  Toastify({
    text: `Ваш заказ на сумму ${total}$ успешно отправлен`,
    duration: 3000,
    style: {
      background: 'linear-gradient(to right, #00b09b, green)',
    },
  }).showToast();

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('booksInCart');
  refs.booksInOrder.innerHTML = '';
  refs.totalPriceInOrder.textContent = 0;
  e.currentTarget.reset();
}

function initForm() {
  const dataStorage = getBooksFromStorage(STORAGE_KEY);

  Object.entries(dataStorage).forEach(([name, value]) => {
    refs.orderForm.elements[name].value = value;
  });
}

function render() {
  const savedBooks = localStorage.getItem('booksInCart');
  const booksInCart = JSON.parse(savedBooks) || [];

  const markup = booksInCart.map(orderItemTpl);

  refs.booksInOrder.insertAdjacentHTML('beforeend', markup.join(''));
}

function setBooksCountInOrder() {
  let savedBooks = localStorage.getItem('booksInCart');

  if (savedBooks) {
    savedBooks = JSON.parse(savedBooks);
  }
  refs.totalPriceInOrder.textContent = savedBooks.length;
}

function calculationFinalAmount() {
  savedBooks.forEach((el, i) => {
    total += el.price * el.quantity;
  });

  refs.totalPriceInOrder.textContent = total;
}
