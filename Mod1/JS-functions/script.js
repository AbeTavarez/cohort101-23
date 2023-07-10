sayHello('Alex');

//* declare a function or function definition

// regular function declaration
function sayHello(name) { // declaring the parameter name
    console.log(`Hello ${name}`);
}


// function expression
const sayBye = function(friend, pet) {
    console.log(`Good Bye my friend ${friend} and his pet ${pet}`);
}

sayBye('John');





let username = 'Clement';

//* call or execute the function
sayHello('John'); // passing the argument of the string 'john'
sayHello(username);

sayHello('Mark');

sayBye('John', 'bolt');


console.log('============================================');

// function add(num1, num2) {
//     if (typeof num1 === 'number' && typeof num2 === 'number') {
//         console.log(num1 + num2);
//     }else {
//         console.log('Arguments needs to be numbers');
//     }

// }

// regular function
function add(num1, num2) {
        console.log(num1 + num2);
}
add(1, 2);

// arrow function
const addTwoNumbers = (num1, num2) => console.log(num1 + num2);
addTwoNumbers(2,2);

// arrow function with no parameters
const sayHelloWorld = () => console.log('Hello World!');

// arrow function with one parameter
const sayHelloAgain = name => console.log(`Hello ${name}`); 
sayHelloAgain('Mark');

console.log('=================================');

//* return keyword

function multiply(num1, num2) {
    return num1 * num2; // returns the value outside of the function
}

const result = multiply(3, 5);
console.log(result);


const subtract = (num1, num2) => num1 - num2;

const total = subtract(10, 5);
console.log(total);


function areBothEven(n1, n2) {
    // console.log( !(n1%2));
    return !(n1 % 2) && !(n2 % 2);
}

const isEven = areBothEven(2, 2);
console.log(isEven);

// return a array
function myArray(n1, n2) {
    let msg = 'this is a string';
    return [n1 + n2, msg];
}

const arr = myArray(3,3);
console.log(arr);

// return an object
function studentInfo(studentName, cohort, age, height) {
    return {
       name: studentName,
       cohort: cohort,
       age,
       height
    }
}

const s1 = studentInfo('John', '101-2023', 22, 6);

console.log(s1);

console.log('===================================');

// arguments array

function getDevObject(name) {
    // new empty array
    const skills = [];

    // loop over the arguments array and push the values to the skills array
    // starting from index 1
    for (let i = 1; i < arguments.length; i++) {
        skills.push(arguments[i])
    }

    // return a new object with the name and the skills array
    return {
        devName: name,
        jobSkills: skills
    }
}

const devObj = getDevObject('maria', 'html', 'css', 'js');

console.log(devObj.devName);
console.log(devObj.jobSkills);



const userInfo = (name, ...details) => {
    console.log('=====>',details);
    return {
        user: name,
        details
    }
}

const u1 = userInfo('john', 23, 'NYC');
console.log(u1);



// default parameters


const myBike = {};


function setColor(bike, color = 'red', size = 20, hasBreaks = true) {
    bike.color = color;
    bike.size = size;
    bike.hasBreaks = hasBreaks;
}

setColor(myBike, 'red', 28); 

console.log(myBike);


let colorsArr = ['red', 'green', 'blue'];

colorsArr.forEach(function(color) {
    console.log(color);
});