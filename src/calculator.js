#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

/**
 * Addition operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First operand (minuend)
 * @param {number} b - Second operand (subtrahend)
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First operand
 * @param {number} b - Second operand
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - First operand (dividend)
 * @param {number} b - Second operand (divisor)
 * @returns {number} Quotient of a and b
 * @throws {Error} If b is 0 (division by zero)
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Division by zero is not allowed');
  }
  return a / b;
}

/**
 * Main calculator function that processes CLI arguments
 * Usage: calculator.js <number1> <operator> <number2>
 * Operators: + - * /
 */
function main() {
  const args = process.argv.slice(2);

  if (args.length < 3) {
    console.log('Usage: calculator.js <number1> <operator> <number2>');
    console.log('Operators: + (add), - (subtract), * (multiply), / (divide)');
    console.log('\nExamples:');
    console.log('  calculator.js 10 + 5    # Addition');
    console.log('  calculator.js 10 - 5    # Subtraction');
    console.log('  calculator.js 10 * 5    # Multiplication');
    console.log('  calculator.js 10 / 5    # Division');
    process.exit(1);
  }

  const num1 = parseFloat(args[0]);
  const operator = args[1];
  const num2 = parseFloat(args[2]);

  if (isNaN(num1) || isNaN(num2)) {
    console.error('Error: Invalid numbers provided');
    process.exit(1);
  }

  let result;

  try {
    switch (operator) {
      case '+':
        result = add(num1, num2);
        break;
      case '-':
        result = subtract(num1, num2);
        break;
      case '*':
        result = multiply(num1, num2);
        break;
      case '/':
        result = divide(num1, num2);
        break;
      default:
        console.error(`Error: Unknown operator '${operator}'. Supported operators: + - * /`);
        process.exit(1);
    }

    console.log(`${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  main();
}
