"use strict";
/* Variables and Constants */
/* Numbers */
const zero = document.querySelector(".zero");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const digits = [zero, one, two, three, four, five, six, seven, eight, nine];
/* Functions */
const resetCalc = document.querySelector(".reset");
const displayCalc = document.querySelector(".display-calc");
const deleteCalc = document.querySelector(".delete");
/* Math Operations */
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const period = document.querySelector(".period");

/* Event listeners */

/* Reset function */
resetCalc.addEventListener("click", function () {
  displayCalc.innerHTML = 0;
});
/* Delete last character function*/
deleteCalc.addEventListener("click", function () {
  displayCalc.innerHTML = displayCalc.innerHTML.substring(
    0,
    displayCalc.innerHTML.length - 1
  );
  if (displayCalc.innerHTML.indexOf(".") === displayCalc.innerHTML.length - 1) {
    displayCalc.innerHTML = displayCalc.innerHTML.replace(".", "");
  }
});
/* Adding digits to display*/
for (let i = 0; i < digits.length; i++) {
  console.log(digits[i]);
  digits[i].addEventListener("click", function () {
    if (displayCalc.innerHTML === "0") {
      displayCalc.innerHTML = "";
    }
    displayCalc.innerHTML = displayCalc.innerHTML + digits[i].innerHTML;
  });
}
