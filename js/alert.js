const onClickOk = function (element) {
  element.addEventListener('click' , () => {element.remove();})
  element.removeEventListener('click' , () => {element.remove();})
}



const getErrorMessage = function() {
  const mainForm = document.querySelector('main');
  const templateError = document.querySelector('#error')
    .content
    .querySelector('.error');

  const errorElement = templateError.cloneNode(true);

  mainForm.append(errorElement);

  const onKeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      document.removeEventListener('keydown', onKeydown)
      errorElement.remove();
    }
  }

  document.addEventListener('keydown', onKeydown);

  const closeElement = errorElement.querySelector('.error__button');
  onClickOk(errorElement);
  onClickOk(closeElement);
}



const getSuccessMessage = function() {
  const mainForm = document.querySelector('main');

  const templateSuccess = document.querySelector('#success')
    .content
    .querySelector('.success');

  const successElement = templateSuccess.cloneNode(true);

  mainForm.append(successElement);

  const onKeydown = (evt) => {
    if (evt.key === ('Escape' || 'Esc')) {
      document.removeEventListener('keydown', onKeydown)
      successElement.remove();
    }
  }
  document.addEventListener('keydown', onKeydown);

  onClickOk(successElement);

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
