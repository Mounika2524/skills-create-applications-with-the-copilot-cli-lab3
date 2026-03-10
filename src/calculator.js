#!/usr/bin/env node

/**
 * Node.js CLI Calculator App
 * Supports the following basic arithmetic operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 * 
 * And advanced arithmetic operations:
 * - Modulo (%)
 * - Exponentiation (^)
 * - Square Root (√)
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
 * Modulo operation
 * @param {number} a - First operand (dividend)
 * @param {number} b - Second operand (divisor)
 * @returns {number} Remainder of a divided by b
 * @throws {Error} If b is 0 (modulo by zero)
 */
function modulo(a, b) {
  if (b === 0) {
    throw new Error('Error: Modulo by zero is not allowed');
  }
  return a % b;
}

/**
 * Power/Exponentiation operation
 * @param {number} base - The base number
 * @param {number} exponent - The exponent (power)
 * @returns {number} Base raised to the exponent
 */
function power(base, exponent) {
  return Math.pow(base, exponent);
}

/**
 * Square root operation
 * @param {number} n - The number to find the square root of
 * @returns {number} The square root of n
 * @throws {Error} If n is negative (square root of negative number)
 */
function squareRoot(n) {
  if (n < 0) {
    throw new Error('Error: Cannot calculate square root of a negative number');
  }
  return Math.sqrt(n);
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

module.exports = { add, subtract, multiply, divide, modulo, power, squareRoot };

if (require.main === module) {
  main();
}
