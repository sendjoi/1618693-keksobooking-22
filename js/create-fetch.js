import {showAlert} from './util.js';

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

const setSubmit = (evt, onSuccess) => {

  const formData = new FormData(evt.target);

  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body: formData,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
        return response.json();
      } else {
        throw new Error(`${response.status} ${response.statusText}`);
      }
    })
    .catch(() => {
      showAlert('Не удалось отправить форму. Попробуйте ещё раз');
    });
}


export {createFetch, setSubmit};
