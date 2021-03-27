'use strict'
import {getAblePage, normalizeAddress} from './util.js';
import  {addingOffers} from './create-offers.js';
import {putAddressinInput} from './form.js';
import {MAP_HTTP, MAP_ATT, TOKIO_CENTR, MAP_ZOOM, MAP_MAIN_PIN_SIZE, MAP_MAIN_PIN_ANCHOR_CENTER, MAP_PIN_SIZE, MAP_PIN_ANCHOR_CENTER} from './config.js';

let map = null;
let mainPinMarker;
let mainPinIcon;

const mapCreate = () => {
  /* global L:readonly */
  map = L.map('map-canvas')
    .on('load', () => {
      getAblePage();
    })
    .setView(TOKIO_CENTR, MAP_ZOOM);
  L.tileLayer(
    MAP_HTTP,
    {
      attribution: MAP_ATT,
    },
  ).addTo(map);
};

const mapReset = () => {
  map.eachLayer((layer) => {
    if (layer.removable) {
      map.removeLayer(layer);
    }
  })
  map.setView(TOKIO_CENTR, MAP_ZOOM);
  L.tileLayer(
    MAP_HTTP,
    {
      attribution: MAP_ATT,
    },
  ).addTo(map);
};

const mainPinReset = () => {
  map.eachLayer((layer) => {
    if (layer.mainPin) {
      map.removeLayer(layer);
    }
  })
  mainPinCreate();
};

const resetMapPin = () => {
  mapReset();
  mainPinReset();
};

const mainPinCreate = () => {
  mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: MAP_MAIN_PIN_SIZE,
    iconAnchor: MAP_MAIN_PIN_ANCHOR_CENTER,
  });
  mainPinMarker = L.marker(
    TOKIO_CENTR,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.mainPin = true;
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    putAddressinInput(normalizeAddress(evt.target.getLatLng()));
  });
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
      iconSize: MAP_PIN_SIZE,
      iconAnchor: MAP_PIN_ANCHOR_CENTER,
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

const mapRender = (offers) => {
  drawMap(offers);
};

const mapInit = () => {
  mapCreate();
  mainPinCreate();
};

export {mapInit, mapRender, mainPinCreate, resetMapPin};
