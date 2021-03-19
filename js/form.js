'use strict'
import {setSubmit} from './create-fetch.js';
import {getSuccessMessage, getErrorMessage} from './alert.js';

const addressInput = document.querySelector('#address');

addressInput.disabled = true;

const putAddressinInput = function (coordinates) {
  addressInput.value = coordinates;
}

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

export {putAddressinInput};
