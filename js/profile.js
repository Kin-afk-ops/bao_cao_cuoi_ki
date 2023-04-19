$(document).ready(function () {
  var name = $("#profile__name");
  var currentName = "";
  var date = "";
  var profileDate = $("#profile__day");

  function checkLogin(id) {
    return id === 1 ? true : false;
  }

  for (var key in localStorage) {
    var value = localStorage[key];
    var check = parseInt(value.toString().split(", ")[3]);
    if (checkLogin(check)) {
      currentName = value.toString().split(", ")[0];
      date = value.toString().split(", ")[4];
    }
  }

  var day = parseInt(date.split("_")[0]);
  var month = parseInt(date.split("_")[1]) + 1;
  var year = parseInt(date.split("_")[2]);
  if (currentName !== "") {
    name.text(currentName);
  }
  profileDate.html(" ngày " + day + " tháng " + month + " năm " + year);
});
