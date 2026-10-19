/* add code below this */

const country = "France";
const capital = "Paris";
const population = 67;

let msg = "The population of " + country + " is " + population + " million.";
console.log(msg);

msg = capital + " is the capital of " + country ;
console.log(msg);
msg += " and has " + population +" mil people.";
console.log(msg);
// Notice the += operator to add a string to an existing string. 

let msg2 = `The population of ${country} is ${population} million.`;
console.log(msg2);
// This example uses template literals, a new feature in ES6. The literal character here is the 
// back-tick (the key to the left of the 1 key on most keyboards) not a single quote. With 
// template literals you can include variable references within the literal, thereby avoiding the 
// concatenation operators. As you can see, these two approaches produce the same output; 
// some programmers prefer concatenation, others prefer template literals