var template = `
<div tabindex="-1" role="dialog" class="modal modal-{type} {class-modal} fade">
  <div class="modal-dialog modal-{size}">
    <div class="modal-content">
      <div class="modal-header text-inverse {class-header}">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">×</button>
        <h5 class="modal-title" >{title}</h5>
      </div>
      <div class="modal-body {class-body}">
        {content}
      </div>
      <div class="modal-footer {class-footer}">
        {buttons}
      </div>
    </div>
    <!-- /.modal-content -->
  </div>
  <!-- /.modal-dialog -->
</div>
  `;

String.prototype.format = function (params) {
  var a = this;
  for (var k in params) {
    a = a.replace(new RegExp("\\{\\s*" + k + "\\s*\\}", 'g'), params[k]);
  }
  return a;
};

let defaults = {
  title: "Title",
  content: "text",
  buttons: [{
    text: "button",
    class: "btn-primary",
    value: 1,
    callback: function(){},
    dismiss: true
  }],
  type: "primary",
  size: "medium",
  class: {
    modal: "",
    header: "",
    body: "",
    footer: ""
  }
};

let alertDefault = {
  title: "Alert",
  content: "",
  buttons: [{
    text: "OK",
    class: "btn-default",
  }],
  size: "small",
  type: "info"
};

function alert(options /* or text*/){
  options = options || "";
  if(options.constructor == String){
    let content = options;
    options = Object.assign({}, alertDefault);
    options.content = content;
  }else{
    options = Object.assign({}, alertDefault, options || {});
  }
  render(options);
}


let confirmDefault = {
  title: "Confirm",
  content: "",
  buttons: [{
    text: "OK",
    class: "btn-default",
    value: true
  }, {
    text: "Cancel",
    class: "btn-primary",
    value: false
  }],
  size: "small",
  type: "info"
};

/*
  Usage
  Box.confirm("This is text", callbackFunction)
  or
  Box.confirm({
  title: "Are you sure?"
  content: "This action <b>cannot</b> be reversed"
  })

*/
function confirm(options /* or text*/, callback){
  options = options || "";
  if(options.constructor == String){
    let content = options;
    options = Object.assign({}, confirmDefault);
    options.content = content;
    options.buttons[0].callback = callback;
    options.buttons[1].callback = callback;
  }else{
    options = Object.assign({}, confirmDefault, options || {});
  }
  render(options);
}

let promptDefault = {
  title: "Need your input",
  content: "",
  buttons: [{
    text: "OK",
    class: "btn-default",
    value: true
  }, {
    text: "Cancel",
    class: "btn-primary",
    value: false
  }],
  size: "small",
  type: "info"
};

/*
  callback is function with 1 argument with possible value
  - false: user click cancel
  - text: user input
*/
function prompt(options, callback){
  var customCb = function(value){
    if(value == true){
      let input = this.querySelector("input") || {};
      let text = input.value;
      if(callback)
        callback.call(this, text);
    }else{
      if(callback)
        callback.call(this, false);
    }
  };

  options = options || "";
  if(options.constructor == String){
    let content = options;
    options = Object.assign({}, promptDefault);
    options.content = content;
    options.buttons[0].callback = customCb;
    options.buttons[1].callback = customCb;
  }else{
    options = Object.assign({}, promptDefault, options || {});
  }

  options.content = `<div>${options.content}</div>
                         <div class="mt-2"><input type="text" class="form-control"></div>`;
  render(options);
}

function _size(option){
  switch(option.size || defaults.size){
  case "small":
    return "sm";
  case "medium":
    return "md";
  case "large":
    return "lg";
  default:
    return "md";
  }
}

function _buttons(buttons){
  let html = "";
  for(let i = 0; i < buttons.length; i++){
    let btn = buttons[i];
    btn.id = '_box-btn-' + _id();

    html += `<button type="button" class="btn {btn_class}" {dismiss} data-value="{value}" id="{id}">{text}</button>`.format({
      btn_class: btn.class || "btn-default",
      text: btn.text,
      dismiss: (btn.dismiss == true ? 'data-dismiss="modal"' : ""),
      value: btn.value,
      id: btn.id
    });
  }

  return html;
}

var id = 0;
function _id(){
  return ++id;
}

function _buildClass(options){
  let classOptions = Object.assign({}, defaults, options.class || {});
  let classMap = {};

  for(let key in classOptions){
    classMap["class-" + key] = classOptions[key];
  }

  return classMap;
}

function render(options){
  let params = {
    title: options.title,
    content: options.content,
    buttons: _buttons(options.buttons),
    size: _size(options),
    type: options.type
  };

  params = Object.assign({}, params, _buildClass(options));

  let html = template.format(params);
  let el = buildDom(html);

  document.body.appendChild(el);
  bindEvent(el, options.buttons);
  show(el);
}


function buildDom(html){
  var el = document.createElement("div");
  el.innerHTML = html;
  return el;
}

function show(el){
  $(el).find(".modal").modal({show: true, backdrop: 'static'});
}

function destroy(el){
  $(el).find(".modal").modal('hide');
  el.parentNode.removeChild(el);
}

function bindEvent(el, buttons){
  for(let i = 0 ; i < buttons.length; i++){
    let btn = buttons[i];
    let buttonEl = el.querySelector("#" + btn.id);
    if(buttonEl){
      buttonEl.addEventListener("click", function(event){
        if(btn.callback && typeof btn.callback == "function"){
          btn.callback.call(el, btn.value, event);
        }
        destroy(el);
      });
    }
  }

  // on dismiss, destroy element
  let closeBtn = el.querySelector(".close");
  if(closeBtn){
    closeBtn.addEventListener("click", function(){
      destroy(el);
    });
  }
}

export default  {
  alert: alert,
  confirm: confirm,
  prompt: prompt
};




