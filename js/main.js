'use strict';

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

const getRandomIntInclusive = (min, max) => {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Задан неверный диапазон');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min, max, numbers) => {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Задан неверный диапазон');
  }
  if (numbers === undefined || numbers < 0) {
    numbers = 0;
  }
  return (Math.random() * (max - min) + min).toFixed(numbers);
};

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

const shuffleArray = (elements) => {
  const shuffleElements = elements.slice();
  for (let i = shuffleElements.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleElements[i], shuffleElements[j]] = [shuffleElements[j], shuffleElements[i]];
  }
  return shuffleElements;
};

const getRandomArray = (elements) => {
  return shuffleArray(elements).slice(getRandomIntInclusive(0, elements.length - 1));
};

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
similarAds;