import './form.js';
import './validation.js'
import {filtreRooms} from './validation.js';
import {getDisablePage} from './util.js';
import {createFetch} from './create-fetch.js';
import {mapModule} from './map.js';
import {setFilterAction} from './filters.js';
import {showAlert} from './alert.js';

getDisablePage();
filtreRooms(document.querySelectorAll('#capacity option'), 1);

createFetch()
  .then((offers) => {
    const render = mapModule(offers);
    setFilterAction(render, offers);
    render()
  })
  .catch(() => {
    showAlert('Ошибка получения данных');
  });

// запутался тут
