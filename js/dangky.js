$(document).ready(function () {
  var form = $("form");

  var nameForm = $("#name");
  var emailForm = $("#email");
  var passwordForm = $("#password");
  var input = $("input");
  var passwordAgainForm = $("#password2");
  var button = $("button");
  var modal = $(".modal");

  var date = new Date();

  form.on("submit", function (e) {
    e.preventDefault();
  });

  function validateElement(element) {
    const value = element.val();
    if (value === "") return false;
    return true;
  }

  function validateEmail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const value = email.val();
    return regex.test(value) ? true : false;
  }

  function checkEmail(email) {
    for (var key in localStorage) {
      var value = localStorage[key];
      const emailCheck = value.toString().split(", ")[1];
      if (emailCheck === email.val()) return false;
    }
    return true;
  }

  function validatePassword(password, password2) {
    const value1 = password.val();
    const value2 = password2.val();
    return value1 === value2 ? true : false;
  }

  function validateForm() {
    // Xac thuc ho ten
    var check = true;
    if (validateElement(nameForm) === false) {
      $("#message__name").html("Vui lòng nhập họ tên!").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      nameForm.css({ border: "1px solid red" });
      check = false;
    }

    // Xac thuc email

    if (validateElement(emailForm) === false) {
      $("#message__email").html("Vui lòng nhập Email!").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      emailForm.css({ border: "1px solid red" });
      check = false;
    }

    if (validateEmail(emailForm) === false) {
      $("#message__email").html("Vui lòng nhập đúng Email!").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      emailForm.css({ border: "1px solid red" });
      check = false;
    }

    if (checkEmail(emailForm) === false) {
      $("#message__email").html("Email đã tồn tại").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      emailForm.css({ border: "1px solid red" });
      check = false;
    }

    // bao mat mat khau
    if (validateElement(passwordForm) === false) {
      $("#message__password").html("Vui lòng nhập mật khẩu!").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      passwordForm.css({ border: "1px solid red" });
      check = false;
    }

    // Nhap lai mat khau

    if (validateElement(passwordAgainForm) === false) {
      $("#message__password2").html("Vui lòng nhập mật khẩu!").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      passwordAgainForm.css({ border: "1px solid red" });
      check = false;
    }

    if (validatePassword(passwordForm, passwordAgainForm) === false) {
      $("#message__password2").html("Mật khẩu không trùng khớp").css({
        color: "#FF6666",
        "font-size": "16px",
        margin: "0",
        "font-weight": "400",
      });
      passwordAgainForm.css({ border: "1px solid red" });
      check = false;
    }
    return check;
  }

  //check
  nameForm.focus(function () {
    $("#message__name").text("");
    nameForm.css("border", "none");
  });
  emailForm.focus(function () {
    $("#message__email").text("");
    emailForm.css("border", "none");
  });

  passwordForm.focus(function () {
    $("#message__password").text("");
    passwordForm.css("border", "none");
  });

  passwordAgainForm.focus(function () {
    $("#message__password2").text("");
    passwordAgainForm.css("border", "none");
  });

  var day = date.getDate().toString();
  var month = date.getMonth().toString();
  var year = date.getFullYear().toString();
  var time = day + "_" + month + "_" + year;
  button.click(function () {
    if (validateForm() === true) {
      var id = localStorage.length;

      var text =
        nameForm.val() +
        ", " +
        emailForm.val() +
        ", " +
        passwordForm.val() +
        ", " +
        -1 +
        ", " +
        time;
      window.localStorage.setItem(id, text);
      modal.removeClass("d-none");
    }
  });
});
