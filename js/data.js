import {getRandomNumber, getRandomArrayElement, getRandomArray} from './util.js';

const TITLES = ['Hotel Ukraine', 'Hostel Friens', 'House Island', 'Apartament Castle'];
const ADDRESS = ['Baker street 5c8', 'Red Square 2c3', 'Main Avenue 4c1', 'Green boulevard 5c9'];
const TYPE = ['palace', 'flat',  'house', 'bungalow'];
const CHECKIN_TIMES = ['12:00', '13:00', '14:00'];
const CHECKOUT_TIMES = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Best comfort in center', 'Twice cleaning', 'Low noize, delicious breakfast ', 'Of couse you can with animals'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OFFERS_QUANTITY = 10;
const X_MIN_LIMIT = 35.60000;
const X_MAX_LIMIT = 35.70000;
const Y_MIN_LIMIT = 139.70000;
const Y_MAX_LIMIT = 139.80000;
const X_Y_FLOAT = 5;

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
      y: getRandomNumber(Y_MIN_LIMIT, Y_MAX_LIMIT, X_Y_FLOAT),
    },
  }
};

const allOffers = () => new Array(OFFERS_QUANTITY).fill(null).map(() => createOffer());

export {allOffers};
