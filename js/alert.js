const getErrorMessage = function() {
  const mainForm = document.querySelector('main');
  const templateError = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorElement = templateError.cloneNode(true);

  mainForm.append(errorElement);

  const closeElement = errorElement.querySelector('.error__button');

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {errorElement.remove()}
  });
  document.removeEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {errorElement.remove()}
  });
  document.addEventListener('click' , () => {errorElement.remove();});
  document.removeEventListener('click' , () => {errorElement.remove();});

  closeElement.addEventListener('click', () => {errorElement.remove()})
  closeElement.removeEventListener('click', () => {errorElement.remove()})
}

const getSuccessMessage = function() {
  const mainForm = document.querySelector('main');

  const templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successElement = templateSuccess.cloneNode(true);

  mainForm.append(successElement);

  document.addEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {successElement.remove();}
  });
  document.removeEventListener('keydown', (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {successElement.remove();}
  });

  document.addEventListener('click' , () => {successElement.remove();})
  document.removeEventListener('click' , () => {successElement.remove();})

  document.querySelector('.ad-form').reset();
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
