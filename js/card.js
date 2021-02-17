import {allOffers} from './data.js';

const addingOffers = () => {

  const blockInsert = document.querySelector('.map__canvas');
  const templateFragment = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const similarCards = allOffers();

  const similarListOffers = document.createDocumentFragment();

  similarCards.array.forEach((offer) => {
    const cardElement = templateFragment.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;
    cardElement.querySelector('.popup__type').textContent = offer.type;
    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').textContent = offer.features;
    cardElement.querySelector('.popup__description').textContent = offer.description;
    cardElement.querySelector('.popup__photos').src = offer.photos;
    cardElement.querySelector('.popup__avatar').textContent = offer.avatar;
  });

  blockInsert.appenChild(similarListOffers);

};

export {addingOffers};
