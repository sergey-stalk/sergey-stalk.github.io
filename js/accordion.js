$(document).ready(function() {
  $(".services p").hide().prev().click(function() {
  $(".services p").slideUp().removeClass().prev('h3').removeClass();
  $(this).next().not(":visible").slideDown().addClass("active").prev('h3').addClass("active");
  });
});
