import {allOffers} from './data.js';
import {fillPhotos} from './util.js';

const placementMap = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  DEFAULT: 'Не установлено',
}

const addingOffers = () => {

  const blockInsert = document.querySelector('.map__canvas');
  const templateFragment = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const similarCards = allOffers();

  const similarListOffers = [];

  similarCards.forEach(({author, offer}) => {
    const cardElement = templateFragment.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;

    cardElement.querySelector('.popup__type').textContent = placementMap[offer.type];

    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').textContent = offer.features;
    cardElement.querySelector('.popup__description').textContent = offer.description;

    const photoBlock =  cardElement.querySelector('.popup__photos');
    fillPhotos(photoBlock, offer.photos);

    cardElement.querySelector('.popup__avatar').src = author.avatar;

    similarListOffers.push(cardElement);
  });
  blockInsert.append(similarListOffers[0]);

};

export {addingOffers};

