const radioBtns = document.querySelector('.form__payment-method');
radioBtns.addEventListener('click', onRadioBtnsClick);

function onRadioBtnsClick(e) {
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

const radioBtnsDelivery = document.querySelector('.form__delivery-method');
radioBtnsDelivery.addEventListener('click', onRadioBtnsDelClick);

function onRadioBtnsDelClick(e) {
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
