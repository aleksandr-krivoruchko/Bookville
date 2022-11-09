import { refs } from './common-ref';
import { bookCounter } from './book-counter.js';
import photo_1 from '../images/photo-1.jpg';
import photo_2 from '../images/photo-2.jpg';
import photo_3 from '../images/photo-3.jpg';

const savedBooks = localStorage.getItem('booksInCart');
const booksInCart = JSON.parse(savedBooks);

refs.headerCartBooksCount.textContent = booksInCart.length;

refs.paymentBtn.addEventListener('click', paymentBtnClickHandler);

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

const sendMessage = `<h2 class="cart__title" style='padding: 50px'>Thanks for order.</h2>`;

render();
bookCounter();

function render() {
  const markup = booksInCart.map(itemTemplate);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
}

function paymentBtnClickHandler(e) {
  e.preventDefault();
  refs.bookList.innerHTML = sendMessage;
  localStorage.removeItem('booksInCart');
}
