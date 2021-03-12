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

const price = document.querySelector('#price');

const priceMap = {
  palace: '5000',
  flat: '2500',
  house: '7000',
  bungalow: '6000',
}

const housingType = document.querySelector('#type');

housingType.addEventListener('change', (event) => {
  price.value = priceMap[event.target.value]
})

const offerPriceField = document.querySelector('#price');

const minPriceValidation = (minPrice) => {
  offerPriceField.setCustomValidity(`Мин прайс ${minPrice}`);
};

offerPriceField.addEventListener('input', () => {
  const price = offerPriceField.value;

  const minPriceMap = {
    palace: 10000,
    flat: 1000,
    house: 5000,
    bungalow: 0,
  }
  const MIN_PRICE = minPriceMap[housingType.value];

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

const RoomsMap = {
  1: [true, true, false, true],
  2: [true, false, false, true],
  3: [false, false, false, true],
  100: [true, true, true, false],
}

const filtreRooms = function (roomsList, selectedValue) {
  roomsList.forEach((element, index) => {
    element.disabled= RoomsMap[selectedValue][index];
  })
}

const roomsOptions = document.querySelectorAll('#capacity option');

offerRoomsInput.addEventListener('input', (evt) => {
  filtreRooms(roomsOptions, evt.target.value);
})



export {filtreRooms};


