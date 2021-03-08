import {setSubmit} from './create-fetch.js';
import {getSuccessMessage, getErrorMessage} from './alert.js';


const housingType = document.querySelector('#type');
const price = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const priceMap = {
  palace: '5000',
  flat: '2500',
  house: '7000',
  bungalow: '6000',
}

housingType.addEventListener('change', (event) => {
  price.value = priceMap[event.target.value]
})

timeIn.addEventListener('change', () => {
  timeOut.selectedIndex = timeIn.selectedIndex;
})

timeOut.addEventListener('change', () => {
  timeIn.selectedIndex = timeOut.selectedIndex;
})


/*
const addressInput = document.querySelector('#address');

  mainPinMarker.on('moveend', (evt) => {
  addressInput.value = evt.target.getLatLng());
  });
*/

const offerForm = document.querySelector('.ad-form');

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  setSubmit(evt.target).then(() => {
    getSuccessMessage();
  })
    .catch(() => {
      getErrorMessage();
    })
})

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const offerTitleInput = document.querySelector('#title');


offerTitleInput.addEventListener('invalid', () => {
  if (offerTitleInput.validity.valueMissing) {
    offerTitleInput.setCustomValidity('Обязательное поле');
  } else {
    offerTitleInput.setCustomValidity('');
  }
});

offerTitleInput.addEventListener('input', () => {
  const valueLength = offerTitleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    offerTitleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_TITLE_LENGTH) {
    offerTitleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
  } else {
    offerTitleInput.setCustomValidity('');
  }
});


const MAX_PRICE = 1000000;
const offerPriceInput = document.querySelector('#price');


offerPriceInput.addEventListener('invalid', () => {
  if (offerPriceInput.validity.valueMissing) {
    offerPriceInput.setCustomValidity('Обязательное поле');
  } else {
    offerPriceInput.setCustomValidity('');
  }
});

offerPriceInput.addEventListener('input', () => {
  const valueLength = offerPriceInput.value;

  if (valueLength > MAX_PRICE) {
    offerPriceInput.setCustomValidity('Максимальная цена ' + MAX_PRICE);
  } else {
    offerPriceInput.setCustomValidity('');
  }
});
