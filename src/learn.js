import { body, content_title } from "./dom-loader";
import domtoimage from "dom-to-image";
import { saveAs } from "file-saver";

const mutationConfig = {
  characterData: true,
  attributes: false,
  childList: false,
  subtree: true,
};

const learnCallback = (mutationList, observer) => {
  console.log("mutationList", mutationList);

  for (const mutation of mutationList) {
    if (mutation.type === "characterData") {
      domtoimage.toBlob(body).then(function (blob) {
        var fileName = content_title.innerText
          .trim()
          .replace(/[^a-zA-Z ]/g, "")
          .replace(/ /g, "_");
        saveAs(blob, fileName + ".png");
        // observer.disconnect();
      });
    }
  }
};

const observer = new MutationObserver(learnCallback);

observer.observe(content_title, mutationConfig);