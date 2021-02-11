import {getRandomIntInclusive, getRandomFloat, getRandomArrayElement, getRandomArray} from './utils.js';

const TITLES = [
  'Уютное место в центре города',
  'Роскошный отель рядом с морем',
  'Гостиница для всей семьи',
  'Апартаменты с собственной террасой',
  'Отель с собственным парком',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const HOURS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTION = [
  'Удобные и просторные номера',
  'Хорошее местополжение в городе',
  'Лучшие цены у нас',
  'Бесплатные завтраки и обеды',
  'Скидки для студентов',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const SIMILAR_AD_COUNT = 10;



const createAd = () => {
  const X = getRandomFloat(35.65000, 35.70000, 5);
  const Y = getRandomFloat(139.70000, 139.80000, 5);
  return {
    author: {
      avatar: 'img/avatars/user0' + getRandomIntInclusive(1, 8) + '.png',
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: X + ', ' + Y,
      price: getRandomIntInclusive(10000, 50000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomIntInclusive(1, 4),
      guests: getRandomIntInclusive(1, 6),
      checkin: getRandomArrayElement(HOURS),
      checkout: getRandomArrayElement(HOURS),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArray(PHOTOS),
    },
    location: {
      x: X,
      y: Y,
    },
  }
};

const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createAd());

export { similarAds };