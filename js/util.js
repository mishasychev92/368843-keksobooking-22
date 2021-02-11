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

export { 
  getRandomIntInclusive, 
  getRandomFloat, 
  getRandomArrayElement, 
  getRandomArray
};