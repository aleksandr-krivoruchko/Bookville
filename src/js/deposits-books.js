import { refs } from './common-ref';
import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';
import cardTpl from '../templates/card.hbs';
import { setBooksCountInCart } from './setBooksCountInCart';
import { getBooksFromStorage } from './getBooksFromStorage';

const savedBooks = getBooksFromStorage('booksInCart');
const favBooks = getBooksFromStorage('booksInFav');
const depoBooks = getBooksFromStorage('deposits');

refs.depoBooksList.addEventListener('click', addToCart);
refs.depoBooksList.addEventListener('click', addToFavorite);

render();

function addToCart(e) {
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
        duration: 2000,
        style: {
          background: 'linear-gradient(to right, #00b09b, green)',
        },
      }).showToast();
    } else {
      Toastify({
        text: 'Эта книга уже есть в корзине',
        duration: 2000,
      }).showToast();
    }

    localStorage.setItem('booksInCart', JSON.stringify(savedBooks));

    setBooksCountInCart();
  }
}

function addToFavorite(e) {
  if (
    e.target.nodeName === 'svg' &&
    e.target.classList.contains('card__icon-heart')
  ) {
    const checkedBookId = Number(e.target.closest('li').getAttribute('id'));

    const checkedBook = POPULAR_BOOKS.find(book => book.id === checkedBookId);

    const isInFav = favBooks.find(el => el.id === checkedBookId);

    if (!isInFav) {
      favBooks.push(checkedBook);
      Toastify({
        text: 'Книга успешно добавлена в избранное',
        duration: 2000,
        style: {
          background: 'linear-gradient(to right, #00b09b, green)',
        },
      }).showToast();
    } else {
      Toastify({
        text: 'Эта книга уже есть в избранных',
        duration: 2000,
      }).showToast();
    }

    localStorage.setItem('booksInFav', JSON.stringify(favBooks));
  }
  console.log(favBooks);
}

function render() {
  const markup = depoBooks.map(cardTpl);
  refs.depoBooksList.insertAdjacentHTML('beforeend', markup.join(''));
}
