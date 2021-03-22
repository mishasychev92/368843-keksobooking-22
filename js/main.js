/* global _:readonly */
import { addAdPinsIntoMap } from './map.js';
import { getData } from './api.js';
import { showErrorPopup } from './popup.js';
import { setFormSubmit, setMapFilterChange } from './form.js';

const RENDER_DELAY = 500;

getData(
  (adData) => {
    addAdPinsIntoMap(adData);
    setMapFilterChange(_.debounce(() => addAdPinsIntoMap(adData), RENDER_DELAY));
  },
  showErrorPopup);

setFormSubmit();