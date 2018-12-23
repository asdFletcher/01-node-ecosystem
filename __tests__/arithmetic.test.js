'use strict';

const arithmetic = require('../lib/arithmetic.js');
const faker = require('faker');

// add
describe('adder module', () => { 

  it('can add 2 numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();
    let expected = a + b;
    let sum = arithmetic.add(a,b);
    expect(expected).toEqual(sum);
  });

  it('can handle non numbers', () => {
    let a = faker.random.boolean();
    let b = faker.random.image();
    let expected = null;
    let sum = arithmetic.add(a,b);
    expect(expected).toEqual(sum);
  });
  
  it('can handle single parameter input', () => {
    let a = faker.random.number();

    let expected = a;
    let sum = arithmetic.add(a);
    expect(expected).toEqual(sum);
  });

  it('defaults to zero with no params', () => {
    let expected = 0;
    let sum = arithmetic.add();
    expect(expected).toEqual(sum);
  });

  it('can accept an array', () => {
    let expected = 100;
    let sum = arithmetic.add([50,40,10]);
    expect(expected).toEqual(sum);
  });

  it('can accept an array with a non array', () => {
    let expected = 100;
    let sum = arithmetic.add([50,40,10], null);
    expect(expected).toEqual(sum);
  });

  it('can accept an empty array', () => {
    let expected = 0;
    let sum = arithmetic.add([], 2);
    expect(expected).toEqual(sum);
  });

});

// subtract
describe('subtact module', () => { 
  it('can subtract 2 numbers', () => {
    let a = faker.random.number();
    let b = faker.random.number();

    let expected = a - b;
    let difference = arithmetic.subtract(a,b);
    expect(expected).toEqual(difference);
  });

  it('can handle non numbers', () => {
    let a = faker.random.boolean();
    let b = faker.random.image();

    let expected = null;
    let difference = arithmetic.subtract(a,b);
    expect(expected).toEqual(difference);
  });

  it('can handle single parameter input', () => {
    let a = faker.random.number();

    let expected = a;
    let difference = arithmetic.subtract(a);
    expect(expected).toEqual(difference);
  });

  it('defaults to zero with no params', () => {
    let expected = 0;
    let difference = arithmetic.subtract();
    expect(expected).toEqual(difference);
  });

  it('can accept an array', () => {
    let expected = 10;
    let sum = arithmetic.subtract(50, [10,10,10,10]);
    expect(expected).toEqual(sum);
  });

  it('can accept an array with a non number param', () => {
    let expected = null;
    let sum = arithmetic.subtract(null, [10,10,10,10]);
    expect(expected).toEqual(sum);
  });

  it('can accept an empty array', () => {
    let expected = 1;
    let sum = arithmetic.subtract(1, []);
    expect(expected).toEqual(sum);
  });
});

describe('multiply', () => {
  it('multiplies correctly', () => {
    let expected = 90;
    let product = arithmetic.multiply(10,9);
    expect(expected).toEqual(product);
  });

  it('handles single parameter', () => {
    let expected = 10;
    let product = arithmetic.multiply(10);
    expect(expected).toEqual(product);
  });

  it('handles no parameters', () => {
    let expected = 1;
    let product = arithmetic.multiply();
    expect(expected).toEqual(product);
  });

  it('handles non numbers', () => {
    let expected = null;
    let product = arithmetic.multiply(expected,expected);
    expect(expected).toEqual(product);
  });

  it('can accept an array', () => {
    let expected = 16;
    let sum = arithmetic.multiply([2,2,2,2]);
    expect(expected).toEqual(sum);
  });

  it('can accept an array with a non param', () => {
    let expected = 16;
    let sum = arithmetic.multiply([2,2,2,2], {});
    expect(expected).toEqual(sum);
  });

  it('can accept an empty array', () => {
    let expected = null;
    let sum = arithmetic.multiply([], {});
    expect(expected).toEqual(sum);
  });
});

describe('divide', () => {
  it('divides correctly', () => {
    let expected = 10;
    let product = arithmetic.divide(50,5);
    expect(expected).toEqual(product);
  });

  it('handles single parameter', () => {
    let expected = 10;
    let product = arithmetic.divide(10);
    expect(expected).toEqual(product);
  });

  it('handles no parameters', () => {
    let expected = 1;
    let product = arithmetic.divide();
    expect(expected).toEqual(product);
  });

  it('handles non numbers', () => {
    let expected = null;
    let product = arithmetic.divide(expected,expected);
    expect(expected).toEqual(product);
  });

  it('handles zeros for inpit', () => {
    let expected = null;
    let product = arithmetic.divide(10,0);
    expect(expected).toEqual(product);
  });

});