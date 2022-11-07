export function bookCounter() {
  const bookListItems = document.querySelectorAll('.cart__list .cart__item');

  bookListItems.forEach(el => {
    let bookAmount = el.querySelector('.cart__book-amount-text');
    const btnIncr = el.querySelector('button[data-action="incr"]');
    const btnDecr = el.querySelector('button[data-action="decr"]');
    let price = el.querySelector('.cart__book-price span');

    if (bookAmount.textContent == 0) {
      btnDecr.disabled = true;
      btnDecr.classList.add('cart__book-amount-btn--disabled');
    }

    btnIncr.addEventListener('click', e => {
      if (e.target.dataset.action === 'incr') {
        bookAmount.textContent++;
        price.textContent = price.textContent * bookAmount.textContent;
      }
      if (bookAmount.textContent > 0) {
        btnDecr.disabled = false;
        btnDecr.classList.remove('cart__book-amount-btn--disabled');
      }
    });
    btnDecr.addEventListener('click', e => {
      if (e.target.dataset.action === 'decr') {
        bookAmount.textContent--;
      }
      if (bookAmount.textContent <= 0) {
        btnDecr.disabled = true;
        btnDecr.classList.add('cart__book-amount-btn--disabled');
      }
    });
  });
}
