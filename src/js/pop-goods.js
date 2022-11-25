import { refs } from './common-ref';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import cardTpl from '../templates/card.hbs';
import { setBooksCountInCart } from './setBooksCountInCart';
import POPULAR_BOOKS from '../books.json';
import { getBooksFromStorage } from './getBooksFromStorage';

const savedBooks = getBooksFromStorage('booksInCart');

refs.popularGoods.addEventListener('click', popBookClickHandler);

render();

function popBookClickHandler(e) {
  if (
    e.target.nodeName === 'svg' &&
    e.target.classList.contains('card__icon-cart')
  ) {
    const checkedBookId = Number(e.target.closest('li').getAttribute('id'));

    const checkedBook = POPULAR_BOOKS.find(book => book.id === checkedBookId);
    checkedBook.quantity = 1;

    const isInCart = savedBooks.find(el => el.id === checkedBookId);

    if (!isInCart) {
      savedBooks.push(checkedBook);
      Toastify({
        text: 'Книга успешно добавлена в корзину',
        duration: 3000,
        style: {
          background: 'linear-gradient(to right, #00b09b, green)',
        },
      }).showToast();
    } else {
      Toastify({
        text: 'Эта книга уже есть в корзине',
        duration: 3000,
      }).showToast();
    }

    localStorage.setItem('booksInCart', JSON.stringify(savedBooks));

    setBooksCountInCart();
  }
}

function render() {
  const markup = POPULAR_BOOKS.map(cardTpl);
  refs.popularGoods.insertAdjacentHTML('beforeend', markup.join(''));
}
