import "./trix.js";
import "../../scss/admin/trix.css";

$(document).ready(function() {
  const editor = document.querySelector("trix-editor").editor;
});

(function() {
  var HOST = "/admin/upload";

  addEventListener("trix-attachment-add", function(event) {
    if (event.attachment.file) {
      uploadFileAttachment(event.attachment);
    }
  });

  function uploadFileAttachment(attachment) {
    uploadFile(attachment.file, setProgress, setAttributes);

    function setProgress(progress) {
      attachment.setUploadProgress(progress);
    }

    function setAttributes(attributes) {
      attachment.setAttributes(attributes);
    }
  }

  function uploadFile(file, progressCallback, successCallback) {
    var formData = createFormData(file);
    var xhr = new XMLHttpRequest();

    xhr.open("POST", HOST, true);

    xhr.upload.addEventListener("progress", function(event) {
      var progress = (event.loaded / event.total) * 100;
      progressCallback(progress);
    });

    xhr.addEventListener("load", function(event) {
      if (xhr.status == 200) {
        var response = JSON.parse(xhr.response);
        var attributes = {
          url: response.data.url
        };
        successCallback(attributes);
      }
    });

    xhr.send(formData);
  }

  function createFormData(file) {
    var csrf = document
      .querySelector("meta[name=csrf]")
      .getAttribute("content");

    const fd = new FormData();
    fd.append("file", file);
    fd.append("_csrf_token", csrf);
    fd.append("Content-Type", file.type);
    return fd;
  }
})();
