$(document).ready(function() {
  $("form#sides").submit(function() {
const sideA = parseInt($("input#side1").val());
const sideB = parseInt($("input#side2").val());
const sideC = parseInt($("input#side3").val());

let triangle
  let answer 
if (sideA) {
  
  if (sideA + sideB <= sideC || sideA + sideC <= sideB || sideB + sideC <= sideA) {
    triangle = unanswer;
  }
  if else (sideA === sideB === sideC) {
    triangle = answer;
    answer = "an equilateral";
  }
  if else (sideA === sideB || side A === sideC || sideB === sideC) {
    triangle = answer;
    answer = "an isosceles";
  
  }
  else {
    triangle = answer;
    answer = "a scalene";
  
  }

  $("#tritype").text(answer);
    $("#answer").show();
  
  
  
  
  
  event.preventDefault();

  

});