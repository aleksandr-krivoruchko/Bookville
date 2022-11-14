import { refs } from './common-ref';
import cardTpl from '../templates/card.hbs';
import { setBooksCountInCart } from './setBooksCountInCart';
import POPULAR_BOOKS from '../books.json';

const savedBooks = localStorage.getItem('booksInCart');
const parsedSavedBooks = JSON.parse(savedBooks);

let booksInCart;

if (parsedSavedBooks) {
  booksInCart = [...parsedSavedBooks];
}

refs.popBooksList.addEventListener('click', popBookClickHandler);

render();

function popBookClickHandler(e) {
  if (
    e.target.nodeName === 'svg' &&
    e.target.classList.contains('card__icon-cart')
  ) {
    const checkedBookId = e.target.closest('li').getAttribute('id');
    const checkedBook = POPULAR_BOOKS.find(
      book => book.id === Number(checkedBookId)
    );

    booksInCart.push(checkedBook);
    localStorage.setItem('booksInCart', JSON.stringify(booksInCart));

    setBooksCountInCart();
  }
}

function render() {
  const markup = POPULAR_BOOKS.map(cardTpl);
  refs.popBooksList.insertAdjacentHTML('beforeend', markup.join(''));
}
