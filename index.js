let expression = "";

function buttonOnClick(number) {
  expression += number;
  inputElement.textContent = expression;
}

function evaluateExpression() {
  const result = eval(expression);
  outputElement.textContent = String(result);
  expression = String(result);
}

const inputElement = document.querySelector("div.input");

const outputElement = document.querySelector("div.output");

const numberButtons = Array.from(document.querySelectorAll("button.number"));

const operatorButtons = Array.from(
  document.querySelectorAll("button.operator")
);

const equalsButton = document.querySelector("button.equals");

const decimalPointButton = document.querySelector("button.decimal-point");

const clearButton = document.querySelector("button.clear-btn");

const delButton = document.querySelector("button.del-btn");

const inputButtons = [...numberButtons, ...operatorButtons, decimalPointButton];

for (let i = 0; i < inputButtons.length; i++) {
  const button = inputButtons[i];
  button.addEventListener("click", () => {
    buttonOnClick(button.textContent || button.innerHTML);
  });
}
equalsButton.addEventListener("click", () => {
  evaluateExpression();
});
clearButton.addEventListener("click", () => {
  expression = "";
  inputElement.textContent = "0";
  outputElement.textContent = "0";
});
delButton.addEventListener("click", () => {
  if (expression.length === 1) {
    expression = "0";
    inputElement.textContent = expression;
    return;
  }
  if (expression.length < 1) return;
  expression = expression.slice(0, -1);
  inputElement.textContent = expression;
});
