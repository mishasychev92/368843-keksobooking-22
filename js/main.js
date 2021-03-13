import { addAdPinsIntoMap } from './map.js';
import { getData } from './api.js';
import { showErrorPopup } from './popup.js';
import { setFormSubmit } from './form.js';

getData(addAdPinsIntoMap, showErrorPopup);
setFormSubmit();



