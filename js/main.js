import  {addingOffers} from './create-offers.js';
import { makeAllOffers } from './data.js';
import './form.js'
import { getAblePage } from './util.js';


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


/* global L:readonly */
const map = L.map('map-canvas')
  .on('load', () => {
    getAblePage();
  })
  .setView({
    lat: 35.6895000,
    lng: 139.6917100,
  }, 11,5);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
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

const allOffers = makeAllOffers();

allOffers.forEach((point) => {
  const icon = L.icon({
    iconUrl: '../img/pin.svg',
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  const marker = L.marker(
    {
      lat : point.location.x,
      lng : point.location.y,
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
