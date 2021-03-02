import './form.js'
import {getDisablePage} from './util.js';
import {createFetch} from './create-fetch.js';
import {mapConnection} from './map.js';
import {showAlert} from './alert.js';

getDisablePage();

createFetch()
  .then((offers) => {
    mapConnection(offers);
  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });
