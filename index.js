$(".question").click(function() {
  if (
    $(this)
      .next(".answer")
      .is(":hidden")
  ) {
    $(this)
      .find("img")
      .fadeOut(function() {
        $(this)
          .attr("src", "./images/icon-arrow-close.svg")
          .fadeIn();
      });

    $(this)
      .next(".answer")
      .slideDown("slow");
  } else {
    $(this)
      .find("img")
      .fadeOut(function() {
        $(this)
          .attr("src", "./images/icon-arrow.svg")
          .fadeIn();
      });

    $(this)
      .next(".answer")
      .slideUp("slow");
  }
});
