import './form.js'
import {getDisablePage} from './util.js';
import {createFetch} from './create-fetch.js';
import {mapModule} from './map.js';
import {setFilterAction} from './filters';
import {showAlert} from './alert.js';

getDisablePage();

createFetch()
  .then((offers) => {
    const render = mapModule(offers);
    setFilterAction(render);
    render()
  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });

