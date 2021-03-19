'use strict'
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const Minpricemap = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
}

const Roomsmap = {
  1: ['none','none','block', 'none'],
  2: ['none','block','block','none'],
  3: ['block','block','block','none'],
  100: ['none','none','none','block'],
}

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
  offerTitleInput.reportValidity();
});

const price = document.querySelector('#price');

const housingType = document.querySelector('#type');

housingType.addEventListener('change', (event) => {
  price.placeholder = Minpricemap[event.target.value];
})

const offerPriceField = document.querySelector('#price');

const minPriceValidation = (minPrice) => {
  offerPriceField.setCustomValidity(`Мин прайс ${minPrice}`);
};

offerPriceField.addEventListener('input', () => {
  const price = offerPriceField.value;

  const MIN_PRICE = Minpricemap[housingType.value];

  offerPriceField.min = MIN_PRICE;
  if (price < MIN_PRICE) {
    minPriceValidation(MIN_PRICE);
  } else {
    offerPriceField.setCustomValidity('');
  }
  offerPriceField.reportValidity();
})

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

timeIn.addEventListener('change', () => {
  timeOut.selectedIndex = timeIn.selectedIndex;
})

timeOut.addEventListener('change', () => {
  timeIn.selectedIndex = timeOut.selectedIndex;
})

const offerRoomsInput = document.querySelector('#room_number');

const filtreRooms = function (roomsList, selectedValue) {
  const roomsValue = document.querySelector('#capacity');
  roomsValue.value = selectedValue;
  if (selectedValue === '100') {
    roomsValue.value = '0'
  }
  roomsList.forEach((element, index) => {
    element.style.display= Roomsmap[selectedValue][index];
  })
}

const roomsOptions = document.querySelectorAll('#capacity option');

offerRoomsInput.addEventListener('input', (evt) => {
  filtreRooms(roomsOptions, evt.target.value);
})

export {filtreRooms};


