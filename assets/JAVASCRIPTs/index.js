jQuery(document).ready(function () {
  // Equal Speed Animation For CTA Btn
  $(".cta").mouseenter(function () {
    $(".cta").css({ "border-radius": "20px", "transition": " 1s 0ms" });
  });

  $(".cta").mouseleave(function () {
    $(".cta").css({ "border-radius": "0px", "transition": " 1s 0ms" });
  });

  // style for skills bars
  jQuery(".skillbar").each(function ani() {
    jQuery(this)
      .find(".skillbar-bar")
      .animate(
        {
          width: jQuery(this).attr("data-percent"),
        },
        6000
      );
  });
});

function menu_open() {
  document.querySelector(".overlay-menu").style.width = "100%";
}
function menu_close() {
  document.querySelector(".overlay-menu").style.width = "0%";
}

$(document).ready(function () {
  // Add smooth scrolling to all links
  $(".link").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        1000,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
