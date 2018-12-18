'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(a=0,b=0) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a+b;
};

arithmetic.subtract = function (a=0,b=0) {
  if( typeof a !== 'number' || typeof b !== 'number' ) { return null; }
  return a-b;
};

