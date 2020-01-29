$(".question").click(function() {
  if (
    $(this)
      .next(".answer")
      .is(":hidden")
  ) {
    $(this)
      .find("img")
      .fadeOut("fast", function() {
        $(this)
          .attr("src", "./images/icon-arrow-close.svg")
          .fadeIn("fast");
      });

    $(this)
      .next(".answer")
      .slideDown("slow");
  } else {
    $(this)
      .find("img")
      .fadeOut("fast", function() {
        $(this)
          .attr("src", "./images/icon-arrow.svg")
          .fadeIn("fast");
      });

    $(this)
      .next(".answer")
      .slideUp("slow");
  }
});
<<<<<<< HEAD

$(".tab:first").css("display", "flex");

$(".features-container-tabs a").click(function() {
  event.preventDefault();

  var tab_id = $(this).attr("href");

  $(".features-container-tabs a").removeClass("fade");
  $(".tab").hide();
  $(this).addClass("fade");

  $(tab_id)
    .css("display", "flex")
    .hide()
    .fadeIn("slow");
});
=======
>>>>>>> 0ac4b59da3f07b94aa55a2c855eecf9e76a514dc
