/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

//If it's assumed that we want to perform the equation 5-2 and get the correct result, that does happen. However, we see
//that it's because of the implicitly converted "5", which is a string. What we could do is use the number method
//to make 5 a number. This will give us the same print out, but the number conversion is correct.
let result = Number("5") - 2;
console.log("The result is: " + result);


//The issue here is that if we want this to be false, we need to make the isValid a falsy value, not a truthy value.
//We could do this by changing the boolean to a falsy value like 0 or null, or we could re-assign the variable to be "false".
//I didn't change anything here because I wasn't sure what the original developer intended. If the idea is to have the program
//run without changing the variable itself, then it does work this way by casting the string as a boolean.
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}


// I added the Number() method to the age variable, so that we convert the string to a number. This allows for proper arithimatic instead of string concatination.
let age = Number("25");
console.log(typeof age);
let totalAge = age + 5;
console.log("Total Age: " + totalAge);


/* When run the very first time, the result was:
The result is: 3
This is valid!
Total Age: 255
*/

//These are my own examples.
//Implicit conversion of a string to a boolean
//Truthy example
if("hello") {
  console.log("This is valid!");

}
//Falsy example
if(NaN) {
  console.log("This is valid!")
}

//Explicit examples
//converting a string to a number
let sum = Number("11")+5;
console.log("The total is: " + sum);