function add() {
  const firstNumber = parseFloat(prompt("Enter the first number:"));
  const secondNumber = parseFloat(prompt("Enter the second number:"));
  const result = firstNumber + secondNumber;
  alert("The result is: " + result);
}

function subtract() {
  const firstNumber1 = parseFloat(prompt("Enter the first number:"));
  const secondNumber1 = parseFloat(prompt("Enter the second number:"));
  const result1 = firstNumber1 - secondNumber1;
  alert("The result is: " + result1);
}

function multiply() {
  const firstNumber2 = parseFloat(prompt("Enter the first number:"));
  const secondNumber2 = parseFloat(prompt("Enter the second number:"));
  const result2 = firstNumber2 * secondNumber2;
  alert("The result is: " + result2);
}

function divide() {
  const firstNumber3 = parseFloat(prompt("Enter the first number:"));
  const secondNumber3 = parseFloat(prompt("Enter the second number:"));
  const result3 = firstNumber3 / secondNumber3;
  alert("The result is: " + result3);
}

function simpleInterest() {
  const principal = parseFloat(prompt("Enter the principal amount:"));
  const rate = parseFloat(prompt("Enter the rate of interest:"));
  const time = parseFloat(prompt("Enter the time period in years:"));
  const result4 = (principal * rate * time) / 100;
  alert("The result is: " + result4);
}

function compoundInterest() {
  const principal1 = parseFloat(prompt("Enter the principal amount:"));
  const rate1 = parseFloat(prompt("Enter the rate of interest (in %):")) / 100;
  const time1 = parseFloat(prompt("Enter the time period in years:"));
  const compoundingFrequency = parseFloat(prompt("Enter the number of times interest is compounded per year:"));
  const result5 = principal1 * Math.pow(1 + rate1 / compoundingFrequency, compoundingFrequency * time1);
  const interest = result5 - principal1;
  alert("The result is: " + result5);
  alert("The interest is: " + interest);
}