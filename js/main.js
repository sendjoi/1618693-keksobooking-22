const TITLES = ['Hotel Ukraine', 'Hostel Friens', 'House Island', 'Apartament Castle'];
const ADDRESS = ['Baker street 5c8', 'Red Square 2c3', 'Main Avenue 4c1', 'Green boulevard 5c9'];
const TYPE = ['palace', 'flat',  'house', 'bungalow'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const CHECKOUT = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const DESCRIPTIONS = ['Best comfort in center', 'Twice cleaning', 'Low noize, delicious breakfast ', 'Of couse you can with animals'];
const PHOTOS = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];
const OFFERS_QUANTITY = 10;
const XMINLIMIT = 35.60000;
const XMAXLIMIT = 35.70000;
const YMINLIMIT = 139.70000;
const YMAXLIMIT = 139.80000;
const XYFLOAT = 5;

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
      avatar: img/avatars/user`${'0' + getRandomNumber(1, 8, 0)}`.png // как сделать ведущий ноль? 01
      },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: getRandomArrayElement(ADDRESS),
      price: getRandomNumber(10,100,0),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomNumber(1,10,0),
      guests: getRandomNumber(1,20,0),
      checkin: getRandomArrayElement(CHECKIN),
      checkout: getRandomArrayElement(CHECKOUT),
      features: getRandomArray(FEATURES),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArray(PHOTOS),
      },
    location: {
      x: getRandomNumber(XMINLIMIT, XMAXLIMIT, XYFLOAT),
      y: getRandomNumber(YMINLIMIT, YMAXLIMIT, XYFLOAT)
      }
  }
}

const allOffers = new Array(OFFERS_QUANTITY).fill(null).map(() => createOffer());

