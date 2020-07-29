$("document").ready(function changeText() {
  $(".lead-head").fadeIn(1000, function () {
    $(".lead-head").fadeOut(1500, function () {
      $(".lead-head").text("QUEST TO CONQUER");
      $(".lead-head").fadeIn(1000, function () {
        $(".lead-head").fadeOut(1500, function () {
          $(".lead-head").text("#MADrush");
          changeText();
        });
      });
    });
  });
});
