import { refs } from './common-ref';

refs.radioPaymentBtns.addEventListener('click', onRadioPaymentBtnsClick);
refs.radioDeliveryBtns.addEventListener('click', onRadioDeliveryBtnsClick);

function onRadioPaymentBtnsClick(e) {
  if (e.target.nodeName !== 'LABEL') {
    return;
  }

  const currentActiveRadioBtn = refs.radioPaymentBtns.querySelector(
    '.form__payment-label--active'
  );
  const currentActiveIconCheck = refs.radioPaymentBtns.querySelector(
    '.form__icon--checked'
  );

  if (currentActiveRadioBtn) {
    currentActiveRadioBtn.classList.remove('form__payment-label--active');
  }
  if (currentActiveIconCheck) {
    currentActiveIconCheck.classList.remove('form__icon--checked');
  }

  e.target.classList.add('form__payment-label--active');
  e.target.firstElementChild.classList.add('form__icon--checked');
}

function onRadioDeliveryBtnsClick(e) {
  if (e.target.nodeName !== 'LABEL') {
    return;
  }

  const currentActiveRadioBtn = refs.radioDeliveryBtns.querySelector(
    '.form__payment-label--active'
  );
  const currentActiveIconCheck = refs.radioDeliveryBtns.querySelector(
    '.form__icon--checked'
  );

  if (currentActiveRadioBtn) {
    currentActiveRadioBtn.classList.remove('form__payment-label--active');
  }
  if (currentActiveIconCheck) {
    currentActiveIconCheck.classList.remove('form__icon--checked');
  }

  e.target.classList.add('form__payment-label--active');
  e.target.firstElementChild.classList.add('form__icon--checked');
}
