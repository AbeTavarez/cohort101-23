// we can print stuff to the console
console.log("script is running!");

/**
 * this
 * is 
 * a
 * multi-line
 * comment
 */

// ====== Variables ================

var myVariables = "some value"; // string

let num1 = 11; // number (int)

const PI = 3.14; //number (decimal)

let isAdult = true; // boolean

let roomNumber = '205'; // string

let someVar = `hello world!`; // string

let carMilage = 35657; // number

let _favFood = 'pizza'; // string

var var2; // undefined
let var3;
const var4 = 77;

console.log(myVariables);
console.log(num1);
console.log(isAdult);
console.log(var2);

// Global Scope variable
var globalVariable = "you can access from anywhere";
let message = "hello!"

if (true) {
    // block Scope
 var globalVariable = "new value";
 let message = "hello again!"
 console.log(message);
}

console.log(globalVariable);
console.log(message);

// global scope
let x = 10;
let total = 400; // declaration
total = 600; // new value

{
    // block scope
    let x = 100;
    let y = 200;
    console.log(x);
    // let total = 10;
    console.log(total + 100);
}

console.log(x);


const PII = 3.141592653589793;
//PII = 3.14; // This will give an error.



// ==============================================
var counter = 1;
// Do something with this counter.

// Then, some many lines later...
function processData() {
   var counter = 1;
   // Do something with this other counter.
}

// Which counter are we referencing here?
counter++;
console.log(counter);


// Literals

let age = 42
console.log(age);


// ==== typeof keyword

let msg = "hello JS!";
let grade = 85;
let ip = 192.168;
let someVar1; // undefined
someVar1 = "BYE"

let otherVar = null; // typeof === object

console.log(typeof msg);
console.log(typeof grade);
console.log(typeof ip);
console.log(typeof true);
console.log(typeof false);
console.log(typeof someVar1);
console.log(typeof otherVar);