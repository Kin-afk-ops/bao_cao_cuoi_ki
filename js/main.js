$(document).ready(function () {
  //modal
  var closeBtn = $(".modal__close--icon");
  var modalBackground = $(".modal__background");
  var modal = $(".modal");
  var date = new Date();

  closeBtn.click(closeModal);
  modalBackground.click(closeModal);

  function closeModal() {
    modal.addClass("d-none");
  }

  //Login

  var dropdown = $(".dropdown");
  var buttonLogin = $(".header__login--buton");
  var checkAccount = -1;
  var logoutBtn = $(".logout-btn");
  var currentKey = "";
  var currentName = "";
  var currentEmail = "";
  var currentPassword = "";

  function checkLogin(id) {
    return id === 1 ? true : false;
  }

  for (var key in localStorage) {
    var value = localStorage[key];
    var check = parseInt(value.toString().split(", ")[3]);
    if (checkLogin(check)) {
      checkAccount = check;
      currentKey = key;
      currentName = value.toString().split(", ")[0];
      currentEmail = value.toString().split(", ")[1];
      currentPassword = value.toString().split(", ")[2];
    }
  }

  if (checkAccount === -1) {
    dropdown.addClass("d-none");
    $("#header__hello").html("Hello!");
  } else {
    buttonLogin.addClass("d-none");
    $("#header__hello").html(currentName + "!");
  }

  var day = date.getDate().toString();
  var month = date.getMonth().toString();
  var year = date.getFullYear().toString();
  var time = day + "_" + month + "_" + year;
  logoutBtn.click(function () {
    localStorage.setItem(
      currentKey,
      currentName +
        ", " +
        currentEmail +
        ", " +
        currentPassword +
        ", " +
        -1 +
        ", " +
        time
    );
    checkAccount = -1;
    window.location.reload();
  });

  // Xu li hien thi dang nhap trang chu
  var trangchuChuadangnhap = $(".trangchu__chuadangnhap");
  var trangchuDadangnhap = $(".trangchu__dadangnhap");
  var giohangChuadangnhap = $(".giohang__chuadangnhap");
  var giohangDadangnhap = $(".giohang__dadangnhap");

  if (checkAccount !== -1) {
    trangchuChuadangnhap.addClass("d-none");
    giohangChuadangnhap.addClass("d-none");

    trangchuDadangnhap.removeClass("d-none");
    giohangDadangnhap.removeClass("d-none");
  }
});
