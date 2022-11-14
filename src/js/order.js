import { refs } from './common-ref';

const STORAGE_KEY = 'order-form';
refs.orderForm.addEventListener('submit', onFormSubmit);
refs.orderForm.addEventListener('input', setInputToStorage);

const formData = {};

populateForm();

function setInputToStorage(e) {
  formData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.clear();
  e.currentTarget.reset();
}

function populateForm() {
  let dataStorage = localStorage.getItem(STORAGE_KEY);

  if (dataStorage) {
    dataStorage = JSON.parse(dataStorage);
  }

  Object.entries(dataStorage).forEach(([name, value]) => {
    refs.orderForm.elements[name].value = value;
  });
}
