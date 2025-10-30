const calculator = require('../calculator');

describe('Calculator', () => {
    describe('add positive numbers', () => {
        test('should return the sum of two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
            expect(calculator.add(10, 15)).toBe(25);
        });
    });

    describe('add negative numbers', () => {
        test('should return the sum of two negative numbers', () => {
            expect(calculator.add(-2, -3)).toBe(-5);
            expect(calculator.add(-10, -15)).toBe(-25);
        });
    });
})