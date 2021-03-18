const setFilterAction = function (callback, offers) {



  const typeSelect = document.querySelector('#housing-type');

  const priceSelect = document.querySelector('#housing-price');

  const roomsSelect = document.querySelector('#housing-rooms');

  const guestsSelect = document.querySelector('#housing-guests');

  const wifiSelected = document.querySelector('.map__feature--wifi');

  const dishwasherSelected = document.querySelector('.map__feature--dishwasher');

  const parkingSelected = document.querySelector('.map__feature--parking');

  const washerSelected = document.querySelector('.map__feature--washer');

  const elevatorSelected = document.querySelector('.map__feature--elevator');

  const conditionerSelected = document.querySelector('.map__feature--conditioner');


  const offerForm = document.querySelector('.map__filters');

  const typeFilter = function  (offerInput)  {
    //'any' ???
    return offerInput.offer.type === typeSelect.value;

  }

  const priceFilter = function (offer) {
    const PriceMap = {
      'any': true,
      'low': offer.price < 10000,
      'high': offer.price > 50000,
      'middle':  offer.price < 50000 && offer.price > 10000,
    }
    return PriceMap[priceSelect.value]
  }

  const roomsFilter = function  (offer)  {
    //'any' ???

    return offer.rooms == roomsSelect.value;

  }

  const guestsFilter = function  (offer)  {
    //'any' ???
    return offer.guests0 == guestsSelect.value;
  }

  const wifiFilter = function (offer) {
    offer.features.indexOf('wifi') === wifiSelected.checked
  }

  const dishwasherFilter = function (offer) {
    offer.features.indexOf('wifi') === dishwasherSelected.checked
  }

  const parkingFilter = function (offer) {
    offer.features.indexOf('parking') === parkingSelected.checked
  }

  const washerFilter = function (offer) {
    offer.features.indexOf('washer') === washerSelected.checked
  }

  const elevatorFilter = function (offer) {
    offer.features.indexOf('elevator') === elevatorSelected.checked
  }

  const conditionerFilter = function (offer) {
    offer.features.indexOf('conditioner') === conditionerSelected.checked
  }

  offerForm.addEventListener('change', () => {
    const result = [typeFilter].reduce((tailOffer, customFilter) => tailOffer.filter(customFilter), offers);

    callback(result);
  })
}
//wifiFilter, dishwasherFilter, parkingFilter, washerFilter, elevatorFilter,conditionerFilter, , roomsFilter, guestsFilter, priceFilter
export {setFilterAction};

