"use strict";

/* Variables and Constants */

/* Numbers */
const numbers = document.querySelectorAll(".number");
const currentOperand = document.querySelector(".current-operand");
const previousOperand = document.querySelector(".previous-operand");

/* Functions */
const resetCalc = document.querySelector(".reset");
const deleteCalc = document.querySelector(".delete");
const equalCalc = document.querySelector(".equal");
/* Math Operations */
const addition = document.querySelector(".addition");
const subtraction = document.querySelector(".subtraction");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const mathOperations = [addition, subtraction, divide, multiply];

/* Theme Switcher Variables */
const body = document.body;
const divs = document.getElementsByTagName("div");
const calcWrapper = document.querySelector(".calc-wrapper");
const buttonsBackground = document.querySelector(".buttons");
const logo = document.querySelector(".logo");
const slide = document.querySelector(".slide");
const theme = document.querySelectorAll(".theme");
const themeText = document.querySelector(".theme-text");
const circle = document.querySelector(".circle");
const circleOne = document.querySelector(".circle-one");
const circleTwo = document.querySelector(".circle-two");
const circleThree = document.querySelector(".circle-three");
const display = document.querySelector(".display");
const buttons = document.getElementsByTagName("button");

/* Theme switcher */

/* First Theme */
circleOne.addEventListener("click", function () {
  /* Switchers Circles making appear and disappear */
  circleOne.classList.add("orange-circle--active");
  circleTwo.classList.remove("orange-circle--active");
  circleThree.classList.remove("blue-circle--active");
  /* Adding theme2 to body, slide, circle, keypad background and display */
  body.classList.remove("main-background-theme2");
  body.classList.remove("main-background-theme3");
  slide.classList.remove("toggle-background-theme2");
  slide.classList.remove("toggle-background-theme3");
  circleThree.classList.remove("circle-background-theme2");
  circleThree.classList.remove("circle-background-theme3");
  buttonsBackground.classList.remove("keypad-background-theme2");
  buttonsBackground.classList.remove("keypad-background-theme3");
  display.classList.remove("screen-background-theme2");
  display.classList.remove("screen-background-theme3");
  /* Divs text color change */
  for (let i = 0; i <= divs.length - 1; i++) {
    divs[i].classList.remove("keys-text-theme2");
    divs[i].classList.remove("keys-text-theme3");
  }
  /* Buttons Text color change */
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].classList.remove("keys-text-theme2");
    buttons[i].classList.remove("keys-text-theme3");
  }
  /* Delete, Resete and Equal buttons */
  resetCalc.classList.remove("reset-theme2");
  deleteCalc.classList.remove("delete-theme2");
  equalCalc.classList.remove("equal-theme2");
  resetCalc.classList.remove("reset-theme3");
  deleteCalc.classList.remove("delete-theme3");
  equalCalc.classList.remove("equal-theme3");
  /* Digits from 0 to 9 */
  for (let i = 0; i <= numbers.length - 1; i++) {
    numbers[i].classList.remove("keys-theme2");
    numbers[i].classList.remove("keys-theme3");
  }
  /* Multiply, Divide, Addition, Subtraction and Period buttons */
  for (let i = 0; i <= mathOperations.length - 1; i++) {
    mathOperations[i].classList.remove("keys-theme2");
    mathOperations[i].classList.remove("keys-theme3");
  }
});

/* Second Theme */
circleTwo.addEventListener("click", function () {
  /* Switchers Circles making appear and disappear */
  circleTwo.classList.add("orange-circle--active");
  circleOne.classList.remove("orange-circle--active");
  circleThree.classList.remove("blue-circle--active");
  /* Adding theme2 to body, slide, keypad background and display */
  body.classList.add("main-background-theme2");
  body.classList.remove("main-background-theme3");
  slide.classList.add("toggle-background-theme2");
  slide.classList.remove("toggle-background-theme3");
  buttonsBackground.classList.add("keypad-background-theme2");
  buttonsBackground.classList.remove("keypad-background-theme3");
  display.classList.add("screen-background-theme2");
  display.classList.remove("screen-background-theme3");
  /* Divs text color change */
  for (let i = 0; i <= divs.length - 1; i++) {
    divs[i].classList.add("keys-text-theme2");
    divs[i].classList.remove("keys-text-theme3");
  }
  /* Buttons Text color change */
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].classList.add("keys-text-theme2");
    buttons[i].classList.remove("keys-text-theme3");
  }
  /* Delete, Reset and Equal buttons */
  resetCalc.classList.add("reset-theme2");
  deleteCalc.classList.add("delete-theme2");
  equalCalc.classList.add("equal-theme2");
  resetCalc.classList.add("keys-white-color");
  deleteCalc.classList.add("keys-white-color");
  equalCalc.classList.add("keys-white-color");
  resetCalc.classList.remove("reset-theme3");
  deleteCalc.classList.remove("delete-theme3");
  equalCalc.classList.remove("equal-theme3");
  /* Digits from 0 to 9 */
  for (let i = 0; i <= numbers.length - 1; i++) {
    numbers[i].classList.add("keys-theme2");
    numbers[i].classList.remove("keys-theme3");
  }
  /* Multiply, Divide, Addition, Subtraction and Period buttons */
  for (let i = 0; i <= mathOperations.length - 1; i++) {
    mathOperations[i].classList.add("keys-theme2");
    mathOperations[i].classList.remove("keys-theme3");
  }
});

/* Third Theme */
circleThree.addEventListener("click", function () {
  /* Switchers Circles making appear and disappear */
  circleThree.classList.add("blue-circle--active");
  circleOne.classList.remove("orange-circle--active");
  circleTwo.classList.remove("orange-circle--active");
  /* Adding theme2 to body, slide, circle, keypad background and display */
  body.classList.add("main-background-theme3");
  body.classList.remove("main-background-theme2");
  slide.classList.add("toggle-background-theme3");
  slide.classList.remove("toggle-background-theme2");
  circleThree.classList.add("circle-background-theme3");
  circleThree.classList.remove("circle-background-theme2");
  buttonsBackground.classList.add("keypad-background-theme3");
  buttonsBackground.classList.remove("keypad-background-theme2");
  display.classList.add("screen-background-theme3");
  display.classList.remove("screen-background-theme2");
  /* Divs text color change */
  for (let i = 0; i <= divs.length - 1; i++) {
    divs[i].classList.add("keys-text-theme3");
    divs[i].classList.remove("keys-text-theme2");
  }
  /* Buttons Text color change */
  for (let i = 0; i <= buttons.length - 1; i++) {
    buttons[i].classList.add("keys-text-theme3");
    buttons[i].classList.remove("keys-text-theme2");
  }
  /* Delete, Resete and Equal buttons */
  resetCalc.classList.add("reset-theme3");
  deleteCalc.classList.add("delete-theme3");
  equalCalc.classList.add("equal-theme3");
  resetCalc.classList.remove("keys-white-color");
  deleteCalc.classList.remove("keys-white-color");
  equalCalc.classList.remove("keys-white-color");
  resetCalc.classList.remove("reset-theme2");
  deleteCalc.classList.remove("delete-theme2");
  equalCalc.classList.remove("equal-theme2");
  /* Digits from 0 to 9 */
  for (let i = 0; i <= numbers.length - 1; i++) {
    numbers[i].classList.add("keys-theme3");
    numbers[i].classList.remove("keys-theme2");
  }
  /* Multiply, Divide, Addition, Subtraction and Period buttons */
  for (let i = 0; i <= mathOperations.length - 1; i++) {
    mathOperations[i].classList.add("keys-theme3");
    mathOperations[i].classList.remove("keys-theme2");
  }
});
