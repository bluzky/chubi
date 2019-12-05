import "../scss/index.scss";

import * as $ from "jquery";
import "bootstrap";
import * as hljs from "highlight.js";

hljs.initHighlightingOnLoad();

$("nav .dropdown").hover(
  function() {
    var $this = $(this);
    $this.addClass("show");
    $this.find("> a").attr("aria-expanded", true);
    $this.find(".dropdown-menu").addClass("show");
  },
  function() {
    var $this = $(this);
    $this.removeClass("show");
    $this.find("> a").attr("aria-expanded", false);
    $this.find(".dropdown-menu").removeClass("show");
  }
);
