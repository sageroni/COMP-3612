/* add code below this */

const age = 65;
const age2 = "65";

if (age == 65) {
    console.log("You are eligible for retirement.");
} else {
    console.log("You are not eligible for retirement.");
}

if (age == age2) console.log("These two are the same."); 
// This surprisingly displays the “these are the same” message. Why? Since two different data 
// types are being compared, one of the variables is being coerced into a different type to 
// match the comparison variable. 

if (age === age2) console.log("These two should not be equal.")
// The strict equality operator  (===) compares without type coercion; if the types of the two 
// sides of the operator are different, then they are considered unequal.

let userAge = prompt("What is your age?");
let status = (userAge >= 65) ? 'You can retire.' : 'You cannot retire.';
console.log(status);

// This illustrates a ternary operator, which provides a more concise syntax than an 
// if...else block for expressing a conditional that executes a single line of code based on a 
// condition.

let  val1 = 33;
let val2 = 55;
if (val1 > 30 && val2 > 50) console.log("Both are true.");
// This example illustrates a conditional with a logical operator. In this case, && is a Boolean 
// AND

if (val1 > 30 || val2 > 50) console.log("At least one is true.");

// Change the code as follows and test. 
// let val1 = 22; 
// Now the first condition no longer evaluates to true. 