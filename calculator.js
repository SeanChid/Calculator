function add(num1, num2) {
  return num1 + num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function divide(num1, num2) {
  return num1 / num2
}

function power(num1, num2) {
  return num1 ** num2
}

function mod(num1, num2) {
  return num1 % num2
}

function sqrt(num) {
  return num ** 0.5
}

function calculate(expression) {
  const tokens = expression.split(' ')

  const operator = tokens[1]
  const num1 = Number(tokens[0])
  const num2 = Number(tokens[2])

  if (operator === '+') {
    return add(num1, num2)
  }
  if (operator === '-') {
    return subtract(num1, num2)
  }
  if (operator === '*') {
    return multiply(num1, num2)
  }
  if (operator === '/') {
    return divide(num1, num2)
  }
  if (operator === '^') {
    return power(num1, num2)
  }
  if (operator === '%') {
    return mod(num1, num2)
  }
}

/* **************** DO NOT EDIT THE CODE BELOW **************** */
/* ************************************************************ */
/* **************** DO NOT EDIT THE CODE BELOW **************** */

// When the Submit button is clicked, this code calls your `calculate` function
// and then inserts the result on the HTML page.
document.querySelector('#submitButton').addEventListener('click', () => {
  const result = calculate(document.querySelector('#expression').value);
  if (result !== undefined) {
    document.querySelector('#answer').innerText = result;
  }
});
