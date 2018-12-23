![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Node Ecosystem Lab

### Author: Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/01-node-ecosystem.svg?branch=master)](https://www.travis-ci.com/asdFletcher/01-node-ecosystem)

* [repo](https://github.com/asdFletcher/01-node-ecosystem)
* [travis](https://www.travis-ci.com/asdFletcher/01-node-ecosystem)


### Modules
#### `arithmetic.js`
##### Exported Values and Methods:
* add
* subtract
* multiply
* divide


#### `greet.js`
##### Exported Values and Methods:
* greet

###### `add(a,b) -> a + b`
* Performs addition on a and b input arguments
* Inputs should be 2 arguments
    * If non-number input, returns null
* Can accept 2, 1 or 0 arguments
    * If 1 input argument, returns input argument
    * If 0 input arguments, returns 0

###### `add([a, b, c, ...], [,e]) -> a + b + c + ...`
* Returns the sum of the individual elements of the input array
* Inputs should be 1 arguments
    * If non-array input, and non number input, returns null
* Can accept 1 or 0 arguments
    * If 1 input argument, returns sum of array elements
    * If 0 input arguments, returns 0
* If optional argument e is provided it is included in the sum

###### `subtract(a,b) -> a-b`
* Returns a minus b
* Inputs should be 2 numbers
    * If non-number input, returns null
* Can accept 2, 1 or 0 arguments
    * If 1 input argument, returns input argument
    * If 0 input arguments, returns 0

###### `subtract( a , [b , c , d , ...]) -> a - (b + c + d + ...)`
* Returns a minus all elements in the array
* Inputs should be 1 number and an array of numbers
    * If non-number input, returns null

###### `multiply(a,b) -> a * b`
* Returns the product of a and b
* Inputs should be 2 numbers
    * If non-number input, returns null
* Can accept 2, 1 or 0 arguments
    * If 1 input argument, returns input argument
    * If 0 input arguments, returns 1

###### `multiply([a, b, c, ...]) -> a * b * c * ...`
* Returns the product of the individual elements of the input array
* Input should be 1 array of numbers
    * If non-array input, default behavior

###### `divide(a,b) -> a / b`
* Returns a divided by b
* Inputs should be 2 numbers
    * If non-number input, returns null
* Can accept 2 arguments
    * If 1 input argument, returns null
    * If 0 input arguments, returns null

###### `greet(name) -> 'hello name'`
* takes a name and appends 'hello' to the front of it
* returns 'hello' on empty string
* Can accept 1 or 0 arguments
    * returns null on missing input arguments
