'use strict';
const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MinpriceMap = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};
const RoomsMap = {
  '1': ['none','none','block', 'none'],
  '2': ['none','block','block','none'],
  '3': ['block','block','block','none'],
  '100': ['none','none','none','block'],
  'DEFAULT': [],
};
const offerTitleInput = document.querySelector('#title');
const housingType = document.querySelector('#type');
const offerPriceField = document.querySelector('#price');
const roomsOptions = document.querySelectorAll('#capacity option');
const offerRoomsInput = document.querySelector('#room_number');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomsValue = document.querySelector('#capacity');

const filtreRooms = (roomsList, selectedValue) => {
  roomsValue.value = selectedValue;
  if (selectedValue === '100') {
    roomsValue.value = '0'
  }
  roomsList.forEach((element, index) => {
    element.style.display= RoomsMap[selectedValue][index];
  })
}
const validationInit = () => {
  filtreRooms(document.querySelectorAll('#capacity option'), 1);
}

const getValidation = () => {
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
  housingType.addEventListener('change', (event) => {
    offerPriceField.placeholder = MinpriceMap[event.target.value];
  })
  const minPriceValidation = (minPrice) => {
    offerPriceField.setCustomValidity(`Минимальная цена ${minPrice}`);
  };
  offerPriceField.addEventListener('input', () => {
    const price = offerPriceField.value;
    const MIN_PRICE = MinpriceMap[housingType.value];
    offerPriceField.min = MIN_PRICE;
    if (price < MIN_PRICE) {
      minPriceValidation(MIN_PRICE);
    } else {
      offerPriceField.setCustomValidity('');
    }
    offerPriceField.reportValidity();
  })
  timeIn.addEventListener('change', () => {
    timeOut.selectedIndex = timeIn.selectedIndex;
  })
  timeOut.addEventListener('change', () => {
    timeIn.selectedIndex = timeOut.selectedIndex;
  })
  offerRoomsInput.addEventListener('input', (evt) => {
    filtreRooms(roomsOptions, evt.target.value);
  })
  validationInit();
}
export {getValidation, validationInit};


