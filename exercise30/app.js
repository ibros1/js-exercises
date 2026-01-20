function calculate(a, b, callback) {
  return callback(a, b);
}

function sum(a, b) {
  return a + b;
}

function substruct(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

console.log("addition", calculate(2, 3, sum));
console.log("substruction", calculate(10, 3, substruct));
console.log("multiplication", calculate(2, 3, multiply));
console.log("devision", calculate(4, 2, divide));
