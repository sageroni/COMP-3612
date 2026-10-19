// Modify your results from previous Test Your Knowledge (or create a copy of previous 
// version) and implement the following functionality. 
// 1 Comment out code retrieving and validating bill total from user (we are going to replace 
// user input with data from array) 
// 2 Define an array called billTotals that contains an array of numeric values, e.g. values 
// of 50, 150, 20, 500, etc. 
// 3 Define a new empty array called tips. 
// 4 Loop through the billTotals array. Determine the tip percentage for each number in 
// the billTotals array using this logic: if total > 75 then tip% = 10%, if total between 30 
// and 75 then tip% = 20%, else if total < 30 then tip% = 30% 
// 5 Calculate each tip by multiplying each individual billAmount element by the 
// appropriate tip percentage. 
// 6 Add (push) this tip to the tips array. 
// 7 Once all the tips are calculated, then output to the console each bill total and tip amount 
// on a separate console line (see Figure 8.6); display two decimal digits using toFixed(2). 
// This will require another loop (a for loop) which will iterate through the billTotals 
// array, but reference both billTotals and tips arrays. 

/* add code below this */

const billTotals = new Array(50, 150, 20, 500);

const tips = [];

for (let i=0; i < billTotals.length; i++) {
    if (billTotals[i] > 75) {
        let tip = 0.10;
        let tipamnt = billTotals[i] * tip;
        tips.push(tipamnt);
    }
    if (billTotals[i] >= 30 && billTotals[i] <= 75) {
        let tip = 0.20;
        let tipamnt = billTotals[i] * tip;
        tips.push(tipamnt);
    }
    if (billTotals[i] < 30) {
        let tip = 0.30;
        let tipamnt = billTotals[i] * tip;
        tips.push(tipamnt);
    }
}

for (let i = 0; i < billTotals.length; i++) { 
    console.log("For a bill of $" + billTotals[i] + ", the tip should be $" + tips[i].toFixed(2) + ".");
}