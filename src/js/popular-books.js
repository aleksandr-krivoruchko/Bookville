import { refs } from './common-ref.js';

console.log(refs.popBooksList);

const POPULAR_BOOKS = [
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2019/11/03/11/43/skull-4598438__340.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2019/11/03/11/43/skull-4598438__340.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
  {
    id: 3,
    img: 'https://cdn.pixabay.com/photo/2019/11/03/11/43/skull-4598438__340.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
];

const itemTemplatePop = ({
  id,
  img,
  author,
  name,
  price,
}) => `<li class="card" id=${id}>
        <div class="card__wrapper">
          <div class="card__heart">
            <svg class="card__icon-heart">
              <use href="images/symbol-defs.svg#icon-heart"></use>
            </svg>
          </div>
          <div class="card__thumb">
            <img src=${img} alt=${name} class="card__img" />
          </div>
          <div class="card__info">
            <p class="card__author">${author}</p>
            <p class="card__book">${name}</p>
            <p class="card__price">${price}$</p>
            <svg class="card__icon-cart">
              <use href="images/symbol-defs.svg#icon-cart"></use>
            </svg>
          </div>
        </div>
      </li>`;

function render() {
  const markup = POPULAR_BOOKS.map(itemTemplatePop);
  refs.popBooksList.insertAdjacentHTML('beforeend', markup.join(''));
}

render();
