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

timeIn.addEventListener('change', (event) => {
  const checkoutDigits = event.target.value.split(':');
  checkoutDigits[0] = Number(checkoutDigits[0]);
  timeOut.value = checkoutDigits.join(':')
})

timeOut.addEventListener('change', (event) => {
  const checkinDigits = event.target.value.split(':');
  checkinDigits[0] = Number(checkinDigits[0]);
  timeIn.value = checkinDigits.join(':')
})

