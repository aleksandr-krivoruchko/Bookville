import { refs } from './common-ref';

refs.orderForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const data = new FormData(refs.orderForm);
  //   const {
  //     elements: { name, surname, mail, tel },
  //   } = e.currentTarget;

  //   const order = {
  //     name: name.value,
  //     surname: surname.value,
  //     mail: mail.value,
  //     tel: tel.value,
  //   };

  //   if (name.value === '' || surname.value === '' || mail.value === '') {
  //     return console.log('Please fill in all the fields!');
  //   }

  const abj = {};

  data.forEach(el => {
    console.log(el[el.name]);
  });

  //   e.currentTarget.reset();
}

const radioBtns = document.querySelector('.form__payment-method');
radioBtns.addEventListener('click', onRadioBtnsAddClass);

const radioBtnsDelivery = document.querySelector('.form__delivery-method');
radioBtnsDelivery.addEventListener('click', onRadioBtnsDeleteClass);

function onRadioBtnsAddClass(e) {
  if (e.target.nodeName !== 'LABEL') {
    return;
  }

  const currentActiveRadioBtn = radioBtns.querySelector(
    '.form__payment-label--active'
  );
  const currentActiveIconCheck = radioBtns.querySelector(
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
function onRadioBtnsDeleteClass(e) {
  if (e.target.nodeName !== 'LABEL') {
    return;
  }

  const currentActiveRadioBtn = radioBtnsDelivery.querySelector(
    '.form__payment-label--active'
  );
  const currentActiveIconCheck = radioBtnsDelivery.querySelector(
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
