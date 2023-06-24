let firstNum = document.querySelector("#firstnum");
let secondNum = document.querySelector("#secondnum");
let operation = document.querySelector("#operation");
let result = document.querySelector(".result");
let btn = document.querySelector(".btn");

function calc() {
  let a = parseFloat(firstNum.value);
  let b = parseFloat(secondNum.value);

  if (isNaN(a) || isNaN(b)) {
    alert("Введите число!");
    return;
  }
  switch (operation.value) {
    case "+":
      result.innerHTML = a + b;
      break;
    case "-":
      result.innerHTML = a - b;
      break;
    case "*":
      result.innerHTML = a * b;
      break;
  }
}

btn.addEventListener("click", calc);
