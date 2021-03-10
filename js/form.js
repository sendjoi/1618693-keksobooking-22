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

const minPriceMap = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
}

housingType.addEventListener('change', (event) => {
  price.value = priceMap[event.target.value]
})

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
  } else if (valueLength > minPriceMap[housingType.value]) {
    offerPriceInput.setCustomValidity('Максимальная цена данного типа жилья' + minPriceMap[housingType.value]);
  } else {
    offerPriceInput.setCustomValidity('');
  }
});

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

const offerRoomsInput = document.querySelector('#room_number');



offerRoomsInput.addEventListener('change', (evt) => {
  if (evt.target.value === '1') {
    document.querySelector('#capacity').setCustomValidity('Только для 1 гостя');
  } else if (evt.target.value === '2') {
    document.querySelector('#capacity').setCustomValidity('Для 2 гостей или для 1 гостя');
  } else if (evt.target.value === '3') {
    document.querySelector('#capacity').setCustomValidity('Для 3 гостей, для 2 гостей или для 1 гостя');
  } else if (evt.target.value === '100') {
    document.querySelector('#capacity').setCustomValidity('Не для гостей');
  }
})


timeIn.addEventListener('change', () => {
  timeOut.selectedIndex = timeIn.selectedIndex;
})

timeOut.addEventListener('change', () => {
  timeIn.selectedIndex = timeOut.selectedIndex;
})

const addressInput = document.querySelector('#address');


const putAddressinInput = function (coordinates) {
  addressInput.value = coordinates;
}


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



export {putAddressinInput};
