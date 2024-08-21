// Original operation functions
function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

// New operation functions
function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  // Check for division by zero
  if (b === 0) {
    console.log("Error: Division by zero");
    return null;
  }
  return a / b;
}

function compare(a, b) {
  return a === b ? "Numbers are the same" : "Numbers are different";
}

// The calculator function that accepts a callback operation
function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log(
    "We might have code that saves the result to a log or a database"
  );

  return operationCallback(a, b);
}

// Examples using the existing operations
const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

// Adding the two results together
const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult); // Output: 9

// Using the new operations

// Subtracting result2 from result
const subtractionResult = myCalculatorFunction(result2, result, subtract);
console.log(subtractionResult); // Output: 3

// Dividing result2 by result
const divisionResult = myCalculatorFunction(result2, result, divide);
console.log(divisionResult); // Output: 2

// Attempting to divide by zero
const divisionByZeroResult = myCalculatorFunction(10, 0, divide);
// Output: Error: Division by zero

// Comparing two numbers
const comparisonResult = myCalculatorFunction(result, result2, compare);
console.log(comparisonResult); // Output: Numbers are different

const comparisonResult2 = myCalculatorFunction(result, result, compare);
console.log(comparisonResult2); // Output: Numbers are the same
