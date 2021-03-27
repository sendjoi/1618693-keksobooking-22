'use strict'
import {DATA_ADDRESS} from './config.js';
import {formInit} from './form.js';
import {getValidation, validationInit} from './validation.js';
import {getDisablePage} from './util.js';
import {http} from './server-app.js';
import {mapInit, mapRender, resetMapPin} from './map.js';
import {setFilterAction, filterReset} from './filters.js';
import {formReset, showAlert} from './alert.js';

const appReset = () => {
  const resetFunction =[filterReset, resetMapPin, validationInit, formReset];
  resetFunction.forEach((func) => func());
}
getDisablePage();
http(DATA_ADDRESS, 'GET')
  .then((offers) => {
    mapInit();
    formInit(appReset);
    setFilterAction(mapRender, offers);

  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });
getValidation();



