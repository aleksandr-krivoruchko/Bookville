import { refs } from './common-ref';

// refs.paymentBtn.addEventListener('click', () => console.log('qqqqqqq'));
// refs.increaseBtn.addEventListener('click', bookCount);
// refs.decreaseBtn.addEventListener('click', bookCount);

console.log(refs.paymentTotalPrice.textContent);
console.log(refs.bookCount);
console.log(refs.bookPrice);
console.log(refs.bookList);

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
    img: 'http://localhost:1234/book-mob.c771a6fa.jpg',
    author: 'Барбара Колорозо',
    name: 'Травля',
    price: 990,
  },
  {
    id: 3,
    img: 'http://localhost:1234/book-mob.c771a6fa.jpg',
    author: 'Максим Поташев, Павел Ершов',
    name: 'Правила команды',
    price: 1190,
  },
];

const markup = BOOKS.map(
  book => `<li class="cart__item" id=${book.id}>
        <div class="cart__img-wrapper">
          <img src='${book.img}' alt="book" class="cart__img" />
        </div>
        <div class="cart__book-info">
          <div>
            <p class="cart__book-info-author">${book.author}</p>
            <p class="cart__book-info-name">${book.name}</p>
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
            <p class="cart__book-price">${book.price} ₽</p>
          </div>
        </div>
      </li>`
);

refs.bookList.insertAdjacentHTML('beforeend', markup.join(''));

// let count = Number(refs.bookCount.textContent);
// let price = Number(parseFloat(refs.bookPrice.textContent));

// function bookCount(e) {
//   const text = e.currentTarget.dataset.action;

//   if (text === 'incr') {
//     count += 1;
//     refs.bookCount.textContent = count;

//     refs.bookPrice.textContent = price * count + '₽';
//   }
//   if (count !== 0 && text === 'decr') {
//     count -= 1;
//     refs.bookCount.textContent = count;

//     refs.bookPrice.textContent = price * count + '₽';
//   }
// }
