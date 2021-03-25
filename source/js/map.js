/* global L:readonly */
import { disableForms, enableForms, addressField } from './form.js';
import { renderAdCard } from './ad-card.js';
import { filterAdData } from './filter.js';

const START_ZOOM = 13;
const MAX_NUMBER_OF_ADS = 10;
const startCoordinates = {
  lat: 35.6895000,
  lng: 139.6917100,
};
const mainPinImage = {
  url: '../img/main-pin.svg',
  size: [52, 52],
  anchor: [26, 52],
};
const pinImage = {
  url: '../img/pin.svg',
  size: [40, 40],
  anchor: [20, 40],
};
let pinMarkers = [];

disableForms();

const map = L.map('map-canvas')
  .on('load', enableForms)
  .setView(startCoordinates, START_ZOOM);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
).addTo(map);

const mainPinIcon = L.icon({
  iconUrl: mainPinImage.url,
  iconSize: mainPinImage.size,
  iconAnchor: mainPinImage.anchor,
});

const fillAdressField = (coordinates) => {
  addressField.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
};

const onMovingPin = () => {
  const currentCoordinates = mainPinMarker.getLatLng();
  fillAdressField(currentCoordinates);
};

const clearPinMarkes = (pins) => {
  pins.forEach((pin) => {
    pin.remove();
  });
};

const resetMainMarker = () => {
  mainPinMarker.setLatLng(startCoordinates);
  fillAdressField(startCoordinates);
};

addressField.setAttribute('readonly', true);
fillAdressField(startCoordinates);

const mainPinMarker = L.marker(
  startCoordinates,
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker
  .on('move', onMovingPin)
  .addTo(map);

const addAdPinsIntoMap = (adData) => {
  clearPinMarkes(pinMarkers);
  adData
    .slice(0, MAX_NUMBER_OF_ADS)
    .filter(filterAdData)
    .forEach((ad) => {
      const pinIcon = L.icon({
        iconUrl: pinImage.url,
        iconSize: pinImage.size,
        iconAnchor: pinImage.anchor,
      });

      const pinMarker = L.marker(
        {
          lat: ad.location.lat,
          lng: ad.location.lng,
        }, 
        {
          icon: pinIcon,
        },
      );
      pinMarker
        .addTo(map)
        .bindPopup(renderAdCard(ad), {keepInView: true});
      pinMarkers.push(pinMarker);
    });
};

export { 
  addAdPinsIntoMap,
  resetMainMarker
};