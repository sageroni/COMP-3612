// Provide a prompt to the user to enter a bill total. 
// 2 Convert this user input to a number. Don’t worry about error handling for non-numbers. 
// Assume the inputted number will be above zero.  
// 3 Calculate the tip amount assuming 10%. Use a const to define the 10% tip percentage. 
// 4 Display the bill total and tip amount on the same console output line, e.g. 
// For bill of $20 the tip should be $2 
// Don’t worry about decimal formatting here.

/* add code below this */

let bill = prompt("Please enter how much your bill was: ");

let iBill = Number(bill);


const tip = 0.10;

let tipamnt = iBill * tip;
if (Number.isNaN(iBill) || iBill < 0)
    console.error("Your input must be greater than zero & a valid number.");
else 
    console.log("For bill of $" + iBill + "the tip should be $" + tipamnt);