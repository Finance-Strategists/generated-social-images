import {
  body,
  content_title,
  download
} from "./dom-loader";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const mutationConfig = { attributes: true, childList: true, subtree: true };

const learnCallback = (mutationList, observer) => {
  for (const mutation of mutationList) {
    if (mutation.type === "childList" || mutation.type === "attributes") {
      domtoimage.toBlob(body).then(function (blob) {
        var fileName = content_title.innerText
          .trim()
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/ /g,"_");
        saveAs(blob, fileName + ".png");
        observer.disconnect();
      });
    }
  }
};

download.addEventListener("click", () => {
  console.log('clicked')
  let mutationRecord;
  const observer = new MutationObserver(function(m) {
    // Set mutation record reference
    mutationRecord = m;
  });
  observer.observe(content_title, mutationConfig);
  // Set map source
  content_title.onload = function() {
    learnCallback(mutationRecord, observer);
  }
});