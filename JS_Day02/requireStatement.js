/*
require: plays role of import statement in java


*/

//absolute path
//var logIn = require("/Users/sheeraz/Desktop/JavaScript2020 /JS_Day02/Pages/LoginPage.js");

//relative path
var logIn = require("../JS_Day02/Pages/LoginPage.js");

console.log(logIn.username);
console.log(logIn.password);