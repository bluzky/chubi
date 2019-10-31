import "../../scss/admin/components/markdown_editor.scss";
import CodeMirror from "codemirror";
import "codemirror/mode/gfm/gfm";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/erlang/erlang";
import "codemirror-mode-elixir";

const editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
  mode: "gfm",
  autofocus: true,
  highlightFormatting: true,
  theme: "default"
});
