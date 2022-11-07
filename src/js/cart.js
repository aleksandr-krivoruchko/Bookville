import { refs } from './common-ref';
import { bookCounter } from './book-counter';
const BOOKS = [
  {
    id: 1,
    img: 'book-mob.c771a6fa.jpg',
    author: 'Ольга Примаченко',
    name: 'К себе нежно',
    price: 790,
  },
  {
    id: 2,
    img: 'book-mob.c771a6fa.jpg',
    author: 'Барбара Колорозо',
    name: 'Травля',
    price: 990,
  },
  {
    id: 3,
    img: 'book-mob.c771a6fa.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
  {
    id: 4,
    img: 'book-mob.c771a6fa.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
];

const itemTemplate = ({
  id,
  img,
  author,
  name,
  price,
}) => `<li class="cart__item" id=${id}>
        <div class="cart__img-wrapper">
          <img src='${img}' alt="book" class="cart__img" />
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
              <span class="cart__book-amount-text">0</span>
              <button class="cart__book-amount-btn" data-action="decr">
                -
              </button>
            </div>
            <p class="cart__book-price"><span>${price}</span> ₽</p>
          </div>
        </div>
      </li>`;

function render() {
  const markup = BOOKS.map(itemTemplate);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
  console.log(refs.bookListItems);
}
render();
bookCounter();
