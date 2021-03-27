'use strict'
const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const filter = document.querySelectorAll('select');
const featuresFilters = document.querySelectorAll('#housing-features');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');

const FeaturesMap = {
  'wifi': 'popup__feature--wifi',
  'dishwasher': 'popup__feature--dishwasher',
  'parking': 'popup__feature--parking',
  'washer': 'popup__feature--washer',
  'elevator': 'popup__feature--elevator',
  'conditioner': 'popup__feature--conditioner',
}

const fillPhotos = (photosBlock, photosObjArray) => {
  const photoTemplate = photosBlock.querySelector('.popup__photo');
  photosObjArray.forEach((photosSrc) => {
    const imgTemplate = photoTemplate.cloneNode();
    imgTemplate.src = photosSrc;
    photosBlock.append(imgTemplate);
  })
  photoTemplate.remove();
};

const fillFeatures = (featuresBlock, featuresArray) => {
  featuresBlock.innerHTML = ' ';
  if (featuresArray[0]) {
    featuresArray.forEach((feature) => {
      const featuresPoint = document.createElement('li');
      featuresPoint.classList.add('popup__feature');
      featuresPoint.classList.add(FeaturesMap[feature]);
      featuresBlock.append(featuresPoint);
    })
  } else {
    featuresBlock.remove();
  }
};

const removeSpaceBlock = (block, fieldData) => {
  if (!fieldData) {
    block.remove();
  }
};

const getAblePage = () => {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('map__filters--disabled');
  [...filter,
    ...inputs,
    textArea,
    ...buttons,
    ...featuresFilters,
  ].forEach((element) => {
    element.disabled = false;
  });
};

const getDisablePage = () => {
  form.classList.add('ad-form--disabled');
  filters.classList.add('map__filters--disabled');
  [...filter,
    ...inputs,
    textArea,
    ...buttons,
    ...featuresFilters,
  ].forEach((element) => {
    element.disabled = true;
  });
}

const normalizeAddress = (address) => {
  return address.lat.toFixed(5) + ', ' + address.lng.toFixed(5);
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction() {

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(null);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(null);
    }
  };
};

export {
  fillPhotos,
  getAblePage,
  getDisablePage,
  normalizeAddress,
  debounce,
  fillFeatures,
  removeSpaceBlock
};
