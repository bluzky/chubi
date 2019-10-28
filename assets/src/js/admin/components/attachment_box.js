import "whatwg-fetch";
import { html, render } from "lit-html";
import message from "../utils/message.js";

function UploadBox(el, files, name) {
  this.el = el;

  if (typeof el == "string") {
    this.el = document.getElementById(id);
  }

  this.currentFiles = files || [
    {
      filename: "test",
      id: 123
    }
  ];
  this.domFiles = [];
  this.name = name;
  this.injectHtml();
  this.update();
}

UploadBox.prototype = {
  removeFile: function(file) {
    if (file.id) {
      this.deleteServerFile(file);
    } else {
      this.deleteDomFile(file);
    }

    this.update();
  },

  deleteServerFile: function(file) {
    var form = new FormData();
    var self = this;
    const csrf = document.querySelector("meta[name=csrf]").attributes.content
      .value;
    form.append("_csrf_token", csrf);
    form.append("_method", "delete");

    window
      .fetch(`/hr/api/attachments/${file.id}`, {
        method: "POST",
        body: form
      })
      .then(function(response) {
        if (response.status >= 200 && response.status < 300) {
          return response.json();
        } else {
          var error = new Error(response.statusText);
          error.response = response;
          throw error;
        }
      })
      .then(json => {
        // remove file from the list
        for (var index = 0; index < self.currentFiles.length; index++) {
          if (self.currentFiles[index].id == file.id) {
            break;
          }
        }
        self.currentFiles.splice(index, 1);
        self.update();

        message.success("File is deleted!");
      })
      .catch(function(ex) {
        message.error("Cannot delete file!");
      });
  },

  deleteDomFile: function(file) {
    let index = 0;
    for (; index < this.domFiles.length; index++) {
      if (
        this.domFiles[index].filename == file.filename &&
        this.domFiles[index].size == file.size
      ) {
        break;
      }
    }
    this.domFiles.splice(index, 1);
    file.el.parentNode.removeChild(file.el);
  },

  addFile: function(e) {
    for (let i = 0; i < e.target.files.length; i++) {
      let file = {
        el: e.target.cloneNode(),
        filename: e.target.files[i].name,
        size: e.target.files[i].size
      };
      file.el.id = null;
      this.domFiles.push(file);
      this.el.querySelector(".file-input-list").appendChild(file.el);
      e.target.value = "";
    }

    this.update();
  },

  renderFile: function(file) {
    return html`
      <span data-id="${file.id}" class="btn btn-secondary mb-1">
        <i class="fe fe-paperclip mr-1"></i> ${file.filename}
        <i class="fe fe-x ml-2" @click=${this.removeFile.bind(this, file)}></i>
      </span>
    `;
  },

  template: function() {
    return html`
      ${this.currentFiles.map(this.renderFile.bind(this))}
      ${this.domFiles.map(this.renderFile.bind(this))}

      <label class="btn btn-link m-0">
        <input
          type="file"
          style="display: none"
          name="${this.name}"
          @change=${this.addFile.bind(this)}
        />
        <i class="fe fe-plus mr-1"></i> Add file</label
      >
    `;
  },

  injectHtml: function() {
    this.el.innerHTML = `
    <div class="js-file-list"></div>
    <div class="file-input-list" style="display: none;"></div>
    `;
  },

  update: function() {
    render(this.template(), this.el.querySelector(".js-file-list"));
  }
};

export default UploadBox;
