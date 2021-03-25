'use strict'
import {debounce} from './util.js';

const OFFER_COUNT = 10;
const UP_LIMIT = 10000;
const DOWN_LIMIT = 50000;
const ANY = 'any';
const LOW = 'low';
const MID = 'middle';
const HIGH = 'high';
const typeSelect = document.querySelector('#housing-type');
const priceSelect = document.querySelector('#housing-price');
const roomsSelect = document.querySelector('#housing-rooms');
const guestsSelect = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const filterForm = document.querySelector('.map__filters');
const PriceMap = {
  [ANY]: () => true,
  [LOW]: (offerInput) => offerInput.offer.price < UP_LIMIT,
  [MID]: (offerInput) => offerInput.offer.price < DOWN_LIMIT && offerInput.offer.price > UP_LIMIT,
  [HIGH]: (offerInput) => offerInput.offer.price > DOWN_LIMIT,
}

let filterDataApply = null;

const setFilterAction = (render, offers) => {
  const typeFilter = (offerInput) => {
    if (typeSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.type === typeSelect.value;
  }
  const priceFilter = (offerInput) => {
    const priceFilterFlag = PriceMap[priceSelect.value];
    return priceFilterFlag(offerInput);
  }
  const roomsFilter = (offerInput) => {
    if (roomsSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.rooms === Number(roomsSelect.value);
  }
  const guestsFilter = (offerInput) => {
    if (guestsSelect.value === 'any') {
      return true;
    }
    return offerInput.offer.guests === Number(guestsSelect.value);
  }
  const filterFeatures = (offer) => {
    const checkedFeatures = housingFeatures.querySelectorAll('input:checked');
    return [...checkedFeatures].every((feature) => offer.offer.features.includes(feature.value));
  };
  const filterData = debounce(() => {
    const result = [
      typeFilter,
      priceFilter,
      roomsFilter,
      guestsFilter,
      filterFeatures,
    ].reduce((tailOffers, customFilter) => tailOffers.filter(customFilter), offers).slice(0, OFFER_COUNT);
    render(result);
  }, 500);

  filterDataApply = filterData;
  filterForm.addEventListener('change', filterData);
  render(offers);
}

const filterReset = () => {
  typeSelect.value = 'any';
  priceSelect.value = 'any';
  roomsSelect.value = 'any';
  guestsSelect.value = 'any';
  housingFeatures.querySelectorAll('input').forEach((feature) => {
    feature.checked = false;
  })
  filterDataApply();
}

export {setFilterAction, filterReset};
