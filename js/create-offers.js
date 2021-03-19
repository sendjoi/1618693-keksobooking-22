'use strict'
import {fillPhotos} from './util.js';

const Placementmap = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  DEFAULT: 'Не установлено',
}

const addingOffers = (point) => {

  const templateFragment = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const cardElement = templateFragment.cloneNode(true);
  cardElement.querySelector('.popup__title').textContent = point.offer.title;
  cardElement.querySelector('.popup__text--address').textContent = point.offer.address;
  cardElement.querySelector('.popup__text--price').textContent = `${point.offer.price}₽/ночь`;

  cardElement.querySelector('.popup__type').textContent = Placementmap[point.offer.type];

  cardElement.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  cardElement.querySelector('.popup__features').textContent = point.offer.features;
  cardElement.querySelector('.popup__description').textContent = point.offer.description;

  const photoBlock =  cardElement.querySelector('.popup__photos');
  fillPhotos(photoBlock, point.offer.photos);

  cardElement.querySelector('.popup__avatar').src = point.author.avatar;

  return cardElement;
};

export {addingOffers};

