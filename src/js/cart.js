import { refs } from './common-ref';
import { bookCounter } from './book-counter.js';

const savedBooks = localStorage.getItem('booksInCart');
const booksInCart = JSON.parse(savedBooks);

refs.headerCartBooksCount.textContent = booksInCart.length;

if (booksInCart) {
  refs.cartMessage.classList.add('cart__message--none');
}

const itemTemplate = ({
  id,
  img,
  author,
  name,
  price,
}) => `<li class="cart__item" id=${id}>
        <div class="cart__img-wrapper">
          <img src='${img}' alt=${name} class="cart__img" width="50" height="80"/>
        </div>
        <div class="cart__book-info">
          <div>
            <p class="cart__book-info-author">${author}</p>
            <p class="cart__book-info-name">${name}</p>
          </div>
          <div class="cart__book-wrapper">
            <div class="cart__book-amount">
              <button class="cart__book-amount-btn" data-action="incr">
                +
              </button>
              <span class="cart__book-amount-text">1</span>
              <button class="cart__book-amount-btn" data-action="decr">
                -
              </button>
            </div>
            <p class="cart__book-price"><span>${price}</span> $</p>
          </div>
        </div>
      </li>`;

render();
bookCounter();

function render() {
  const markup = booksInCart.map(itemTemplate);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
}
