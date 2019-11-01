import "../../scss/admin/components/markdown_editor.scss";
import { mirrorMark } from "./components/markdown_editor.js";

const editor = mirrorMark(document.getElementById("editor"), {
  showToolbar: false,
  autofocus: true,
  tabSize: 4,
  extraKeys: {
    Enter: "newlineAndIndentContinueMarkdownList"
  }
});
editor.render();
