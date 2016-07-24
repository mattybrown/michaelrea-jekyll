$(document).ready(function(){
  $('.slider').slider({full_width: true});
  $('.google-map').click(function () {
    $('.google-map iframe').css("pointer-events", "auto");
  });
  $('.google-map').mouseleave(function() {
    $('.google-map iframe').css("pointer-events", "none");
  });
  $('.datepicker').pickadate({
    selectMonths: true,
    selectYears:1
  });
  $('select').material_select();
});
