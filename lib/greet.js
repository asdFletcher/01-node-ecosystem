'use strict';

let greeting = module.exports = {};

greeting.greet = function( name='') {
  if (typeof(name) !== 'string'){
    return null;
  }
  let message = 'hello ' + name;
  return message;
};
