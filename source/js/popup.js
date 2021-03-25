import {isEscEvent, isEnterEvent} from './utils.js';

const errorTemplate = document.querySelector('#error').content.querySelector('.error');
const successTemplate = document.querySelector('#success').content.querySelector('.success');
const errorPopup = errorTemplate.cloneNode('true');
const errorButton = errorPopup.querySelector('.error__button')
const successPopup = successTemplate.cloneNode('true');

const showErrorPopup = (message) => {
  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      errorPopup.remove();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  };

  const onErrorButtonClick = (evt) => {
    if (isEnterEvent(evt)) {
      evt.preventDefault();
      errorPopup.remove();
      document.removeEventListener('keydown', onErrorButtonClick);
    }
  };

  const onPopupClick = () => {
    errorPopup.remove();
  };

  document.body.append(errorPopup);
  errorPopup.querySelector('p').textContent = message;
  document.addEventListener('keydown', onPopupEscKeydown);
  errorPopup.addEventListener('click', onPopupClick);
  errorButton.addEventListener('keydown', onErrorButtonClick);
};

const showSuccessPopup = (message) => {
  const onPopupEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      successPopup.remove();
      document.removeEventListener('keydown', onPopupEscKeydown);
    }
  };

  const onPopupClick = () => {
    successPopup.remove();
  };

  document.body.append(successPopup);
  successPopup.querySelector('p').textContent = message;
  document.addEventListener('keydown', onPopupEscKeydown);
  successPopup.addEventListener('click', onPopupClick);
};

export { 
  showErrorPopup,
  showSuccessPopup
};