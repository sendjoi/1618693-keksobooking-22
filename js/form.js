'use strict';
import {showMessage} from './alert.js';
import {http} from './http.js';
import {SENDING_ADDRESS} from './config.js';


const addressInput = document.querySelector('#address');
const offerForm = document.querySelector('.ad-form');

const putAddressinInput = (coordinates) => {
  addressInput.value = coordinates;
};

const formReset = () => {
  offerForm.reset();
};

const formInit = (appReset) => {
  offerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    http(SENDING_ADDRESS, 'POST', evt.target).then(() => {
      showMessage('success');
      appReset();
    })
      .catch(() => {
        showMessage('error');
      })
  })
};



export {putAddressinInput, formInit, formReset};
