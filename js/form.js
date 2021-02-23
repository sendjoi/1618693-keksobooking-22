const housingType = document.querySelector('#type');
const price = document.querySelector('#price');

const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');

const priceMap = {
  palace: '5000',
  flat: '2500',
  house: '7000',
  bungalow: '6000',
}

housingType.addEventListener('change', (event) => {
  price.value = priceMap[event.target.value]
})

/*const timeMap = {
  12:00: 'Выезд до 13',
  13:00: 'Выезд до 14',
  14:00: 'Выезд до 14',
}

timeIn.addEventListener('change', (event) => {
  timeOut.value = timeMap[event.target.value]
})

timeOut.addEventListener('change', (event) => {
  timeIn.value = timeMap[event.target.value]
})

*/
