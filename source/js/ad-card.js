import { declOfNum } from './utils.js';

const TYPES = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const ROOMS_WORDS = [
  'комната',
  'комнаты',
  'комнат',
];

const QUEST_WORDS = [
  'гостя',
  'гостей',
  'гостей',
];

const adTemplate = document.querySelector('#card').content.querySelector('.popup');

const renderFeaturesIntoContainer = (container, features) => {
  container.innerHTML = '';

  features.forEach((element) => {
    const newFeature = document.createElement('li');
    newFeature.classList.add('popup__feature', `popup__feature--${element}`);
    container.appendChild(newFeature);
  });
};

const renderPhotosIntoContainer = (container, photos) => {
  const adPhoto = container.querySelector('.popup__photo');
  container.innerHTML = '';

  photos.forEach((element) => {
    const newPhoto = adPhoto.cloneNode('true');
    newPhoto.src = element;
    container.appendChild(newPhoto);
  });
};

const renderAdCard = (adData) => {
  const adCard = adTemplate.cloneNode('true');
  adCard.querySelector('.popup__title').textContent = adData.offer.title;
  adCard.querySelector('.popup__text--address').textContent = adData.offer.address;
  adCard.querySelector('.popup__text--price').textContent = `${adData.offer.price} ₽/ночь`;
  adCard.querySelector('.popup__type').textContent = TYPES[adData.offer.type];
  adCard.querySelector('.popup__text--capacity').textContent = `${adData.offer.rooms} ${declOfNum(adData.offer.rooms, ROOMS_WORDS)} для ${adData.offer.guests} ${declOfNum(adData.offer.guests, QUEST_WORDS)}`;
  adCard.querySelector('.popup__text--time').textContent = `Заезд после ${adData.offer.checkin}, выезд до ${adData.offer.checkout}`;
  adCard.querySelector('.popup__description').textContent = adData.offer.description;
  adCard.querySelector('.popup__avatar').src = adData.author.avatar;
  renderFeaturesIntoContainer(adCard.querySelector('.popup__features'), adData.offer.features);
  renderPhotosIntoContainer(adCard.querySelector('.popup__photos'), adData.offer.photos);
  return adCard;
};

export { renderAdCard };