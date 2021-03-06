import './form.js'
import {getDisablePage} from './util.js';
import {createFetch} from './create-fetch.js';
import {mapConnection} from './map.js';
import {showAlert} from './alert.js';

const OFFER_COUNT = 10;

getDisablePage();

createFetch()
  .then((offers) => {
    mapConnection(offers.slice(0, OFFER_COUNT));
  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });

