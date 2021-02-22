const housingType = document.querySelector('#type');
const price = document.querySelector('#price');

housingType.addEventListener('change', (event) => {
  // как то определить какой выбрали option, а дальше switch
  //console.dir(event.target.value);
  switch (event.target.value) {
    case 'palace':
      price.value = '5000';
      break;
    case 'flat':
      price.value = '2500';
      break;
    case 'house':
      price.value = '7000';
      break;
    case 'bungalow':
      price.value = '6000';
  }
}
)

console.dir(document.querySelector('#price'));


