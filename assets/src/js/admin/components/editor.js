import "../../scss/components/editor.scss";
import Quill from "quill";

function initEditor(element) {
  let editor = new Quill(element, {
    modules: {
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        [{ color: [] }, { background: [] }],
        [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" }
        ],
        ["direction", { align: [] }],
        ["link", "image", "video"],
        ["clean"]
      ]
    },
    theme: "snow"
  });

  editor.on("text-change", function() {
    var el = document.getElementById(element.getAttribute("data-input-id"));
    if (el) {
      el.value = editor.root.innerHTML;
    }
  });

  // Quill upload image
  function selectLocalImage(uploadUrl) {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.click();

    // Listen upload local image and save to server
    input.onchange = () => {
      const file = input.files[0];

      // file type is only image.
      if (/^image\//.test(file.type)) {
        saveToServer(uploadUrl, file);
      } else {
        console.warn("You could only upload images.");
      }
    };
  }

  /**
   * Step2. save to server
   *
   * @param {File} file
   */
  function saveToServer(uploadUrl, file) {
    var csrf = document
      .querySelector("meta[name=csrf]")
      .getAttribute("content");

    const fd = new FormData();
    fd.append("image", file);
    fd.append("_csrf_token", csrf);

    const xhr = new XMLHttpRequest();
    xhr.open("POST", uploadUrl, true);
    xhr.onload = () => {
      if (xhr.status === 200) {
        // this is callback data: url
        const url = JSON.parse(xhr.responseText).data;
        insertToEditor(url);
      } else {
        alert("Cannot upload photo");
      }
    };
    xhr.send(fd);
  }

  /**
   * Step3. insert image url to rich editor.
   *
   * @param {string} url
   */
  function insertToEditor(url) {
    // push image url to rich editor.
    const range = editor.getSelection();
    editor.insertEmbed(range.index, "image", url);
  }

  // quill editor add image handler
  var uploadUrl = element.getAttribute("data-upload-url");
  if (uploadUrl) {
    editor.getModule("toolbar").addHandler("image", () => {
      selectLocalImage(uploadUrl);
    });
  }
  return editor;
}

export default { init: initEditor };
