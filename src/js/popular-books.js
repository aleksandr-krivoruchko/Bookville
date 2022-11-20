import { refs } from './common-ref';
import cardTpl from '../templates/card.hbs';
import { setBooksCountInCart } from './setBooksCountInCart';
import POPULAR_BOOKS from '../books.json';
import { getBooksFromStorage } from './getBooksFromStorage';

const savedBooks = getBooksFromStorage('booksInCart');

refs.popBooksList.addEventListener('click', popBookClickHandler);

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
    } else {
      isInCart.quantity++;
    }

    localStorage.setItem('booksInCart', JSON.stringify(savedBooks));

    setBooksCountInCart();
  }
}

function render() {
  const markup = POPULAR_BOOKS.map(cardTpl);
  refs.popBooksList.insertAdjacentHTML('beforeend', markup.join(''));
}
