import {showAlert} from './util.js';
import {getErrorMessage} from './form.js';

const createFetch = () => {
  return fetch (
    'https://22.javascript.pages.academy/keksobooking/data',
    {
      method: 'GET',
      credentials: 'same-origin',
    },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throw new Error(`${response.status} ${response.statusText}`);
    })
    .catch(() => {
      showAlert('Ошибка получения данных');
    })
};

const setSubmit = (form) => {

  const body = new FormData(form);

  return fetch('https://22.javascript.pages.academy/keksobooking', {
    method: 'POST',
    body,
  },
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз'); // это буду править на другую функцию
    });
}

export {createFetch, setSubmit};
