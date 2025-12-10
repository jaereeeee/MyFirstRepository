// Addition
const add1 = document.getElementById("num1");
const add2 = document.getElementById("num2");
const addNumber = document.getElementById("addNumber");
const result = document.getElementById("result");

addNumber.addEventListener("click", () => {
  const addends1 = Number(add1.value);
  const addends2 = Number(add2.value);
  console.log(add1);
  result.innerHTML = `The answer is ${addends1 + addends2}!`;
});

// Subtraction
const sub1 = document.getElementById("sub1");
const sub2 = document.getElementById("sub2");
const subtractNumber = document.getElementById("subtractNumber");
const subResult = document.getElementById("subResult");

subtractNumber.addEventListener("click", () => {
  const subtrahend1 = Number(sub1.value);
  const subtrahend2 = Number(sub2.value);
  console.log(sub1);
  subResult.innerHTML = `The answer is ${subtrahend1 - subtrahend2}!`;
});

// Multiplication
const mul1 = document.getElementById("mul1");
const mul2 = document.getElementById("mul2");
const multiplyNumber = document.getElementById("multiplyNumber");
const mulResult = document.getElementById("mulResult");

multiplyNumber.addEventListener("click", () => {
  const multiplicand1 = Number(mul1.value);
  const multiplicand2 = Number(mul2.value);
  console.log(mul1);
  mulResult.innerHTML = `The answer is ${multiplicand1 * multiplicand2}!`;
});

// Division
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const divideNumber = document.getElementById("divideNumber");
const divResult = document.getElementById("divResult");

divideNumber.addEventListener("click", () => {
  const dividend1 = Number(div1.value);
  const dividend2 = Number(div2.value);
  console.log(div1);
  divResult.innerHTML = `The answer is ${dividend1 / dividend2}!`;
});
