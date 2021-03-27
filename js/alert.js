'use strict'

const mainForm = document.querySelector('main');
const templateError = document.querySelector('#error')
  .content
  .querySelector('.error');

const templateSuccess = document.querySelector('#success')
  .content
  .querySelector('.success');
const escapeKeyName = 'Escape';
const escKeyName = 'Esc';

const setClickHandler = (element) => {
  element.addEventListener('click' , () => {
    element.remove();
    element = null;
  })
};

const showErrorMessage = () => {
  const errorMessage = templateError.cloneNode(true);
  mainForm.append(errorMessage);

  const onKeydown = (evt) => {
    if (evt.key === (escapeKeyName || escKeyName)) {
      document.removeEventListener('keydown', onKeydown)
      errorMessage.remove();
    }
  };

  document.addEventListener('keydown', onKeydown);
  const errorMessageButton = errorMessage.querySelector('.error__button');
  setClickHandler(errorMessage);
  setClickHandler(errorMessageButton);
};

const showSuccessMessage = () => {
  const successMessage = templateSuccess.cloneNode(true);
  mainForm.append(successMessage);

  const onKeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      document.removeEventListener('keydown', onKeydown)
      successMessage.remove();
    }
  };
  document.addEventListener('keydown', onKeydown);
  setClickHandler(successMessage);
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

export {showSuccessMessage, showErrorMessage, showAlert, formReset};
