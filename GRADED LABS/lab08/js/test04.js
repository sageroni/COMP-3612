
// convert comma-separated values into an array
const countries = csv.split(',');

// convert array into delimited string
const countriesDelimited = countries.join(',');

// check if these are arrays
console.log("Is csv an actual array? " + Array.isArray(csv));
console.log("Is countries an actual array? " + Array.isArray(countries));

//  sort a simple array 
countries.sort();
console.log(countries);

// reverse the sort
countries.reverse();
console.log(countries);

// remove the first element
countries.shift();
console.log(countries);

// remove the last element
countries.pop();
console.log(countries);

// add new elements to the front of the array
countries.unshift('Nicaragua','Malta');
console.log(countries);

// search for element
let isGermanyReal = countries.includes('Germany');
console.log(isGermanyReal);
// search for element index
let germanyIndex = countries.indexOf('Germany');
console.log(germanyIndex);

// make a new array by extracting from another array
const countries2 = countries.toSpliced(1, 0, 'Bolivia');
console.log(countries2);

console.log('---------------------');

// there are other array methods which you will learn in Ch 10 */


// use a loop to output all cities whose continent=="NA"
for (let city of cities) {
   if(city.continent === "NA") {
      console.log(city.city);
   }
}
console.log('---------------------');

// use a loop to output gallery names whose country=="USA"
for (let gallery of galleries) {
   if (gallery.location.country === "USA") {
      console.log(gallery.name);
   }
}

console.log('---------------------');

// convert JSON colorsAsString to js object
let jsLiteralObject = JSON.parse(colorsAsString);

// use a loop to output color name if luminance < 75
for (let highLum of jsLiteralObject) {
   if (highLum.luminance < 75) {
      console.log(highLum.name);
   }
}
// this will not work if you use colorsAsString instead of jsLiteralObject.

console.log('---------------------');

// use two nested loops - outer: loop thru colors
for (let i = 0; i < jsLiteralObject.length; i++) {
   let rgbSum = 0;
   let currentColour = jsLiteralObject[i];

   for (let k = 0; k < currentColour.rgb.length; k++) {
      rgbSum += currentColour.rgb[k];
   }
   console.log("The color name is " + currentColour.name + " and the sum of the rgb array is " + rgbSum);
}

// for (let i = 0; i < colorsAsString.length; i++) { 
//    let rgbArray = []; 
//       for (let rgbSum of colorsAsString.rgb) { 
//          let noCommaRGB = colorsAsString.rgb.split[i](','); 
//          let rgbSummedUp = noCommaRGB++; 
//          rgbArray.push(rgbSummedUp); 
//       } 
//       console.log("The color name is " + colorsAsString.name[i] + " and the sum of the rgb array is " + rgbArray[i]); }
// this was my old solution. i checked mozilla and the terrible gemini overview, and realized i was overcomplicating it. 
console.log('---------------------');

/* use a loop output using document.write a unordered
   list of links to the galleries in the galleries array.
   Make the label of the link the name property, and the href
   the url property */


document.write("this text was written from JS");

document.write("<ul>");
for (let i = 0; i < galleries.length; i++) {
      let currentName = galleries[i];
      let currentURL = galleries[i];
   document.write('<li><a href = "' + currentURL.url + '">' + currentName.name +  '</a></li>');
}
document.write("</ul>");

// this was really hard for me. i had a huge problem with getting the 
// names to show up properly, instead of as "object Object". 
// i then remembered i ahd the same issue with the nested for loop for colours
// and their RGB sum, so i copied over what I did from there. 


/* use a loop output using document.write an unordered
   list of color names in the colors array.
   Set the style property of each <li> as follows: 
   1. set the background color to the values in the rgb array using the CSS 
      rgb() function.  This make the background color of the item the same
      as the color name.
   2. Set the text color to white if the luminosity is less than 75. This will 
    make the text color white for the darker colors.  */

document.write("<ul>");

for (let i = 0; i < jsLiteralObject.length; i++) {
   let currentColour = jsLiteralObject[i];

   // i did it this way so it would be less taxing to iterate through all of them. finally done!
   let name = currentColour.name;
   let rgb = currentColour.rgb;
   let colourLuminance = currentColour.luminance;
      
   let backgroundColourString = "rgb(" + rgb[0] + "," + rgb[1] + "," + rgb[2] + ")";

   let textColour = "#000000";
   if (colourLuminance < 75) {
      textColour = "#FFFFFF";
   }

   let uniqueStyleAttribute = 'style="background-color: ' + backgroundColourString + '; color: ' + textColour + ';"';
   // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
   document.write('<li ' + uniqueStyleAttribute + '>' + name + '</li>');
}
document.write("</ul>");