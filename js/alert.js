'use strict';

const mainForm = document.querySelector('main');
const templateError = document
  .querySelector('#error')
  .content.querySelector('.error');

const templateSuccess = document
  .querySelector('#success')
  .content.querySelector('.success');
const escapeKeyName = 'Escape';
const escKeyName = 'Esc';

const showMessage = (type) => {
  const message =
    type === 'error'
      ? templateError.cloneNode(true)
      : templateSuccess.cloneNode(true);

  mainForm.append(message);

  const onKeydown = (evt) => {
    if (evt.key === (escapeKeyName || escKeyName)) {
      closeMessage(message);
    }
  };

  const closeMessage = (message) => {
    document.removeEventListener('keydown', onKeydown);
    message.remove();
    message = null;
  };

  const setClickHandler = (element) => {
    element.addEventListener('click', () => {
      closeMessage(element);
    });
  };

  document.addEventListener('keydown', onKeydown);
  const errorMessageButton = message.querySelector('.error__button');
  if (errorMessageButton) {
    setClickHandler(errorMessageButton);
  }
  setClickHandler(message);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('.custom__error_message');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};

const formReset = () => {
  document.querySelector('.ad-form').reset();
};

export { showMessage, showAlert, formReset };
