$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["name","born", "drink", "animal", "color", "song", "sport"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput).val();
    });

    $("#results").show();
    event.preventDefault();
  });
});
var dob = $("#born").val();
