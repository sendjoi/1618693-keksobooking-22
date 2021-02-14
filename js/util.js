import {TITLES, ADDRESS, TYPE, CHECKIN_TIMES, CHECKOUT_TIMES, FEATURES, DESCRIPTIONS, PHOTOS, OFFERS_QUANTITY, X_MIN_LIMIT, X_MAX_LIMIT, Y_MIN_LIMIT, Y_MAX_LIMIT, X_Y_FLOAT} from './data.js';

// Функция рандомного числа
const  getRandomNumber =  function (min, max, numberLength) {
  return Number((Math.random() * (max - min) + min).toFixed(numberLength));
}
// Функция рандомного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length -1, 0)];
};
// Функция получения рандомного массива из массива
const getRandomArray = (elements) => {
  const features = []
  for (let i= 0; i < getRandomNumber(0, elements.length -1,0); i++) {
  features.push(getRandomArrayElement(elements))
  }
  return features;
}

const createOffer = () => {
  return  {
    author: {
      avatar: `img/avatars/user0${getRandomNumber(1, 8, 0)}.png`
      },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomArrayElement(ADDRESS),
      price: getRandomNumber(10,100,0),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomNumber(1,10,0),
      guests: getRandomNumber(1,20,0),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
      },
    location: {
      x: getRandomNumber(X_MIN_LIMIT, X_MAX_LIMIT, X_Y_FLOAT),
      y: getRandomNumber(Y_MIN_LIMIT, Y_MAX_LIMIT, X_Y_FLOAT)
      }
  }
}

const allOffers = new Array(OFFERS_QUANTITY).fill(null).map(() => createOffer());

export {allOffers};
