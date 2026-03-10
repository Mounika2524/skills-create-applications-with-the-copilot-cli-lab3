const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

describe('Calculator Functions', () => {
  describe('Addition', () => {
    it('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    it('should add a positive and negative number', () => {
      expect(add(10, -4)).toBe(6);
    });

    it('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });

    it('should add decimal numbers', () => {
      expect(add(2.5, 3.5)).toBe(6);
    });

    it('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should subtract resulting in negative number', () => {
      expect(subtract(5, 10)).toBe(-5);
    });

    it('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    it('should handle zero', () => {
      expect(subtract(5, 0)).toBe(5);
      expect(subtract(0, 5)).toBe(-5);
    });

    it('should subtract decimal numbers', () => {
      expect(subtract(10.5, 2.5)).toBe(8);
    });

    it('should subtract same number resulting in zero', () => {
      expect(subtract(7, 7)).toBe(0);
    });

    it('should handle large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  describe('Multiplication', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('should multiply by zero', () => {
      expect(multiply(10, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-5, -3)).toBe(15);
    });

    it('should multiply a positive and negative number', () => {
      expect(multiply(10, -5)).toBe(-50);
      expect(multiply(-10, 5)).toBe(-50);
    });

    it('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    it('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
      expect(multiply(1, 7)).toBe(7);
    });

    it('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    it('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    it('should divide resulting in decimal', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    it('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-10, -5)).toBe(2);
    });

    it('should divide a positive by negative', () => {
      expect(divide(10, -5)).toBe(-2);
      expect(divide(-10, 5)).toBe(-2);
    });

    it('should divide by one', () => {
      expect(divide(7, 1)).toBe(7);
    });

    it('should divide decimal numbers', () => {
      expect(divide(10.5, 3)).toBeCloseTo(3.5, 1);
    });

    it('should throw error for division by zero', () => {
      expect(() => {
        divide(10, 0);
      }).toThrow('Error: Division by zero is not allowed');
    });

    it('should handle large numbers', () => {
      expect(divide(2000000, 1000)).toBe(2000);
    });
  });

  describe('Example Operations from Image', () => {
    it('should calculate 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    it('should calculate 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    it('should calculate 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    it('should calculate 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Modulo', () => {
    it('should calculate modulo of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    it('should handle modulo with zero dividend', () => {
      expect(modulo(0, 5)).toBe(0);
    });

    it('should handle modulo with negative numbers', () => {
      expect(modulo(-10, 3)).toBe(-1);
      expect(modulo(10, -3)).toBe(1);
    });

    it('should handle modulo with decimals', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 1);
    });

    it('should throw error for modulo by zero', () => {
      expect(() => {
        modulo(10, 0);
      }).toThrow('Error: Modulo by zero is not allowed');
    });

    it('should handle modulo resulting in zero', () => {
      expect(modulo(10, 2)).toBe(0);
    });
  });

  describe('Power/Exponentiation', () => {
    it('should calculate power of two numbers', () => {
      expect(power(2, 8)).toBe(256);
    });

    it('should handle power with zero exponent', () => {
      expect(power(5, 0)).toBe(1);
    });

    it('should handle power with negative exponent', () => {
      expect(power(2, -2)).toBe(0.25);
    });

    it('should handle power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });

    it('should handle power with decimal exponent', () => {
      expect(power(9, 0.5)).toBe(3);
    });

    it('should handle base of 1', () => {
      expect(power(1, 100)).toBe(1);
    });

    it('should handle large numbers', () => {
      expect(power(10, 3)).toBe(1000);
    });
  });

  describe('Square Root', () => {
    it('should calculate square root of a positive number', () => {
      expect(squareRoot(16)).toBe(4);
      expect(squareRoot(25)).toBe(5);
    });

    it('should handle square root of zero', () => {
      expect(squareRoot(0)).toBe(0);
    });

    it('should handle square root of decimal numbers', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    it('should handle square root of non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    it('should throw error for square root of negative number', () => {
      expect(() => {
        squareRoot(-4);
      }).toThrow('Error: Cannot calculate square root of a negative number');
    });

    it('should handle large numbers', () => {
      expect(squareRoot(10000)).toBe(100);
    });
  });

  describe('Example Operations from Extended Image', () => {
    it('should calculate modulo with 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    it('should calculate power with 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    it('should calculate square root with √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    it('should combine multiple extended operations', () => {
      expect(modulo(10, 3)).toBe(1);
      expect(power(3, 3)).toBe(27);
      expect(squareRoot(9)).toBe(3);
    });
  });
});
