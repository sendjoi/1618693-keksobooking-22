'use strict'
const http = (address, method = 'GET', form = null) => {
  return fetch(address, {
    method: method,
    body: form ? new FormData(form) : null,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
}
export {http};
