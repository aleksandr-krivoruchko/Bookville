import { refs } from './common-ref.js';

export function setBooksCountInCart() {
  const savedBooks = localStorage.getItem('booksInCart');
  const booksInCart = JSON.parse(savedBooks);
  if (booksInCart) {
    refs.headerCartBooksCount.textContent = booksInCart.length;
  }
}
