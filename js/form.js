'use strict';
import {getSuccessMessage, showErrorMessage} from './alert.js';
import {http} from './server-app.js';
import {SENDING_ADDRESS} from './config.js';


const addressInput = document.querySelector('#address');
const offerForm = document.querySelector('.ad-form');

const putAddressinInput = (coordinates) => {
  addressInput.value = coordinates;
}

let successCallback = null;

const formInit = (appReset) => {
  successCallback = appReset;

  offerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    http(SENDING_ADDRESS, 'POST', evt.target).then(() => {
      getSuccessMessage(successCallback);

    })
      .catch(() => {
        showErrorMessage();

      })
  })
}

export {putAddressinInput, formInit};
