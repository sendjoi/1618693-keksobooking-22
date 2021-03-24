'use strict'
import {getAblePage, normalizeAddress} from './util.js';
import  {addingOffers} from './create-offers.js';
import {putAddressinInput} from './form.js';

let map = null;
let mainPinMarker;
const mapStart = () => {
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
  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });
  mainPinMarker = L.marker(
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
  mainPinMarker.on('moveend', (evt) => {
    putAddressinInput(normalizeAddress(evt.target.getLatLng()));
  });
}
const mainMarkerReset = () => {
  mainPinMarker.latLng(35.6895,139.69171);
  console.log(mainPinMarker);
  // mainPinMarker._latlng.lat = 35.6895
  //mainPinMarker._latlng.lng = 139.69171
  //mainPinMarker.removeLayer();
  //mainPinMarker.addTo(map);
};
const drawMap = (allOffers) => {
  map.eachLayer((layer) => {
    if (layer.removable) {
      map.removeLayer(layer);
    }
  })
  allOffers.forEach((point) => {
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
    marker.removable = true;
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
const mapModule = () => {
  mapStart();
  const render = (offers) => {
    drawMap(offers);
  };
  return render;
};
export {mapModule, mainMarkerReset};

