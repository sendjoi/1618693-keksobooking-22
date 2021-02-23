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
const getDomphotos = function (photosBlock, photoSrc) {
  const photoTemplate = photosBlock.querySelector('.popup__photo');
  photoSrc.forEach((photo) => {
    const imgTemplate = photoTemplate.cloneNode();
    imgTemplate.src = photo;
    photosBlock.append(imgTemplate);
  })
  photoTemplate.remove();
}
export {getRandomNumber, getRandomArrayElement, getRandomArray, getDomphotos};



