'use strict'
import {fillPhotos, fillFeatures, getRemoveSpaceBlock} from './util.js';

const templateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');
const PlacementMap = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  DEFAULT: 'Не установлено',
}
const addingOffers = (point) => {
  const cardCopy = templateFragment.cloneNode(true);

  cardCopy.querySelector('.popup__title').textContent = point.offer.title;
  getRemoveSpaceBlock(cardCopy.querySelector('.popup__title'), point.offer.title);

  cardCopy.querySelector('.popup__text--address').textContent = point.offer.address;
  cardCopy.querySelector('.popup__text--price').textContent = `${point.offer.price}₽/ночь`;
  cardCopy.querySelector('.popup__type').textContent = PlacementMap[point.offer.type];
  cardCopy.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  cardCopy.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  fillFeatures(cardCopy.querySelector('.popup__features'), point.offer.features);
  getRemoveSpaceBlock(cardCopy.querySelector('.popup__features'), point.offer.features);
  cardCopy.querySelector('.popup__description').textContent = point.offer.description;

  const photoBlock =  cardCopy.querySelector('.popup__photos');
  fillPhotos(photoBlock, point.offer.photos);

  cardCopy.querySelector('.popup__avatar').src = point.author.avatar;
  return cardCopy;
};
export {addingOffers};

