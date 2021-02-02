const = typeInput ['palace', 'flat',  'house', 'bungalow'];
const = checkinInpit ['12:00', '13:00', '14:00'];
const = checkoutInpit ['12:00', '13:00', '14:00'];
const featuresInput = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const photosInput = ['http://o0.github.io/assets/images/tokyo/hotel1.jpg', 'http://o0.github.io/assets/images/tokyo/hotel2.jpg', 'http://o0.github.io/assets/images/tokyo/hotel3.jpg'];

const  getRandomNumber =  function (min, max, numberLength) {
  return Number((Math.random() * (max - min) + min).toFixed(numberLength));
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length -1, 0)];
};

const offerSamples = {
    author: {
      avatar: img/avatars/user{{xx}}.png //Вопрос, как тут быть
    },
    offer: {
      title: "Best housing",
      address: [location.x, location.y],   // Тут тоже вопрос по x, y
      price: getRandomNumber(0,100,0),
      type: getRandomArrayElement(typeInput),
      rooms: getRandomNumber(0,100,0),
      guests: getRandomNumber(0,100,0),
      checkin: getRandomArrayElement(checkinInpit),
      checkout: getRandomArrayElement(checkoutInpit),
      features: getRandomArrayElement(featuresInput),
      description: "The best as you can find",
      photos: getRandomArrayElement(photosInput),
    },
    location: {
      x: getRandomNumber(35.65000, 35.70000, 5),
      y: getRandomNumber(139.70000, 139.80000, 5)
    }
}

const OFFERS_QUANTITY = 10;

  const createOffer = () => {
    return  {
      // Тут мы  должны красиво получить массив
      // Типо title: ????
      // Вообщем вопросы))
    }
  }

  const allOffers = new Array(OFFERS_QUANTITY).fill(null).map(() => createOffer());
