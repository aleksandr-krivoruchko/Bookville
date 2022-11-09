import { refs } from './common-ref';
import photo from '../images/book.jpg';
import icons from '../images/symbol-defs.svg';
import { setBooksCountInCart } from './setBooksCountInCart';

const POPULAR_BOOKS = [
  {
    id: 1,
    img: photo,
    author: 'Ольга Примаченко',
    name: 'К себе нежно',
    price: 790,
  },
  {
    id: 2,
    img: photo,
    author: 'Барбара Колорозо',
    name: 'Травля',
    price: 990,
  },
  {
    id: 3,
    img: photo,
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
  {
    id: 4,
    img: photo,
    author: 'Барбара Колорозо',
    name: 'Травля',
    price: 990,
  },
  {
    id: 5,
    img: photo,
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
}) => `<li class="card" id=${id}>
        <div class="card__wrapper">
          <div class="card__heart">
            <svg class="card__icon-heart">
              <use href="${icons}#icon-heart"></use>
            </svg>
          </div>
          <div class="card__thumb">
            <img src='${img}' alt='${name}' class="card__img" />
          </div>
          <div class="card__info">
            <p class="card__author">${author}</p>
            <p class="card__book">${name}</p>
            <p class="card__price">${price}$</p>
            <svg class="card__icon-cart">
              <use href="${icons}#icon-cart"></use>
            </svg>
          </div>
        </div>
      </li>`;

function render() {
  const markup = POPULAR_BOOKS.map(itemTemplate);
  refs.popBooksList.insertAdjacentHTML('beforeend', markup.join(''));
}

render();

refs.popBooksList.addEventListener('click', popBookClickHandler);

const booksInCart = [];

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
