//Menu On Hover

$("body").on("mouseenter mouseleave", ".nav-item", function (e) {
  if ($(window).width() > 750) {
    var _d = $(e.target).closest(".nav-item");
    _d.addClass("show");
    setTimeout(function () {
      _d[_d.is(":hover") ? "addClass" : "removeClass"]("show");
    }, 1);
  }
});

(function () {
  "use strict";
  const forms = document.querySelectorAll(".requires-validation");
  Array.from(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
