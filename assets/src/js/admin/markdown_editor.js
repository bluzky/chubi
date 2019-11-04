import "../../scss/admin/components/markdown_editor.scss";
import { mirrorMark } from "./components/markdown_editor.js";
import UploadBox from "./components/upload_box.svelte";

function initEditor() {
  const editor = mirrorMark(document.getElementById("editor"), {
    showToolbar: false,
    autofocus: true,
    tabSize: 4,
    extraKeys: {
      Enter: "newlineAndIndentContinueMarkdownList"
    }
  });
  editor.render();
}

function initUploadBox() {
  var node = document.createElement("div");
  node.id = "upload-box";
  document.body.appendChild(node);
  const uploadBox = new UploadBox({
    target: document.getElementById("upload-box"),
    props: {}
  });
}

initEditor();
initUploadBox();
