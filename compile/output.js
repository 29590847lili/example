"use strict";

require("core-js/modules/es.array.includes.js");

// import '@babel/polyfill'
var func = function func() {
  return console.log('hello es6');
};

var _a = {
  a: "this.a"
},
    a = _a.a,
    _a$b = _a.b,
    b = _a$b === void 0 ? 1 : _a$b;
var array = [1, 2, 3];
console.log(array.includes(2));
