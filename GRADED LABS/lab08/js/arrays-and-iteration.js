/* add code below this */

const days = new Array("Mon","Tues","Wed","Thur","Fri"); 
const months = ['jan','feb','mar']; 
const years = []; 
years[0]=1999; 
years[1]=2000; 
 
console.log(days); 
console.log(months); 
console.log(years);
// This illustrates three different ways of creating and populating arrays in JavaScript. 

// Arrays are actually objects in JavaScript, meaning they have many properties and 
// methods that you can invoke. For instance, add the following and test. 
console.log(months.length); 
days.push("Sat"); 
days.unshift("Sun"); 
console.log(days); 
months.pop(); 
console.log(months); 
// The push() method adds a new element to the end of the array, unshift() adds an 
// element to the front of an array, while pop() removes the last element 

// To iterate through the contents of an array, the classic approach is to use the for loop. 
// Add the following loop and test.  
for (let i=0; i < days.length; i++) { 
    console.log('index=' + i + ' value=' + days[i]) 
} 
// Notice the let: you could have used var as well. The advantage of let is that the variable 
// becomes block scoped, meaning it’s only available within the loop block. 

// More recent versions of JavaScript provide an alternative syntax for looping through an 
// array called the for-of loop. Add this loop and test. 
for (let mon of months) { 
    console.log(mon); 
} 
// The traditional for equivalent of this for-of loop would be: 
// for (let i=0; i < months.length; i++) {
//      let mon = months[i];     
//      console.log(mon); 
// } 