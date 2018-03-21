$(document).ready(function() {
  $("#formOne").submit(function(event){

  var lastname1Input = $("input#lastname1").val();
  var lastname2Input = $("input#lastname2").val();
  var adj1Input = $("input#adj1").val();
  var adj2Input = $("input#adj2").val();
  var adj3Input = $("input#adj3").val();
  var verbptInput = $("input#verbpt").val();
  var firstnameInput = $("input#firstname").val();
  var lastname3Input = $("input#lastname3").val();
  var nounInput = $("input#noun").val();
  var verbpt2Input = $("input#verbpt2").val();
  var animalInput = $("input#animal").val();
  var locationInput = $("input#location").val();
  var verbpt3Input = $("input#verbpt3").val();
  var employeeInput = $("input#employee").val();
  var noun2Input = $("input#noun2").val();
  var bodypartInput = $("input#bodypart").val();
  var firstname2Input = $("input#firstname2").val();
  var adj4Input = $("input#adj4").val();
  var firstname3Input = $("input#firstname3").val();
  var lastname4Input = $("input#lastname4").val();

  console.log(lastname1Input);

  $(".lastname1").text(lastname1Input);
  $(".lastname2").text(lastname2Input);
  $(".adj1").text(adj1Input);
  $(".adj2").text(adj2Input);
  $(".adj3").text(adj3Input);
  $(".verbpt").text(verbptInput);
  $(".firstname").text(firstnameInput);
  $(".lastname3").text(lastname3Input);
  $(".noun").text(nounInput);
  $(".verbpt2").text(verbpt2Input);
  $(".animal").text(animalInput);
  $(".location").text(locationInput);
  $(".verbpt3").text(verbpt3Input);
  $(".employee").text(employeeInput);
  $(".noun2").text(noun2Input);
  $(".bodypart").text(bodypartInput);
  $(".firstname2").text(firstname2Input);
  $(".adj4").text(adj4Input);
  $(".firstname3").text(firstname3Input);
  $(".lastname4").text(lastname4Input);

  $("#story").show();
  event.preventDefault();
  });
});
