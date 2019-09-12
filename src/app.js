/*
function Person(name) {
  this.name = name;
}

var n = Person('pete');
console.log(name);

const _ = require('lodash')

const main = () => {
  console.log(_.random())
}

main()
*/
/*
import * as lib from './lib'

console.log(lib.sum(2, 2));
console.log(lib.subtract(2, 2));
console.log(lib.divide(2, 2));
*/
import _ from 'lodash'
console.log(_.random())

import { subtract, sum } from './lib' // tree shake*
//const { subtract, sum } = require('./lib') // require extra config to treeshake

console.log(sum(1, 2))
console.log(subtract(1, 2))

import Dog from './dog'
const myDog = new Dog('echo');
myDog.bark();
