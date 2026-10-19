// define functions in this file

const stock1 = { 
   symbol: "AAPL", 
   name: "Apple Inc.", 
   prices: [ 200, 198, 202, 197, 203 ], 
   location: { 
      address: "One Apple Park Way", 
      city: "Cupertino" 
   } 
} 
console.log(`${stock1.name} Address:  
    ${stock1.location.address}`); 
// Object literal form is typically used when creating 
// objects. Note that an object can contain 
// arrays and other objects.

const stock2 = {}; 
stock2.symbol = "ADBE"; 
stock2.price = 268.81; 
console.log(`${stock2.symbol} Open: ${stock2.price}`); 
// You can dynamically add properties to any object.

console.log(stock1); 
console.log(stock1['name']); 
console.log(stock1['location'].address); 
console.log(stock1['location']['city']); 
// This demonstrates the alternative to dot notation for accessing object properties. 

// for (let i=0; i< stock1.prices.length; i++) { 
//    console.log("These are the stock prices in order: " + stock1.prices[i] + "this is stock #" + (i + 1)); 
// } 
// i added the stokc prices in order portion myself.
// This demonstrates how to iterate through an object property that is an array. 

// Comment out the loop in the previous step and replace with the following for..of 
// loop. 
for (let p of stock1.prices) { 
   console.log(p); 
} 
// 6 Add the following and test.  
// for (let property in stock1) { 
//    console.log(property); 
// } 
// The for..in loop iterates through the properties of an object; for..of is much more 
// useful, as it allows you to iterate through an array.

for (let property in stock1) {
    let value = stock1[property];
    console.log(property + "=" + value); 
} 
// Notice how this example code makes use of the non-dot notation approach from step 3.  

const someStocks = [ stock1, stock2 ]; 
// 1. for (let i=0; i<someStocks.length; i++) { 
//    console.log(someStocks[i].symbol); 
// } 
// In this case, the array of objects is constructed using objects defined in the last exercise. 

// 2. Comment out the loop in the previous step and replace with the following for..of 
// loop. 
for (let ss of someStocks) { 
   console.log(ss.symbol); 
}

// 1. and 2. show two different ways to iterate through and display the symbols. 

const portfolio = [ 
   {  symbol: "AAPL", price: 200, quantity: 20  }, 
   {  symbol: "ADBE", price: 260, quantity: 10  }, 
   {  symbol: "GOOG", price: 1200, quantity: 5  }    
]; 
// 4 Add the following loop and test. 
for (let item of portfolio) { 
   let worth = item.price * item.quantity; 
   console.log("The worth of this item in the portfolio is: " + `${item.symbol} = $${worth}`+ "."); 
}