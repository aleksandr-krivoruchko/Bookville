import { refs } from './common-ref';
import carItemTpl from '../templates/cart-item.hbs';
import { bookCounter } from './book-counter.js';

const savedBooks = localStorage.getItem('booksInCart');
const booksInCart = JSON.parse(savedBooks);

refs.headerCartBooksCount.textContent = booksInCart.length;

if (booksInCart) {
  refs.cartMessage.classList.add('cart__message--none');
}

render();
bookCounter();

function render() {
  const markup = booksInCart.map(carItemTpl);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
}
