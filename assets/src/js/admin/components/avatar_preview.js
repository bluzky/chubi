import { Resample } from "../utils/resample.js";

function init(fileEl, inputEl, previewEl, options) {
  options = Object.assign({ width: 256, height: 256 }, options || {});

  fileEl.addEventListener("change", function() {
    if (this.files && this.files[0] && previewEl) {
      var reader = new FileReader();

      // on file loaded callback
      reader.onload = function(e) {
        // target.attr('src', e.target.result);

        Resample(this.result, 256, 256, function(data) {
          // resample image callback, go and display result
          previewEl.setAttribute("src", data);
          inputEl.value = data;
        });
      };

      // start reading file
      reader.readAsDataURL(this.files[0]);
    }
  });
}

export default { init: init };
