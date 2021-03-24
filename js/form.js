'use strict';
import {getSuccessMessage, showErrorMessage} from './alert.js';
import {serverInteraction} from './server-app.js';
const sendingAddress = 'https://22.javascript.pages.academy/keksobooking';
const addressInput = document.querySelector('#address');
const offerForm = document.querySelector('.ad-form');
addressInput.disabled = true;
const putAddressinInput = (coordinates) => {
  addressInput.value = coordinates;
}
offerForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  serverInteraction(sendingAddress, 'POST', evt.target).then(() => {
    getSuccessMessage();
  })
    .catch(() => {
      showErrorMessage();
    })
})
export {putAddressinInput};
