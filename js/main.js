'use strict';

// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function (min, max) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Задан неверный диапазон');
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = function (min, max, numbers) {
  if (max <= min || min < 0 || max < 0) {
    throw new Error('Задан неверный диапазон');
  }
  if (numbers === undefined || numbers < 0) {
    numbers = 0;
  }
  return (Math.random() * (max - min) + min).toFixed(numbers);
}

getRandomIntInclusive(0, 10);
getRandomFloat(1.1, 1.5, 5);