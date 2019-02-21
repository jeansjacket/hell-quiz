$(document).ready(function() {
  $("form").hide();
  $(".results").hide();

  $("#start-quiz").click(function() {
    $("form").show();
    $("#start-quiz").hide();
  });

  $("form").submit(function(event) {
    event.preventDefault();

    $("form").hide();
    $("#header").hide();

    var nameInput = $("input#name").val().charAt(0).toUpperCase() + $("input#name").val().slice(1);
    var friendsInput =  $("input:radio[name=friends]:checked").val();
    var nightmareInput = $("input:radio[name=nightmares]:checked").val();
    var passionInput = $("input:radio[name=passion]:checked").val();

    $(".name").text(nameInput);

    if (nameInput === "Satan") {
      $("#center").show();
    } else if (friendsInput === "unbaptized" && nightmareInput === "howling" && passionInput === "zoro" || friendsInput === "unbaptized" && nightmareInput === "ice" && passionInput === "zoro" || friendsInput === "unbaptized" && nightmareInput === "worm" && passionInput === "zoro") {
      $("#limbo").show();
    } else if (friendsInput === "magical" && nightmareInput === "howling" && passionInput === "swimming" || friendsInput === "unbaptized" && nightmareInput === "howling" && passionInput === "bones" || friendsInput === "bedazzled" && nightmareInput === "howling" && passionInput === "bones" || friendsInput === "bedazzled" && nightmareInput === "howling" && passionInput === "zoro") {
      $("#second").show();
    } else if (friendsInput === "magical" && nightmareInput === "worm" && passionInput === "bones" || friendsInput === "bedazzled" && nightmareInput === "worm" && passionInput === "bones" || friendsInput === "bedazzled" && nightmareInput === "worm" && passionInput === "swimming") {
      $("#third").show();
    } else if (friendsInput === "magical" && nightmareInput === "howling" && passionInput === "zoro" || friendsInput === "bedazzled" && nightmareInput === "ice" && passionInput === "swimming") {
      $("#fourth").show();
    } else if (friendsInput === "unbaptized" && nightmareInput === "howling" && passionInput === "swimming" || friendsInput === "unbaptized" && nightmareInput === "worm" && passionInput === "swimming" || friendsInput === "bedazzled" && nightmareInput === "howling" && passionInput === "swimming") {
      $("#fifth").show();
    } else if (friendsInput === "magical" && nightmareInput === "worm" && passionInput === "zoro" || friendsInput === "bedazzled" && nightmareInput === "ice" && passionInput === "zoro" || friendsInput === "bedazzled" && nightmareInput === "worm" && passionInput === "zoro") {
      $("#sixth").show();
    } else if (friendsInput === "unbaptized" && nightmareInput === "worm" && passionInput === "bones" || friendsInput === "bedazzled" && nightmareInput === "ice" && passionInput === "bones") {
      $("#seventh").show();
    } else if (friendsInput === "magical" && nightmareInput === "howling" && passionInput === "bones" || friendsInput === "magical" && nightmareInput === "ice" && passionInput === "zoro" || friendsInput === "magical" && nightmareInput === "worm" && passionInput === "swimming") {
      $("#eighth").show();
    } else if (friendsInput === "magical" && nightmareInput === "ice" && passionInput === "bones" || friendsInput === "magical" && nightmareInput === "ice" && passionInput === "swimming" || friendsInput === "unbaptized" && nightmareInput === "ice" && passionInput === "bones" || friendsInput === "unbaptized" && nightmareInput === "ice" && passionInput === "swimming") {
      $("#ninth").show();
    } else {
      $("#oops").show();
    }
  });
});
