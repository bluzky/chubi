import "../scss/admin/index.scss";
import "./admin/index.js";
import "selectize";

$(document).ready(function() {
  $('[data-toggle="selectize"]').selectize({
    delimiter: ",",
    persist: false,
    create: function(input) {
      return {
        value: input,
        text: input
      };
    }
  });

  // if ($("[data-toggle=daterange-picker]").length > 0) {
  //   $("[data-toggle=daterange-picker]").each(function() {
  //     var picker = new Lightpick({
  //       field: this,
  //       singleDate: false
  //     });
  //   });
  // }

  // if ($("[data-toggle=datepicker]").length > 0) {
  //   $("[data-toggle=datepicker]").each(function() {
  //     var picker = new Lightpick({
  //       field: this,
  //       startDate: new Date(),
  //       singleDate: true
  //     });
  //   });
  // }
});
