$(document).ready(function () {
  //click on an image, get a message

  $("#dogeOne").click(function () {
    $("#outputDiv").hide();

    console.log("user clicked dogeOne 2");
    $("#outputMsg").text("You Lose, Sorry please try again");
    $("#outputDiv").toggle();
  });

  $("#dogeTwo").click(function () {
    $("#outputDiv").hide();
    console.log("user clicked dogeTwo 2");
    $("#outputMsg").text("you has WOW");
    $("#outputDiv").toggle();
  });
});
