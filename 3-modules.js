// CommonJs , every file is module(by default)
// Modules - Encapsulated Code(only share minimum) only sharing what we want


const names = require('./4-names')
// importing as object
const sayHi = require('./5-utils')
// importing as function

const data  = require('./6-alternative-flavor')
console.log(data);

require('./7-mind-grenade')


sayHi('sarthak');
sayHi(names.tanishk);
sayHi(names.vibhor)