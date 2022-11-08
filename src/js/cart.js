import { refs } from './common-ref.js';
import { bookCounter } from './book-counter.js';

const BOOKS = [
  {
    id: 1,
    img: 'https://cdn.pixabay.com/photo/2019/08/19/08/34/portrait-4415789__340.jpg',
    author: 'Ольга Примаченко',
    name: 'К себе нежно',
    price: 790,
  },
  {
    id: 2,
    img: 'https://cdn.pixabay.com/photo/2020/01/21/17/40/mechanism-failure-4783468__340.jpg',
    author: 'Барбара Колорозо',
    name: 'Травля',
    price: 990,
  },
  //   {
  //     id: 3,
  //     img: 'https://cdn.pixabay.com/photo/2019/11/03/11/43/skull-4598438__340.jpg',
  //     author: 'Максим Поташев, Павел Ершов',
  //     name: 'Правила команды',
  //     price: 1190,
  //   },
];

const itemTemplate = ({
  id,
  img,
  author,
  name,
  price,
}) => `<li class="cart__item" id=${id}>
        <div class="cart__img-wrapper">
          <img src=${img} alt=${name} class="cart__img" width='80' height='100' />
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
            <p class="cart__book-price"><span>${price}</span> $</p>
          </div>
        </div>
      </li>`;

function render() {
  const markup = BOOKS.map(itemTemplate);

  refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));
}
render();
bookCounter();
