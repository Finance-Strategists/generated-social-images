import { location, modal, id01, staticMap, logo } from './dom-loader';
import './fs-pwa-style.css';

import '../config.json';
import html2canvas from 'html2canvas';

// const API_Key = config.API_KEY;

logo.addEventListener("click", function() {

  console.log(location.innerHTML);

  // Remove modal content
  while (modal.hasChildNodes()) {
    modal.removeChild(modal.firstChild);
    console.log('removed child')
  }

  // Request a static map
  staticMap.src =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    location +
    "&zoom=10&size=1080x1080&key=" +
    API_Key;
    
  html2canvas(document.body, {
    allowTaint: true,
    foreignObjectRendering: true,
    backgroundColor: "#000",
    proxy: null,
    useCORS: true
  }).then((canvas) => {
    modal.appendChild(canvas);
  });

  id01.style.display = "block";
});