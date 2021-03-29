'use strict'
import {DATA_ADDRESS} from './config.js';
import {formReset, formInit} from './form.js';
import {validationReset, validationInit} from './validation.js';
import {getDisablePage} from './util.js';
import {http} from './http.js';
import {mapInit, mapRender, resetMapPin} from './map.js';
import {setFilterAction, filterReset} from './filters.js';
import {showAlert} from './alert.js';
import './avatar.js';

const appReset = () => {
  const resetFunction =[filterReset, resetMapPin, formReset, validationReset];
  resetFunction.forEach((func) => func());
};

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

validationInit();
