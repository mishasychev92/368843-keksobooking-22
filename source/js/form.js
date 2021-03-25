import { showErrorPopup, showSuccessPopup } from './popup.js';
import { addAdPinsIntoMap, resetMainMarker } from './map.js';
import { getData, sendData } from './api.js';
import { resetImagePreview } from './ad-photos.js';

const MIN_PRICE = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};
const MAX_PRICE = 1000000;
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const NUMBER_OF_QUESTS = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
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
const titleField = document.querySelector('#title');
const roomsField = document.querySelector('#room_number');
const capacityField = document.querySelector('#capacity');
const guestOptions = capacityField.querySelectorAll('option');
const resetButton = adForm.querySelector('.ad-form__reset');

const changeMinPrice = () => {
  const currentMinPrice = MIN_PRICE[typeField.value];
  priceField.setAttribute('placeholder', currentMinPrice);
  priceField.setAttribute('min', currentMinPrice);
};

typeField.addEventListener('change', changeMinPrice);

timeField.addEventListener ('change', (evt) => {
  timeInField.value = evt.target.value;
  timeOutField.value = evt.target.value;
});

titleField.addEventListener('input', () => {
  const valueLength = titleField.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleField.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleField.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    titleField.setCustomValidity('');
  }

  titleField.reportValidity();
});

priceField.addEventListener('input', () => {
  const priceValue = priceField.value;

  if (priceValue < MIN_PRICE[typeField.value]) {
    priceField.setCustomValidity(`Минимальная цена - ${MIN_PRICE[typeField.value]}`);
  } else if (priceValue > MAX_PRICE) {
    priceField.setCustomValidity(`Максимальная цена - ${MAX_PRICE}`);
  } else {
    priceField.setCustomValidity('');
  }

  priceField.reportValidity();
});

const changeNumberOfGuests = () => {
  guestOptions.forEach((option) => {
    if (NUMBER_OF_QUESTS[roomsField.value].includes(Number(option.value))) {
      option.disabled = false;
      option.selected = true;
    } else {
      option.disabled = true;
    }
  });
}

roomsField.addEventListener('change', changeNumberOfGuests);

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
  changeNumberOfGuests();
};

resetButton.addEventListener ('click', (evt) => {
  evt.preventDefault();
  adForm.reset();
  mapFilter.reset();
  changeMinPrice();
  changeNumberOfGuests();
  resetMainMarker();
  resetImagePreview();
  getData((adData) => {
    addAdPinsIntoMap(adData);
  }, showErrorPopup);
});

const onSuccessSubmit = () => {
  showSuccessPopup('Форма отправлена!');
  adForm.reset();
  mapFilter.reset();
  changeMinPrice();
  changeNumberOfGuests();
  resetMainMarker();
  resetImagePreview();
  getData((adData) => {
    addAdPinsIntoMap(adData);
  }, showErrorPopup);
};

const onFailSubmit = () => {
  showErrorPopup('Не удалось отправить форму. Попробуйте ещё раз.');
};

const setFormSubmit = () => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      onSuccessSubmit,
      onFailSubmit,
      new FormData(evt.target),
    );
  });
};

const setMapFilterChange = (cb) => {
  mapFilter.addEventListener('change', cb);
};

export { 
  disableForms, 
  enableForms,
  addressField,
  setFormSubmit,
  mapFilter,
  setMapFilterChange
};