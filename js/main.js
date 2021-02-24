import  {addingOffers} from './create-offers.js';
import './form.js'
import { fillPhotos } from './util.js';


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
  .setView({
    lat: 59.92749,
    lng: 30.31127,
  }, 10);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);
