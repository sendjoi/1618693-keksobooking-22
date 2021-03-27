'use strict';
import {showSuccessMessage, showErrorMessage} from './alert.js';
import {http} from './server-app.js';
import {SENDING_ADDRESS} from './config.js';


const addressInput = document.querySelector('#address');
const offerForm = document.querySelector('.ad-form');

const putAddressinInput = (coordinates) => {
  addressInput.value = coordinates;
};

const formInit = (appReset) => {
  offerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    http(SENDING_ADDRESS, 'POST', evt.target).then(() => {
      showSuccessMessage();
      appReset();
    })
      .catch(() => {
        showErrorMessage();
      })
  })
};

export {putAddressinInput, formInit};
