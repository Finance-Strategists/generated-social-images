import {
  location,
  modal,
  id01,
  staticMap,
  logo,
  image_render,
  body,
} from "./dom-loader";
import "./fs-pwa-style.css";

import config from "../config.json";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const API_Key = config.API_KEY;

const murationConfig = { attributes: true, childList: true, subtree: true };

const callback = (mutationList, observer) => {

  for (const mutation of mutationList) {
    if (mutation.type === "childList" || mutation.type === "attributes") {

      domtoimage.toBlob(body).then(function (blob) {
        
        var file_name = location.innerText;
        var removeWhitespace = file_name.trim();
        var removeSpecialCharacters = removeWhitespace.replace(/[^a-zA-Z ]/g, "");
        var underScored = removeSpecialCharacters.replace(/ /g,"_");

        window.saveAs(blob, underScored + ".png");
        observer.disconnect();
      });
    }
  }
};

logo.addEventListener("click", () => {
  const observer = new MutationObserver(callback);

  observer.observe(staticMap, murationConfig);

  setTimeout(function () {
    const request =
      "https://maps.googleapis.com/maps/api/staticmap?center=" +
      location.innerText +
      "&zoom=10&size=1080x1080&key=" +
      API_Key;

    // Request a static map
    staticMap.src = request;
  }, 2000);
});
