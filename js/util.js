// Функция рандомного числа
const  getRandomNumber =  function (min, max, numberLength) {
  return Number((Math.random() * (max - min) + min).toFixed(numberLength));
};

// Функция рандомного элемента из массива
const getRandomArrayElement = (elements) => {
  return elements[getRandomNumber(0, elements.length -1, 0)];
};

// Функция получения рандомного массива из массива
const getRandomArray = (elements) => {
  const features = []
  for (let i= 0; i < getRandomNumber(0, elements.length,0); i++) {
    features.push(elements[i])
  }
  return features;
};
// Функция генерации дурацких фото
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


export {getRandomNumber, getRandomArrayElement, getRandomArray, fillPhotos, getAblePage, getDisablePage, normalizeAddress};



