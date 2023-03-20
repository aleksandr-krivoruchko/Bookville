import { refs } from './common-ref';
import card from '../templates/card.hbs';
import { bookCounter } from './book-counter.js';
import { setBooksCountInFav, setBooksCountInCart } from './setBooksCountInCart';

const favBooks = setBooksCountInFav();

if (favBooks) {
  refs.favMessage.classList.add('fav__message--none');
}

render();
setBooksCountInFav();
setBooksCountInCart();
bookCounter();

function render() {
  const markup = favBooks.map(card);

  refs.favoritesList.insertAdjacentHTML('beforeend', markup.join(''));
}
