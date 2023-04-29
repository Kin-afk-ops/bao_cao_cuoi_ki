$(document).ready(function () {
  var btnBuy = $(".btn__buy");
  var modal = $(".modal");
  var courses = $(".course__item");

  btnBuy.click(function () {
    var item = btnBuy;
    console.log(btnBuy.id);
    modal.removeClass("d-none");
  });
});
