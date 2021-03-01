import {setSubmit} from './create-fetch.js';
import {showAlert} from './util.js';

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


const getSuccessMessage = function() {
  const mainForm = document.querySelector('main');

  const templateSuccess = document.querySelector('#success').content

  const successElement = templateSuccess.cloneNode(true);

  mainForm.append(successElement);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      mainForm.remove(successElement);
    }
  });
  document.addEventListener('click' , (evt) => {
    evt.preventDefault();
    mainForm.remove(successElement);
  })
}

const getErrorMessage = function() {
  const mainForm = document.querySelector('main');
  const templateError = document.querySelector('#error').content

  const errorElement = templateError.cloneNode(true);

  mainForm.append(errorElement);

  const closeElement = errorElement.querySelector('.error__button');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      mainForm.remove(errorElement);
    }
  });
  document.addEventListener('click' , (evt) => {
    evt.preventDefault();
    mainForm.remove(errorElement);
  });
  closeElement.addEventListener('click', () => {
    mainForm.remove(errorElement);
  })
}



const offerForm = document.querySelector('.ad-form');

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  setSubmit(evt.target).then(() => {
    showAlert('Удалось отправить форму.');
  });
})

export {getErrorMessage};
