import { refs } from './common-ref';
import { setBooksCountInCart } from './setBooksCountInCart';

refs.headerLogo.addEventListener('click', iconClickHandler);
refs.headerTel.addEventListener('click', iconClickHandler);
refs.headerMenu.addEventListener('click', iconClickHandler);
refs.headerDandruffLeft.addEventListener('click', iconClickHandler);
refs.headerDandruffRight.addEventListener('click', iconClickHandler);
refs.headerHeart.addEventListener('click', iconClickHandler);
refs.headerCart.addEventListener('click', iconClickHandler);

function iconClickHandler(e) {
  console.log('click');
}
setBooksCountInCart();
