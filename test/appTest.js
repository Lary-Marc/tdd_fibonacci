//Mukuye Mark and Timothy Tugume worked on this work


const chai = require('chai');
const assert = chai.assert; 
let Fibonacci = require('../app');

describe('Fibonacci', () => {
    
    describe('test the VALID return values of the Fibonacci method', () => {
        let fib;
        beforeEach(() => {
            fib = new Fibonacci();
        });
        it('should return 0', () => {
           assert.equal(fib.fibonacci(0), 0);
        });
        it('should return 1', () => {
            assert.equal(fib.fibonacci(1), 1);
        });
        it('should return 1', () => {
            assert.equal(fib.fibonacci(2), 1);
        });
        it('should return 2', () => {
            assert.equal(fib.fibonacci(3), 2);
        });
        it('should return 3', () => {
            assert.equal(fib.fibonacci(4), [0,1,1,2,3]);
        });
        it('should return 5', () => {
            assert.equal(fib.fibonacci(5), 5);
        });
        it('should return 8', () => {
            assert.equal(fib.fibonacci(6), 8);
        });
        it('should return 13', () => {
            assert.equal(fib.fibonacci(7), 13);
        });
        it('should return 21', () => {
            assert.equal(fib.fibonacci(8), 21);
        });
        it('should return 34', () => {
            assert.equal(fib.fibonacci(9), 34);
        });
        it('should return 55', () => {
            assert.equal(fib.fibonacci(10), 58);
        });
    });
});