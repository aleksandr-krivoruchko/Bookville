import { refs } from './common-ref';

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
}
let q = 0;

function start() {
  render();
  refs.bookList.addEventListener('click', onBtnIncreaseClick);
}

function onBtnIncreaseClick(e) {
  let amount = e.target.parentNode.children[1].textContent;
  //   amount = '10';
  console.log(amount);
  //   const price =
  //     e.target.parentNode.nextElementSibling.querySelector('span').textContent;

  if (e.target.dataset.action === 'incr') {
    q = q + 1;
  } else {
  }
}
console.log(q);
start();
