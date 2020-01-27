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
