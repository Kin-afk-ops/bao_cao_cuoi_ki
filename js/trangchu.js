$(document).ready(function () {
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
  } else {
    buttonLogin.addClass("d-none");
  }

  logoutBtn.click(function () {
    localStorage.setItem(
      currentKey,
      currentName + ", " + currentEmail + ", " + currentPassword + ", " + -1
    );
    checkAccount = -1;
    window.location.reload();
  });
});
