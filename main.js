$(document).ready(function () {
  $('#modalDefaultContactForm').modal('show');
});

$(document).ready(function () {
  var msg = "";
  var elements = document.getElementsByClassName("form-input");
  var button = document.getElementById("submit");


  button.addEventListener("click", () => {
    for (let i = 0; i < elements.length; i++) {
      if (elements[i].validity.valueMissing) {
        elements[i].placeholder = "Vui lòng điền thông tin!";
      }
    }
  });

  for (let i = 0; i < elements.length; i++) {
    if (elements[i].validity.valueMissing) {
      elements[i].addEventListener("focus", () => {
        elements[i].placeholder = "";
      })
    }
  }
});
