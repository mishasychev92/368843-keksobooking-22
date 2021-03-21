import { mapFilter } from './form.js';

const typeFilter = mapFilter.querySelector('#housing-type');
const priceFilter = mapFilter.querySelector('#housing-price');
const roomsFilter = mapFilter.querySelector('#housing-rooms');
const guestsFilter = mapFilter.querySelector('#housing-guests');
const featuresFilter = mapFilter.querySelector('#housing-features');

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const filterTypes = (adData) => {
  if (typeFilter.value === 'any') {
    return true;
  }
  return adData.offer.type === typeFilter.value;
};

const filterPrice = (adData) => {
  switch (priceFilter.value) {
    case 'any':
      return true;
    case 'low':
      return adData.offer.price < LOW_PRICE;
    case 'middle':
      return adData.offer.price >= LOW_PRICE && adData.offer.price < HIGH_PRICE;
    case 'high':
      return adData.offer.price >= HIGH_PRICE;
    default:
      return false;
  }
};

const filterRooms = (adData) => {
  if (roomsFilter.value === 'any') {
    return true;
  }
  return adData.offer.rooms === Number(roomsFilter.value);
};

const filterGuests = (adData) => {
  if (guestsFilter.value === 'any') {
    return true;
  }
  return adData.offer.guests === Number(guestsFilter.value);
};

const filterFeatures = (adData) => {
  const checkedFeatures = [...featuresFilter.querySelectorAll('input:checked')].map((feature) => feature.value);

  if (!checkedFeatures.length) {
    return true;
  }
  return checkedFeatures.every((feature) => adData.offer.features.includes(feature));
}

const filterAdData = (adData) => {
  return filterTypes(adData) && filterPrice(adData) && filterRooms(adData) && filterGuests(adData) && filterFeatures(adData);
};

export { 
  filterAdData
};