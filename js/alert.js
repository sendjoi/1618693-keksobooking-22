const getErrorMessage = function() {
  const mainForm = document.querySelector('main');
  const templateError = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorElement = templateError.cloneNode(true);

  mainForm.append(errorElement);

  const closeElement = errorElement.querySelector('.error__button');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      errorElement.remove();
    }
  });
  document.addEventListener('click' , (evt) => {
    evt.preventDefault();
    errorElement.remove();
  });
  closeElement.addEventListener('click', () => {
    errorElement.remove();
  })
}

const getSuccessMessage = function() {
  const mainForm = document.querySelector('main');

  const templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successElement = templateSuccess.cloneNode(true);

  mainForm.append(successElement);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      evt.preventDefault();
      successElement.remove();
    }
  });
  document.addEventListener('click' , (evt) => {
    evt.preventDefault();
    successElement.remove();
  })
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
}

export {getSuccessMessage, getErrorMessage, showAlert}
