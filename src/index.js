import { location, modal, id01, staticMap, logo, image_render } from './dom-loader';
import './fs-pwa-style.css';

import config from '../config.json';
import html2canvas from 'html2canvas';

const API_Key = config.API_KEY;

logo.addEventListener("click", function() {

  console.log(location.innerHTML);

  const request = "https://maps.googleapis.com/maps/api/staticmap?center=" + location.innerHTML + "&zoom=10&size=1080x1080&key=" + API_Key;

  // Request a static map
  staticMap.src = request;
    
  html2canvas(document.body, {
    default: false,
    allowTaint: true,
    foreignObjectRendering: true,
    proxy: null,
    useCORS: true,
    scrollY: -window.scrollY
  }).then((canvas) => {
    var img = canvas.toDataURL();
    image_render.src = img;
  });

  id01.style.display = "block";
});