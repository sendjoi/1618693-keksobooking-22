/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./source/js/alert.js":
/*!****************************!*\
  !*** ./source/js/alert.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showMessage": () => (/* binding */ showMessage),
/* harmony export */   "showAlert": () => (/* binding */ showAlert)
/* harmony export */ });


const mainForm = document.querySelector('main');
const templateError = document
  .querySelector('#error')
  .content.querySelector('.error');

const templateSuccess = document
  .querySelector('#success')
  .content.querySelector('.success');
const escapeKeyName = 'Escape';
const escKeyName = 'Esc';

const showMessage = (type) => {
  const message =
    type === 'error'
      ? templateError.cloneNode(true)
      : templateSuccess.cloneNode(true);

  mainForm.append(message);

  const onKeydown = (evt) => {
    if (evt.key === (escapeKeyName || escKeyName)) {
      closeMessage(message);
    }
  };

  const closeMessage = (message) => {
    document.removeEventListener('keydown', onKeydown);
    message.remove();
    message = null;
  };

  const setClickHandler = (element) => {
    element.addEventListener('click', () => {
      closeMessage(element);
    });
  };

  document.addEventListener('keydown', onKeydown);
  const errorMessageButton = message.querySelector('.error__button');
  if (errorMessageButton) {
    setClickHandler(errorMessageButton);
  }
  setClickHandler(message);
};

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.classList.add('.custom__error_message');
  alertContainer.textContent = message;
  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 3000);
};




/***/ }),

/***/ "./source/js/avatar.js":
/*!*****************************!*\
  !*** ./source/js/avatar.js ***!
  \*****************************/
/***/ (() => {

const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];
const avatarChooser = document.querySelector('#avatar');
const avatarPreview = document.querySelector('.ad-form-header__preview img');
const photoChooser = document.querySelector('#images');
const photoPreview = document.querySelector('.ad-form__photo');

avatarChooser.addEventListener('change', () => {
  const file = avatarChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {
    return fileName.endsWith(it);
  });
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      avatarPreview.src = reader.result;
    });
    reader.readAsDataURL(file);
  }
});

photoChooser.addEventListener('change', () => {
  photoPreview.textContent= '';
  const imgTemplate = document.querySelector('.ad-form-header__preview img').cloneNode();
  const file = photoChooser.files[0];
  const fileName = file.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => {

    return fileName.endsWith(it);
  });
  if (matches) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      imgTemplate.src = reader.result;
      photoPreview.appendChild(imgTemplate);
    });
    reader.readAsDataURL(file);
  }
});


/***/ }),

/***/ "./source/js/config.js":
/*!*****************************!*\
  !*** ./source/js/config.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DATA_ADDRESS": () => (/* binding */ DATA_ADDRESS),
/* harmony export */   "SENDING_ADDRESS": () => (/* binding */ SENDING_ADDRESS),
/* harmony export */   "MAP_HTTP": () => (/* binding */ MAP_HTTP),
/* harmony export */   "MAP_ATT": () => (/* binding */ MAP_ATT),
/* harmony export */   "TOKIO_CENTR": () => (/* binding */ TOKIO_CENTR),
/* harmony export */   "MAP_ZOOM": () => (/* binding */ MAP_ZOOM),
/* harmony export */   "MAP_MAIN_PIN_SIZE": () => (/* binding */ MAP_MAIN_PIN_SIZE),
/* harmony export */   "MAP_MAIN_PIN_ANCHOR_CENTER": () => (/* binding */ MAP_MAIN_PIN_ANCHOR_CENTER),
/* harmony export */   "MAP_PIN_SIZE": () => (/* binding */ MAP_PIN_SIZE),
/* harmony export */   "MAP_PIN_ANCHOR_CENTER": () => (/* binding */ MAP_PIN_ANCHOR_CENTER)
/* harmony export */ });
const DATA_ADDRESS = 'https://22.javascript.pages.academy/keksobooking/data';
const SENDING_ADDRESS = 'https://22.javascript.pages.academy/keksobooking';
const MAP_HTTP = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const MAP_ATT = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors | Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>'
const TOKIO_CENTR = {
  lat: 35.6895000,
  lng: 139.6917100,
};

const MAP_ZOOM = 9.4;
const MAP_MAIN_PIN_SIZE = [52, 52];
const MAP_MAIN_PIN_ANCHOR_CENTER = [26, 52];
const MAP_PIN_SIZE = [40, 40];
const MAP_PIN_ANCHOR_CENTER = [20, 40];




/***/ }),

/***/ "./source/js/filters.js":
/*!******************************!*\
  !*** ./source/js/filters.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setFilterAction": () => (/* binding */ setFilterAction),
/* harmony export */   "filterReset": () => (/* binding */ filterReset)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./source/js/util.js");

;

const OFFER_COUNT = 10;
const UP_LIMIT = 10000;
const DOWN_LIMIT = 50000;
const ANY = 'any';
const LOW = 'low';
const MID = 'middle';
const HIGH = 'high';
const typeSelect = document.querySelector('#housing-type');
const priceSelect = document.querySelector('#housing-price');
const roomsSelect = document.querySelector('#housing-rooms');
const guestsSelect = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');
const filterForm = document.querySelector('.map__filters');
const PriceMap = {
  [ANY]: () => true,
  [LOW]: (offerInput) => offerInput.offer.price < UP_LIMIT,
  [MID]: (offerInput) => offerInput.offer.price < DOWN_LIMIT && offerInput.offer.price > UP_LIMIT,
  [HIGH]: (offerInput) => offerInput.offer.price > DOWN_LIMIT,
};

let filterDataApply = null;

const setFilterAction = (render, offers) => {
  const typeFilter = (offerInput) => {
    if (typeSelect.value === 'any') {

      return true;
    }

    return offerInput.offer.type === typeSelect.value;
  };

  const priceFilter = (offerInput) => {
    const priceFilterFlag = PriceMap[priceSelect.value];

    return priceFilterFlag(offerInput);
  };

  const roomsFilter = (offerInput) => {
    if (roomsSelect.value === 'any') {

      return true;
    }

    return offerInput.offer.rooms === Number(roomsSelect.value);
  };

  const guestsFilter = (offerInput) => {
    if (guestsSelect.value === 'any') {

      return true;
    }

    return offerInput.offer.guests === Number(guestsSelect.value);
  };

  const filterFeatures = (offer) => {
    const checkedFeatures = housingFeatures.querySelectorAll('input:checked');

    return [...checkedFeatures].every((feature) => offer.offer.features.includes(feature.value));
  };

  const filterData = (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.debounce)(() => {
    const result = [
      typeFilter,
      priceFilter,
      roomsFilter,
      guestsFilter,
      filterFeatures,
    ].reduce((tailOffers, customFilter) => tailOffers.filter(customFilter), offers).slice(0, OFFER_COUNT);
    render(result);
  }, 500);

  filterDataApply = filterData;
  filterForm.addEventListener('change', filterData);
  render(offers);
};

const filterReset = () => {
  typeSelect.value = 'any';
  priceSelect.value = 'any';
  roomsSelect.value = 'any';
  guestsSelect.value = 'any';
  housingFeatures.querySelectorAll('input').forEach((feature) => {
    feature.checked = false;
  })
  filterDataApply();
};




/***/ }),

/***/ "./source/js/form.js":
/*!***************************!*\
  !*** ./source/js/form.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "putAddressinInput": () => (/* binding */ putAddressinInput),
/* harmony export */   "formInit": () => (/* binding */ formInit),
/* harmony export */   "formReset": () => (/* binding */ formReset)
/* harmony export */ });
/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./alert.js */ "./source/js/alert.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.js */ "./source/js/http.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config.js */ "./source/js/config.js");






const addressInput = document.querySelector('#address');
const offerForm = document.querySelector('.ad-form');

const putAddressinInput = (coordinates) => {
  addressInput.value = coordinates;
};

const formReset = () => {
  offerForm.reset();
};

const formInit = (appReset) => {
  offerForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    (0,_http_js__WEBPACK_IMPORTED_MODULE_1__.http)(_config_js__WEBPACK_IMPORTED_MODULE_2__.SENDING_ADDRESS, 'POST', evt.target).then(() => {
      (0,_alert_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)('success');
      appReset();
    })
      .catch(() => {
        (0,_alert_js__WEBPACK_IMPORTED_MODULE_0__.showMessage)('error');
      })
  })
};




/***/ }),

/***/ "./source/js/http.js":
/*!***************************!*\
  !*** ./source/js/http.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "http": () => (/* binding */ http)
/* harmony export */ });

const http = (address, method = 'GET', form = null) => {
  return fetch(address, {
    method: method,
    body: form ? new FormData(form) : null,
  }).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error(`${response.status} ${response.statusText}`);
    }
  })
};




/***/ }),

/***/ "./source/js/map.js":
/*!**************************!*\
  !*** ./source/js/map.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mapInit": () => (/* binding */ mapInit),
/* harmony export */   "mapRender": () => (/* binding */ mapRender),
/* harmony export */   "mainPinCreate": () => (/* binding */ mainPinCreate),
/* harmony export */   "resetMapPin": () => (/* binding */ resetMapPin)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./source/js/util.js");
/* harmony import */ var _offer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./offer.js */ "./source/js/offer.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.js */ "./source/js/form.js");
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./config.js */ "./source/js/config.js");

;




let map = null;
let mainPinMarker;
let mainPinIcon;

const mapCreate = () => {
  /* global L:readonly */
  map = L.map('map-canvas')
    .on('load', () => {
      (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.getAblePage)();
    })
    .setView(_config_js__WEBPACK_IMPORTED_MODULE_3__.TOKIO_CENTR, _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_ZOOM);
  L.tileLayer(
    _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_HTTP,
    {
      attribution: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_ATT,
    },
  ).addTo(map);
};

const mapReset = () => {
  map.eachLayer((layer) => {
    if (layer.removable) {
      map.removeLayer(layer);
    }
  })
  map.setView(_config_js__WEBPACK_IMPORTED_MODULE_3__.TOKIO_CENTR, _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_ZOOM);
  L.tileLayer(
    _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_HTTP,
    {
      attribution: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_ATT,
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
    iconSize: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_MAIN_PIN_SIZE,
    iconAnchor: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_MAIN_PIN_ANCHOR_CENTER,
  });
  mainPinMarker = L.marker(
    _config_js__WEBPACK_IMPORTED_MODULE_3__.TOKIO_CENTR,
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );
  mainPinMarker.mainPin = true;
  mainPinMarker.addTo(map);
  mainPinMarker.on('moveend', (evt) => {
    (0,_form_js__WEBPACK_IMPORTED_MODULE_2__.putAddressinInput)((0,_util_js__WEBPACK_IMPORTED_MODULE_0__.normalizeAddress)(evt.target.getLatLng()));
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
      iconSize: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_PIN_SIZE,
      iconAnchor: _config_js__WEBPACK_IMPORTED_MODULE_3__.MAP_PIN_ANCHOR_CENTER,
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
        (0,_offer_js__WEBPACK_IMPORTED_MODULE_1__.createOffer)(point),
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




/***/ }),

/***/ "./source/js/offer.js":
/*!****************************!*\
  !*** ./source/js/offer.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createOffer": () => (/* binding */ createOffer)
/* harmony export */ });
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util.js */ "./source/js/util.js");

;

const templateFragment = document.querySelector('#card')
  .content
  .querySelector('.popup');
const PlacementMap = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  DEFAULT: 'Не установлено',
};

const createOffer = (point) => {
  const cardCopy = templateFragment.cloneNode(true);
  cardCopy.querySelector('.popup__title').textContent = point.offer.title;
  cardCopy.querySelector('.popup__text--address').textContent = point.offer.address;
  cardCopy.querySelector('.popup__text--price').textContent = `${point.offer.price}₽/ночь`;
  cardCopy.querySelector('.popup__type').textContent = PlacementMap[point.offer.type];
  cardCopy.querySelector('.popup__text--capacity').textContent = `${point.offer.rooms} комнаты для ${point.offer.guests} гостей`;
  cardCopy.querySelector('.popup__text--time').textContent = `Заезд после ${point.offer.checkin}, выезд до ${point.offer.checkout}`;
  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.fillFeatures)(cardCopy.querySelector('.popup__features'), point.offer.features);
  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.removeSpaceBlock)(cardCopy.querySelector('.popup__features'), point.offer.features);
  cardCopy.querySelector('.popup__description').textContent = point.offer.description;
  const photoBlock =  cardCopy.querySelector('.popup__photos');
  (0,_util_js__WEBPACK_IMPORTED_MODULE_0__.fillPhotos)(photoBlock, point.offer.photos);
  cardCopy.querySelector('.popup__avatar').src = point.author.avatar;

  return cardCopy;
};




/***/ }),

/***/ "./source/js/util.js":
/*!***************************!*\
  !*** ./source/js/util.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fillPhotos": () => (/* binding */ fillPhotos),
/* harmony export */   "getAblePage": () => (/* binding */ getAblePage),
/* harmony export */   "getDisablePage": () => (/* binding */ getDisablePage),
/* harmony export */   "normalizeAddress": () => (/* binding */ normalizeAddress),
/* harmony export */   "debounce": () => (/* binding */ debounce),
/* harmony export */   "fillFeatures": () => (/* binding */ fillFeatures),
/* harmony export */   "removeSpaceBlock": () => (/* binding */ removeSpaceBlock)
/* harmony export */ });

const form = document.querySelector('.ad-form');
const filters = document.querySelector('.map__filters');
const filter = document.querySelectorAll('select');
const featuresFilters = document.querySelectorAll('#housing-features');
const inputs = document.querySelectorAll('input');
const textArea = document.querySelector('textarea');
const buttons = document.querySelectorAll('button');

const formInputs = [
  filter,
  inputs,
  textArea,
  buttons,
  featuresFilters,
];

const FeaturesMap = {
  'wifi': 'popup__feature--wifi',
  'dishwasher': 'popup__feature--dishwasher',
  'parking': 'popup__feature--parking',
  'washer': 'popup__feature--washer',
  'elevator': 'popup__feature--elevator',
  'conditioner': 'popup__feature--conditioner',
};

const fillPhotos = (photosBlock, photosObjArray) => {
  const photoTemplate = photosBlock.querySelector('.popup__photo');
  photosObjArray.forEach((photosSrc) => {
    const imgTemplate = photoTemplate.cloneNode();
    imgTemplate.src = photosSrc;
    photosBlock.append(imgTemplate);
  })
  photoTemplate.remove();
};

const fillFeatures = (featuresBlock, featuresArray) => {
  featuresBlock.innerHTML = ' ';
  if (featuresArray[0]) {
    featuresArray.forEach((feature) => {
      const featuresPoint = document.createElement('li');
      featuresPoint.classList.add('popup__feature');
      featuresPoint.classList.add(FeaturesMap[feature]);
      featuresBlock.append(featuresPoint);
    })
  } else {
    featuresBlock.remove();
  }
};

const removeSpaceBlock = (block, fieldData) => {
  if (!fieldData) {
    block.remove();
  }
};

const getAblePage = () => {
  form.classList.remove('ad-form--disabled');
  filters.classList.remove('map__filters--disabled');
  formInputs.forEach((element) => {
    element.disabled = false;
  });
};

const getDisablePage = () => {
  form.classList.add('ad-form--disabled');
  filters.classList.add('map__filters--disabled');
  formInputs.forEach((element) => {
    element.disabled = true;
  });
}

const normalizeAddress = (address) => {
  return address.lat.toFixed(5) + ', ' + address.lng.toFixed(5);
};

const debounce = (func, wait, immediate) => {
  let timeout;
  return function executedFunction() {

    const later = () => {
      timeout = null;
      if (!immediate) {
        func.apply(null);
      }
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) {
      func.apply(null);
    }
  };
};




/***/ }),

/***/ "./source/js/validation.js":
/*!*********************************!*\
  !*** ./source/js/validation.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validationReset": () => (/* binding */ validationReset),
/* harmony export */   "validationInit": () => (/* binding */ validationInit)
/* harmony export */ });

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MinpriceMap = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
};

const RoomsMap = {
  '1': ['none','none','block', 'none'],
  '2': ['none','block','block','none'],
  '3': ['block','block','block','none'],
  '100': ['none','none','none','block'],
  'DEFAULT': [],
};

const offerTitleInput = document.querySelector('#title');
const housingType = document.querySelector('#type');
const offerPriceField = document.querySelector('#price');
const roomsOptions = document.querySelectorAll('#capacity option');
const offerRoomsInput = document.querySelector('#room_number');
const timeIn = document.querySelector('#timein');
const timeOut = document.querySelector('#timeout');
const roomsValue = document.querySelector('#capacity');
const buttonReset = document.querySelector('.ad-form__reset');

const filtreRooms = (roomsList, selectedValue) => {
  roomsValue.value = selectedValue;
  if (selectedValue === '100') {
    roomsValue.value = '0'
  }
  roomsList.forEach((element, index) => {
    element.style.display= RoomsMap[selectedValue][index];
  })
};

const validationReset = (number = 1) => {
  filtreRooms(roomsOptions, number);
  offerPriceField.placeholder =  MinpriceMap.flat;
};

const validationInit = () => {
  offerTitleInput.addEventListener('invalid', () => {
    if (offerTitleInput.validity.valueMissing) {
      offerTitleInput.setCustomValidity('Обязательное поле');
    } else {
      offerTitleInput.setCustomValidity('');
    }
  });

  offerTitleInput.addEventListener('input', () => {
    const valueLength = offerTitleInput.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      offerTitleInput.setCustomValidity('Ещё ' + (MIN_TITLE_LENGTH - valueLength) +' симв.');
    } else if (valueLength > MAX_TITLE_LENGTH) {
      offerTitleInput.setCustomValidity('Удалите лишние ' + (valueLength - MAX_TITLE_LENGTH) +' симв.');
    } else {
      offerTitleInput.setCustomValidity('');
    }
    offerTitleInput.reportValidity();
  });

  housingType.addEventListener('change', (event) => {
    offerPriceField.placeholder = MinpriceMap[event.target.value];
  })

  const minPriceValidation = (minPrice) => {
    offerPriceField.setCustomValidity(`Минимальная цена ${minPrice}`);
  };

  offerPriceField.addEventListener('input', () => {
    const price = offerPriceField.value;
    const MIN_PRICE = MinpriceMap[housingType.value];
    offerPriceField.min = MIN_PRICE;
    if (price < MIN_PRICE) {
      minPriceValidation(MIN_PRICE);
    } else {
      offerPriceField.setCustomValidity('');
    }
    offerPriceField.reportValidity();
  })

  timeIn.addEventListener('change', () => {
    timeOut.selectedIndex = timeIn.selectedIndex;
  })

  timeOut.addEventListener('change', () => {
    timeIn.selectedIndex = timeOut.selectedIndex;
  })

  offerRoomsInput.addEventListener('input', (evt) => {
    filtreRooms(roomsOptions, evt.target.value);
  })
  offerPriceField.placeholder =  MinpriceMap.flat;
  validationReset();

  buttonReset.addEventListener('click', (evt) => {
    evt.preventDefault();
    validationReset();
  })
};




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./source/js/main.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ "./source/js/config.js");
/* harmony import */ var _form_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form.js */ "./source/js/form.js");
/* harmony import */ var _validation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./validation.js */ "./source/js/validation.js");
/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util.js */ "./source/js/util.js");
/* harmony import */ var _http_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./http.js */ "./source/js/http.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map.js */ "./source/js/map.js");
/* harmony import */ var _filters_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./filters.js */ "./source/js/filters.js");
/* harmony import */ var _alert_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./alert.js */ "./source/js/alert.js");
/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./avatar.js */ "./source/js/avatar.js");
/* harmony import */ var _avatar_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_avatar_js__WEBPACK_IMPORTED_MODULE_8__);

;









const appReset = () => {
  const resetFunction =[_filters_js__WEBPACK_IMPORTED_MODULE_6__.filterReset, _map_js__WEBPACK_IMPORTED_MODULE_5__.resetMapPin, _form_js__WEBPACK_IMPORTED_MODULE_1__.formReset, _validation_js__WEBPACK_IMPORTED_MODULE_2__.validationReset];
  resetFunction.forEach((func) => func());
};

(0,_util_js__WEBPACK_IMPORTED_MODULE_3__.getDisablePage)();
(0,_http_js__WEBPACK_IMPORTED_MODULE_4__.http)(_config_js__WEBPACK_IMPORTED_MODULE_0__.DATA_ADDRESS, 'GET')
  .then((offers) => {
    (0,_map_js__WEBPACK_IMPORTED_MODULE_5__.mapInit)();
    (0,_form_js__WEBPACK_IMPORTED_MODULE_1__.formInit)(appReset);
    (0,_filters_js__WEBPACK_IMPORTED_MODULE_6__.setFilterAction)(_map_js__WEBPACK_IMPORTED_MODULE_5__.mapRender, offers);
  })
  .catch(() => {
    (0,_alert_js__WEBPACK_IMPORTED_MODULE_7__.showAlert)('Ошибка получения данных');
  });

(0,_validation_js__WEBPACK_IMPORTED_MODULE_2__.validationInit)();

})();

/******/ })()
;
//# sourceMappingURL=main.bundle.js.map