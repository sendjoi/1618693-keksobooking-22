import { getAblePage} from './util.js';
import  {addingOffers} from './create-offers.js';

let map = null;
let marker = [];

const appFilters = function (offers, filters) {
  let filtredOffers = [...offers];
  filters.forEach((filter) => {
    filtredOffers = offers.filter(({offer}) => offer[filter.key] === filter.value)
  })

  const OFFER_COUNT = 10;
  filtredOffers.slice(0, OFFER_COUNT);
  return filtredOffers;
}

const mapStart = function () {

  /* global L:readonly */
  map = L.map('map-canvas')
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

}

const drawMap = function (allOffers) {
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

  allOffers.forEach((point) => {
    const icon = L.icon({
      iconUrl: 'img/pin.svg',
      iconSize: [40, 40],
      iconAnchor: [20, 40],
    });

    marker = L.marker(
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


const mapModule = function (offers) {
  mapStart();
  const render = function(filters = []) {
    marker = [];
    drawMap(appFilters(offers, filters));
  };
  return render;
};

export {mapModule};
