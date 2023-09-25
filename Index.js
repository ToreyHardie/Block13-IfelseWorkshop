/* Its Truthy

Is Truthy
Using if/else statements, create a JavaScript code in a script tag that follows the following rules:

If the value is truthy, print true;
If the value is falsy, print the corresponding result:
"The boolean value false is falsy";
"The null value is falsy";
"undefined is falsy";
"The number 0 is falsy (the only falsy number)"; 
"The empty string is falsy (the only falsy string)"; 

***********************************************************
Declare a variable, let the output depend on what is put into the variable and display the result
Test against the declared variable

Define a variable: 
If the variable is true print true, if false its falsy, if null, is faulsy, etc */

let Tru = "" //declare variable

if (Tru === "I am a string"){ //if this is the value that is put into the variable display true - repeat
    console.log("true")
} else if (Tru === "false"){
    console.log("The boolean value false is falsy")
} else if (Tru === "null"){
    console.log("The null value is falsy")    
} else if (Tru === "undefined"){
    console.log("undefined is falsy")    
} else if (Tru === "0"){
    console.log("The number 0 is falsy (the only falsy number)")    
} else if (Tru === "") {
    console.log("The empty string is falsy (the only falsy string)")    
}

/* 

GreaterthanFive

Using if/else if/else statements, JavaScript code in a script tag that takes the sum of two numbers and prints the corresponding result:

sum + " is less than -1000";
sum + " is a negative number";
sum + " is equal to 0";
sum + " is larger than 0";
sum + " is greater than 100";
Values to test:
num1	num2	Expected Print
50	51	"101 is greater than 100"
99	-2	"97 is greater than 0"
0	101	"101 is greater than 100"
500	-500	"0 is equal to 0"
-1000	0	"-1000 is a negative number"
-5	0	"-5 is a negative number"


If sum then print condition

If number 1 + Number 2 = the sum of the numbers print the required dialog.
add another variable to house the output?

/*if (num1 + num2 > 100){
    console.log(sum + " is greater than 100")
} else if (num1 + num2) {
 console.log("It works")
}*/

let num1 = -5;
let num2 = 0;
let sum = num1+num2;

if (sum < -1000){
    console.log(sum + " is less than -1000")
 } else if (sum < 0){
    console.log(sum + " is a negative number")
 } else if (sum === 0){
    console.log(sum + " is equal to 0")
 } else if (sum > 100){
    console.log(sum + " is greater than 100")
 } else if (sum > 0){
    console.log(sum + " is larger than 0")
 }

/*

Pair and Compare
Using if/else statements and strict equality operators, JavaScript code in a script tag that compares two sets of two values. Print true if at least one of the pairs is truthy.

Values to test:

param1A	param1B	param2A	param2B	Expected Print
"cat"	"cat"	6	"6"	true
"five"	5	"dog"	"dawg"	false
0	false	"horse"	"horse"	true
"eight"	"eight"	"ate"	"ate"	true
11	"eleven"	"four"	"for"	false
"cake"	"cake"	"pie"	"pie"	true

If two of the pairs are equal to true, print true - otherwise print false
Not sure how to put the variables together to be tested together in the if, then statement
Could create a function, but it is not a part of the assignment.


let param1A = 0;
let param1B = 5;
let param2A = "dog";
let param2B = "dawg";


if (param1A, param1B, param2A, param2B === 0 || false){
    console.log("false")
} else {
    console.log("true")
}

*/

let param1A = "cat";
let param1B = "cat";
let param2A = 6;
let param2B = "6";

if (param1A || param1B || param2A || param2B) {
    console.log("true");
} else {
    console.log("false");
}
