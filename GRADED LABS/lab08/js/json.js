/* code goes here */

console.log(content[0].title); 
console.log(typeof content); 
// Notice that the first line will result in undefined. 
// Why? Because content is a string not an object. 

const photos = JSON.parse(content); 
console.log(typeof photos); 
console.log(photos[0].title); 
console.log(photos); 
// The first line turns the JSON string into a regular JavaScript object whose properties can be 
// accessed using normal dot notation. 