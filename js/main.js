// Источник: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max <= min || min < 0 || max < 0) {
    return;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = function (min, max, numbers) {
  if (max <= min || min < 0 || max < 0) {
    return;
  }
  return (Math.random() * (max - min) + min).toFixed(numbers);
}

getRandomIntInclusive(0, 10);
getRandomFloat(1.1, 1.5, 5);