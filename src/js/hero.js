import { refs } from './common-ref';

refs.heroBtn.addEventListener('click', () => console.log('go to ...'));

document.addEventListener('DOMContentLoaded', () => {
  const slider = new ItcSimpleSlider('.itcss');

  document.querySelector('.hero__icon--left').onclick = () => {
    slider.prev();
  };
  document.querySelector('.hero__icon--right').onclick = () => {
    slider.next();
  };
});
