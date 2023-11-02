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

  let num1
  let num2
  let operator

  if (tokens.length === 3) {
    num1 = Number(tokens[0])
    operator = tokens[1]
    num2 = Number(tokens[2])

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
      alert('Invalid Number')
      return
    }
  
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

  if (tokens.length < 2) {
    alert('Too Few Characters')
    return
  }

  if (tokens.length === 2) {
    num1 = Number(tokens[1])
    operator = tokens[0]
    
    if (Number.isNaN(num1)) {
      alert('Invalid Number')
      return
    }

    if (operator === 'sqrt') {
      return sqrt(num1)
    }
  }

  if (tokens.length > 3) {
    alert('Too Many Characters')
    return
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
