'use strict';

const greeting = require('../lib/greet.js');
const faker = require('faker');

describe('greet module', () => {

  it('can append hello to a string', () => {
    let randomString = faker.random.words();

    let message = greeting.greet(randomString);
    let expected = 'hello ' + randomString;
    expect(expected).toEqual(message);
  });

  it('can handle an empty string', () => {
    let message = greeting.greet('');
    let expected = 'hello ';
    expect(expected).toEqual(message);
  });

  it('can handle a no param call', () => {
    let message = greeting.greet();
    let expected = 'hello ';
    expect(expected).toEqual(message);
  });

  it('can handle a non-string call', () => {
    let nonString = faker.random.boolean();

    let message = greeting.greet(nonString);
    let expected = null;
    expect(expected).toEqual(message);
  });

  it('can handle standard input', () => {
    let input = 'world';

    let message = greeting.greet(input);
    let expected = 'hello world';
    expect(expected).toEqual(message);
  });

});