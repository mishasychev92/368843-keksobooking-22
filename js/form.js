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

typeField.addEventListener ('change', () => {
  const currentMinPrice = MIN_PRICE[typeField.value];
  priceField.setAttribute('placeholder', currentMinPrice);
  priceField.setAttribute('min', currentMinPrice);
});

timeField.addEventListener ('change', (evt) => {
  timeInField.value = evt.target.value;
  timeOutField.value = evt.target.value;
});