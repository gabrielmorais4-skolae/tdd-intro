const calculator = require('../calculator');

describe('Calculator', () => {
    describe('addition', () => {
        test('should return the sum of two positive numbers', () => {
            expect(calculator.add(2, 3)).toBe(5);
            expect(calculator.add(10, 15)).toBe(25);
        });
    });
})