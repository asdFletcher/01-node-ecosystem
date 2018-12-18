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

});


// subtract
describe('adder module', () => { 
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
});