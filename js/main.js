'use strict'
import './form.js';
import './validation.js'
import {validationInit} from './validation.js';
import {getDisablePage} from './util.js';
import {serverInteraction} from './server-app.js';
import {mapModule} from './map.js';
import {setFilterAction} from './filters.js';
import {showAlert} from './alert.js';
const dataAddress = 'https://22.javascript.pages.academy/keksobooking/data';
getDisablePage();
validationInit();
serverInteraction(dataAddress, 'GET')
  .then((offers) => {
    const render = mapModule();
    setFilterAction(render, offers);
  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });


