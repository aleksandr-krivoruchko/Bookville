import { refs } from './common-ref';
import orderItemTpl from '../templates/order-item.hbs';

const STORAGE_KEY = 'order-form';
render();
setBooksCountInOrder();
// refs.totalPriceInCart.textContent = refs.totalPriceInCart.textContent;

console.log(refs.totalPriceInCart.textContent);

refs.orderForm.addEventListener('submit', onFormSubmit);
refs.orderForm.addEventListener('change', setInputToStorage);

initForm();

function setInputToStorage(e) {
  let persistedValues = localStorage.getItem(STORAGE_KEY);
  persistedValues = persistedValues ? JSON.parse(persistedValues) : {};
  persistedValues[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persistedValues));
}

function onFormSubmit(e) {
  e.preventDefault();

  const formData = new FormData(refs.orderForm);

  formData.forEach((value, name) => console.log(name, value));

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem('booksInCart');

  e.currentTarget.reset();
}

function initForm() {
  let dataStorage = localStorage.getItem(STORAGE_KEY);

  if (dataStorage) {
    dataStorage = JSON.parse(dataStorage);
  }

  Object.entries(dataStorage).forEach(([name, value]) => {
    refs.orderForm.elements[name].value = value;
  });
}

function render() {
  const savedBooks = localStorage.getItem('booksInCart');
  const booksInCart = JSON.parse(savedBooks);

  console.log(booksInCart);

  const markup = booksInCart.map(orderItemTpl);

  refs.booksInOrder.insertAdjacentHTML('beforeend', markup.join(''));
}

function setBooksCountInOrder() {
  let savedBooks = localStorage.getItem('booksInCart');

  if (savedBooks) {
    savedBooks = JSON.parse(savedBooks);
  }
  refs.totalPriceInOrder.textContent = savedBooks.length * 100;
}
