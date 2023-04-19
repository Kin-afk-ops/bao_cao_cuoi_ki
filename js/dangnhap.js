$(document).ready(function () {
  var form = $("form");
  var emailForm = $("#email");
  var passwordForm = $("#password");
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

  function validateForm() {
    var check = true;

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

    return check;
  }

  //check

  emailForm.focus(function () {
    $("#message__email").text("");
    emailForm.css("border", "none");
  });

  passwordForm.focus(function () {
    $("#message__password").text("");
    passwordForm.css("border", "none");
  });

  var day = date.getDate().toString();
  var month = date.getMonth().toString();
  var year = date.getFullYear().toString();
  var time = day + "_" + month + "_" + year;
  button.click(function () {
    if (validateForm() === true) {
      for (var key in localStorage) {
        var value = localStorage[key];
        const name = value.toString().split(", ")[0];
        const emailCheck = value.toString().split(", ")[1];
        const passwordCheck = value.toString().split(", ")[2];

        if (
          emailForm.val() === emailCheck &&
          passwordForm.val() === passwordCheck
        ) {
          localStorage.setItem(
            key,
            name +
              ", " +
              emailCheck +
              ", " +
              passwordCheck +
              ", " +
              1 +
              ", " +
              time
          );
          window.location.href = "trangchu.html";
        } else {
          modal.removeClass("d-none");
        }
      }
    }
  });
});
