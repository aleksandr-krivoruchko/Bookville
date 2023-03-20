import { refs } from './common-ref.js';

export function setBooksCountInCart() {
  const savedBooks = localStorage.getItem('booksInCart');
  const booksInCart = JSON.parse(savedBooks);
  if (booksInCart) {
    refs.headerCartBooksCount.textContent = booksInCart.length;
  }
  return booksInCart;
}

export function setBooksCountInFav() {
  const savedBooks = localStorage.getItem('booksInFav');
  const booksInFav = JSON.parse(savedBooks);
  if (booksInFav) {
    refs.headerFavBooksCount.textContent = booksInFav.length;
  }
  return booksInFav;
}
