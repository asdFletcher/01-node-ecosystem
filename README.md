![CF](http://i.imgur.com/7v5ASc8.png) LAB
=================================================

## Node Ecosystem Lab

### Author: Fletcher LaRue

### Links and Resources

[![Build Status](https://www.travis-ci.com/asdFletcher/01-node-ecosystem.svg?branch=master)](https://www.travis-ci.com/asdFletcher/01-node-ecosystem)

* [repo](https://github.com/asdFletcher/01-node-ecosystem)
* [travis](https://www.travis-ci.com/asdFletcher/01-node-ecosystem)
* [heroku](https://lab01-401.herokuapp.com/)


### Modules
#### `arithmetic.js`
##### Exported Values and Methods:
* add
* subtract

#### `greet.js`
##### Exported Values and Methods:
* greet

###### `add(a,b) -> a+b`
###### `subtract(a,b) -> a-b`
* Performs aritmetic on a and b input arguments
* Inputs should be 2 numbers
    * If non-number input, returns null
* Can accept 2, 1 or 0 arguments
    * If 1 input argument, returns input argument
    * If 0 input arguments, returns 0


###### `greet(name) -> 'hello name'`
* takes a name and appends 'hello' to the front of it
* returns 'hello' on empty string
* Can accept 1 or 0 arguments
    * returns null on missing input arguments

### Setup
#### `.env` requirements
* `PORT` - Port Number
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
* `npm start`
* Endpoint: `/foo/bar/`
  * Returns a JSON object with abc in it.
* Endpoint: `/bing/zing/`
  * Returns a JSON object with xyz in it.

#### Tests
* How do you run tests?
* What assertions were made?
* What assertions need to be / should be made?

#### UML
Link to an image of the UML for your application and response to events