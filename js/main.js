import './form.js'
import {getDisablePage} from './util.js';
import {createFetch} from './create-fetch.js';
import {mapConnection} from './map.js';

getDisablePage();

createFetch().then((offers) => {
  mapConnection(offers);
});
