'use strict'
import {debounce} from './util.js';

const OFFER_COUNT = 10;

const setFilterAction = function (callback, offers) {

  const typeSelect = document.querySelector('#housing-type');

  const priceSelect = document.querySelector('#housing-price');

  const roomsSelect = document.querySelector('#housing-rooms');

  const guestsSelect = document.querySelector('#housing-guests');

  const housingFeatures = document.querySelector('#housing-features');

  const offerForm = document.querySelector('.map__filters');

  const typeFilter = function  (offerInput)  {
    if (typeSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.type === typeSelect.value;
  }

  const priceFilter = function (offerInput) {
    const Pricemap = {
      'any': true,
      'low': offerInput.offer.price < 10000,
      'high': offerInput.offer.price > 50000,
      'middle':  offerInput.offer.price < 50000 && offerInput.offer.price > 10000,
    }
    if (priceSelect.value === 'any') {
      return true;
    }
    return Pricemap[priceSelect.value]
  }

  const roomsFilter = function  (offerInput)  {
    if (roomsSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.rooms === Number(roomsSelect.value);
  }

  const guestsFilter = function  (offerInput)  {
    if (guestsSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.guests === Number(guestsSelect.value);
  }

  const filterFeatures = (offer) => {
    const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

    return [].every.call(checkedFeatures, (element) => {
      return offer.offer.features.includes(element.value);
    });
  };

  const returnedFunction = debounce(function() {
    const result = [typeFilter, priceFilter, roomsFilter, guestsFilter, filterFeatures].reduce((tailOffer, customFilter) => tailOffer.filter(customFilter), offers).slice(0, OFFER_COUNT);

    callback(result);
  }, 500)

  offerForm.addEventListener('change', returnedFunction)

  callback(offers);
}

export {setFilterAction};
