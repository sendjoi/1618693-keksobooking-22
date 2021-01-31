const  getRandomNumber =  function (min, max, numberLength) {
    return +(Math.random() * (max - min) + min).toFixed(numberLength); 
  }
  