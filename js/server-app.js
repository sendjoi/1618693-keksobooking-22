'use strict'
const serverInteraction = (address, method, form) => {
  let body;
  if (form) {
    body = new FormData(form);
  }
  return fetch(address, {
    method: method,
    body,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
}
export {serverInteraction};
