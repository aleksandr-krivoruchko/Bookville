import { refs } from './common-ref';
import cartItemTpl from '../templates/cart-item.hbs';
import { bookCounter } from './book-counter.js';
import { getBooksFromStorage } from './getBooksFromStorage';
import { setBooksCountInCart } from './setBooksCountInCart';

const savedBooks = setBooksCountInCart();

if (savedBooks) {
  refs.cartMessage.classList.add('cart__message--none');
}

render();
bookCounter();

function render() {
  const markup = savedBooks.map(cartItemTpl);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
}
