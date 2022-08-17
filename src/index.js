import {
  location,
  staticMap,
  logo,
  body,
} from "./dom-loader";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";
import "./fs-pwa-style.css";
import config from "../config.json";

const mutationConfig = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList" || mutation.type === "attributes") {
      domtoimage.toBlob(body).then(function (blob) {
        var fileName = location.innerText
          .trim()
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/ /g,"_");
        saveAs(blob, fileName + ".png");
        observer.disconnect();
      });
    }
  }
};

logo.addEventListener("click", () => {
  let mutationRecord;
  const observer = new MutationObserver(function(m) {
    // Set mutation record reference
    mutationRecord = m;
  });
  observer.observe(staticMap, mutationConfig);
  // Set map source
  staticMap.src =
    "https://maps.googleapis.com/maps/api/staticmap?center=" +
    location.innerText +
    "&zoom=10&size=1080x1080&key=" +
    config.API_KEY;
  staticMap.onload = function() {
    callback(mutationRecord, observer);
  }
});