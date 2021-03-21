import { addAdPinsIntoMap } from './map.js';
import { getData } from './api.js';
import { showErrorPopup } from './popup.js';
import { setFormSubmit, setMapFilterChange } from './form.js';

getData(
  (adData) => {
    addAdPinsIntoMap(adData);
    setMapFilterChange(() => addAdPinsIntoMap(adData));
  },
  showErrorPopup);

setFormSubmit();