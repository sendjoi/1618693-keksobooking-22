import { getAblePage} from './util.js';
import  {addingOffers} from './create-offers.js';

const getHousingTypeFilter = function (allOffers, type) {

  const sortOffers  = [];

  allOffers.forEach((element) => {
    if (element.offer.type === type) {
      sortOffers.push(element)
    }
  })

  /* global L:readonly */
  const map = L.map('map-canvas')
    .on('load', () => {
      getAblePage();
    })
    .setView({
      lat: 35.6895000,
      lng: 139.6917100,
    }, 9.4);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
    },
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const mainPinMarker = L.marker(
    {
      lat: 35.6895000,
      lng: 139.6917100,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  mainPinMarker.addTo(map);

  /*
  Вернуть новые координаты метки
  mainPinMarker.on('moveend', (evt) => {
  console.log(evt.target.getLatLng());
  }); */

  // offers это объект, как сделать из него массив, чтобы с этим массивом работать как с моковыми данными?

  // const allOffers = makeAllOffers();

  sortOffers.forEach((point) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    const marker = L.marker(
      {
        lat : point.location.lat,
        lng : point.location.lng,
      },
      {
        icon,
      },
    );

    marker
      .addTo(map)
      .bindPopup(
        addingOffers(point),
        {
          keepInView: true,
        },
      );
  })
}
export {getHousingTypeFilter};
