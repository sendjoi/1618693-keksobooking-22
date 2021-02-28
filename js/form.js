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

  const templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.message');

  const seccessElement = templateSuccess.cloneNode(true);

  document.body.main.append(seccessElement);

}

const offerForm = document.querySelector('.ad-form');

offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  setSubmit(evt, getSuccessMessage);
})

