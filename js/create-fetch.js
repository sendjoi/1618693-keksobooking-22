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
}

export {createFetch, setSubmit};
