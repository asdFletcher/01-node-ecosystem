'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function( a=0,b=0 ) {
  if (a instanceof Array) {
    return a.reduce((tot, val) => {
      return tot+=val;
    }, 0);
  }
  if (notNumbers(a,b)) {return null; }
  return a+b;
};

arithmetic.subtract = function( a=0,b=0 ) {
  
  if (b instanceof Array && typeof a === 'number') {
    return b.reduce((tot, val) => {
      return tot-=val;
    }, a);
  }
  if (notNumbers(a,b)) {return null; }
  return a-b;
};

arithmetic.multiply = function( a=1, b=1 ){
  if (a instanceof Array && a.length >= 1) {
    return a.reduce((tot, val) => {
      return tot = tot * val;
    }, 1);
  }
  if (notNumbers(a,b)) {return null; }
  return a*b;
};

arithmetic.divide = function( a=1, b=1 ){
  if (notNumbers(a,b)) {return null; }
  if (a === 0 || b === 0) { return null; }
  return a/b;
};

function notNumbers(a,b){
  if (typeof a !== 'number' || typeof b !== 'number') {
    return true;
  }
  return false;
}

