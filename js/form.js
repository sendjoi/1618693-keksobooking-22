import {setSubmit} from './create-fetch.js';
import {getSuccessMessage, getErrorMessage} from './alert.js';
import {createFetch} from './create-fetch.js';
import {showAlert} from './alert.js';
import {getHousingTypeFilter} from './filters.js';



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

const offerNameInput = document.querySelector('#title');

/*offerNameInput.addEventListener('invalid', () => {
  if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', () => {
  const valueLength = userNameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    userNameInput.setCustomValidity('Ещё ' + (MIN_NAME_LENGTH - valueLength) +' симв.');
  } else if (valueLength > MAX_NAME_LENGTH) {
    userNameInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_NAME_LENGTH) +' симв.');
  } else {
    userNameInput.setCustomValidity('');
  }
});
*/
const housingTypeFilter = document.querySelector('#housing-type');

housingTypeFilter.addEventListener('change', (evt) => {
  const OFFER_COUNT = 10;
  createFetch()
    .then((offers) => {
      getHousingTypeFilter(offers.slice(0, OFFER_COUNT), evt.target.value);
    })
    .catch(() => {
      showAlert('Ошибка получения данных');
    });
})
