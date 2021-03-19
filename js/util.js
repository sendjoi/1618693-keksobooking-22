'use strict'
const fillPhotos = function (photosBlock, photosObjArray) {
  const photoTemplate = photosBlock.querySelector('.popup__photo');
  photosObjArray.forEach((photosSrc) => {
    const imgTemplate = photoTemplate.cloneNode();
    imgTemplate.src = photosSrc;
    photosBlock.append(imgTemplate);
  })
  photoTemplate.remove();
}

const getAblePage = function() {

  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');

  const filters = document.querySelector('.map__filters');
  filters.classList.remove('map__filters--disabled')


  const filter = document.querySelectorAll('select');
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelectorAll('textarea');

  [...filter].forEach((element) => {
    element.disabled = false;
  });

  [...inputs].forEach((element) => {
    element.disabled = false;
  });

  [...textArea].forEach((element) => {
    element.disabled = false;
  });

}

const getDisablePage = function () {

  const form = document.querySelector('.ad-form');
  form.classList.add('ad-form--disabled');

  const filters = document.querySelector('.map__filters');
  filters.classList.add('map__filters--disabled')


  const filter = document.querySelectorAll('select');
  const inputs = document.querySelectorAll('input');
  const textArea = document.querySelectorAll('textarea');

  [...filter].forEach((element) => {
    element.disabled = true;
  });

  [...inputs].forEach((element) => {
    element.disabled = true;
  });

  [...textArea].forEach((element) => {
    element.disabled = true;
  });
}

const normalizeAddress = function (address) {
  return address.lat.toFixed(5) + ', ' + address.lng.toFixed(5);
}

function debounce (func, wait, immediate) {
  let timeout;

  return function executedFunction() {
    const context = this;
    const args = arguments;

    const later = function() {
      timeout = null;
      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

export {fillPhotos, getAblePage, getDisablePage, normalizeAddress, debounce};



