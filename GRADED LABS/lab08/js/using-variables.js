/* add code below this */

let a1 = 23;
a1 = 50;
console.log(a1);

const a2 = 24;
// a2 = 51;
// this will throw an error, since we cannot re-assign
// the value of a const variable.
console.log(a2);
// const makes it so the contents of variables 
// are immutable(cannot be changed).

let isDifficult = true;
let isNull = null;
let whatIsThis;

console.log(isDifficult);
console.log(isNull);
console.log(whatIsThis);

// console.log(xyz);

// Notice that a defined variable with no content is equal 
// to “undefined”, which is different from the null value. 
// In JavaScript, null is a special value used to indicate 
// a variable with no value; undefined is used to indicate 
// a declared variable hasn’t had a value assigned.  Both 
// null and undefined are different cases than using a 
// variable that hasn’t been defined, which, as this example 
// illustrates, generates a run-time error. 

let foo = "Randy";
console.log(foo);
foo = 99;
console.log(foo);
foo = 'Sue';
console.log(foo);

// Notice that variables can contain different data types over time. 
// Notice also that string literals can use single or double quotes.

foo = "10";
let canYouGuess = a1 + foo;
console.log(typeof foo);
console.log(typeof canYouGuess);
console.log(canYouGuess);

// In JavaScript the + operator means either addition (if data type is 
// number) or concatenation (if one of the data types is string). 
// JavaScript has performed type coercion on a1 and turned it into a string. 

foo = 10;

// Since the type of foo is numeric the + operator here acted as 
// addition rather than concatenation.  

let age = prompt("What is your age?");
let iAge = Number(age);
console.log('age=' + iAge + 'data type=' + typeof iAge);
// when we switch to using iAge, it either contains a number of the special value NaN (not-a-number). 
// This example illustrates the simple prompt() function for retrieving a 
// value from the user. Notice that no matter what you type in, it assumes it is a string. 