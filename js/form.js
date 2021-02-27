const MIN_PRICE = {
  bungalow: '0',
  flat: '1000',
  house: '5000',
  palace: '10000',
};

const typeField = document.querySelector('#type');
const priceField = document.querySelector('#price');
const timeField = document.querySelector('.ad-form__element--time');
const timeInField = document.querySelector('#timein');
const timeOutField = document.querySelector('#timeout');
const adForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const formFields = document.querySelectorAll('fieldset');
const mapFields = document.querySelectorAll('.map__filter');
const addressField = document.querySelector('#address');

typeField.addEventListener ('change', () => {
  const currentMinPrice = MIN_PRICE[typeField.value];
  priceField.setAttribute('placeholder', currentMinPrice);
  priceField.setAttribute('min', currentMinPrice);
});

timeField.addEventListener ('change', (evt) => {
  timeInField.value = evt.target.value;
  timeOutField.value = evt.target.value;
});

const disableForms = () => {
  formFields.forEach((field) => {
    field.disabled = true;
  });

  mapFields.forEach((field) => {
    field.disabled = true;
  });

  adForm.classList.add('ad-form--disabled');
  mapFilter.classList.add('map__filters--disabled');
};

const enableForms = () => {
  formFields.forEach((field) => {
    field.disabled = false;
  });

  mapFields.forEach((field) => {
    field.disabled = false;
  });

  adForm.classList.remove('ad-form--disabled');
  mapFilter.classList.remove('map__filters--disabled');
};

export { 
  disableForms, 
  enableForms,
  addressField
};