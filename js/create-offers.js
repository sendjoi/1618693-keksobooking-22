import {allOffers} from './data.js';



const addingOffers = () => {

  const blockInsert = document.querySelector('.map__canvas');
  const templateFragment = document.querySelector('#card')
    .content
    .querySelector('.popup');

  const similarCards = allOffers();

  const similarListOffers = [];

  similarCards.forEach(({author, offer}) => {
    const cardElement = templateFragment.cloneNode(true);
    cardElement.querySelector('.popup__title').textContent = offer.title;
    cardElement.querySelector('.popup__text--address').textContent = offer.address;
    cardElement.querySelector('.popup__text--price').textContent = `${offer.price}₽/ночь`;

    switch(offer.type) {
      case 'palace':
        cardElement.querySelector('.popup__type').textContent = 'Дворец';
        break;
      case 'flat':
        cardElement.querySelector('.popup__type').textContent = 'Квартира';
        break;
      case 'house':
        cardElement.querySelector('.popup__type').textContent = 'Дом';
        break;
      case 'bungalow':
        cardElement.querySelector('.popup__type').textContent = 'Бунгало';
    }

    cardElement.querySelector('.popup__text--capacity').textContent = `${offer.rooms} комнаты для ${offer.guests} гостей`;
    cardElement.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
    cardElement.querySelector('.popup__features').textContent = offer.features;
    cardElement.querySelector('.popup__description').textContent = offer.description;

    const photoNode = cardElement.querySelector('.popup__photo');
    const photoBlock =  cardElement.querySelector('.popup__photos');

    if (offer.photos && offer.photos.length > 0) {
      photoNode.style.display='block';
      offer.photos.forEach((photo, index) => {
        if (index === 0) {
          photoNode.src =  photo;
        }
        else {
          const imgTemplate = photoNode.cloneNode();
          imgTemplate.src = photo;
          photoBlock.append(imgTemplate);
        }
      })
    }
    else {
      photoNode.style.display='none';
    }

    cardElement.querySelector('.popup__avatar').src = author.avatar;

    similarListOffers.push(cardElement);
  });
  blockInsert.append(similarListOffers[0]);

};

export {addingOffers};

