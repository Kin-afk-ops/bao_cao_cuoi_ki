$(document).ready(function () {
  //modal
  var closeBtn = $(".modal__close--icon");
  var modalBackground = $(".modal__background");
  var modal = $(".modal");

  closeBtn.click(closeModal);
  modalBackground.click(closeModal);

  function closeModal() {
    modal.addClass("d-none");
  }
});
