// // global or outer scope
// let x = 10;
// let y = 5;
// var pollution = 'sucks'

// {
//     // local or inner scope
//     let z = x + y;
//     console.log(z);
// }

// {
//     var x = 1;
//     {
//       var x = 2;  // same variable!
//       console.log(x);  // 2
//     }
//     console.log(x);  // 2
// }

let num = 33;

{
  let num = 20;
  console.log(num);
  {
    let num = 100;
    console.log(num);
  }
}

console.log(num);

// // global
//  let x = 10;

// {
//     // middle
// 	let y = 5;
// 	{
//         // inner
// 		let z = x + y;
// 		console.log(z);
// 	}
// }

// global
// let x = 10;

// {
//     // middle
// 	let y = 5;
// 	{
//         // inner
// 		let z = x + y;
//         console.log(z);
// 	}

// }

// let x = 0;

// if (x > 0) {
// 	console.log('Positive!');
//     x++;

// } else {
// 	console.log('Negative.');
// }

let price = 5;

if (typeof price === "undefined" || typeof price === null) {
  console.log("No Value");
} else {
  console.log("We have a value");
}

// =====

// if (age >= 18) {
//     console.log('Access Granted!');

//     if (age >= 30) {
//         console.log('You get admin access!');
//     } else {
//         console.log('Normal user');
//     }

// } else {
//     console.log('Access Denied!');
// }

let age = 60;
let userName = "alex";

if (age >= 18 && age <= 29) {
  console.log("Access Granted!");
} else if (age >= 30 && age < 60) {
  console.log("You get admin access!");
} else if (age >= 60 && userName === "alex") {
  console.log("You get special access!");
} else {
  console.log("Access Denied!");
}

// === Switch

let x = 4;

switch (x) {
  case "UpArrow":
    console.log("X is 0");
    break;

  case "DownArrow":
    console.log("X is 1");
    break;

  case "Enter":
    console.log("X is 2");
    break;

  default:
    console.log("Input is incorrect!");
}


let z = 5;
let y = 4;

let operand = "*";

switch (operand) {
   case "+":
       console.log(z + y);
       break;
   case "-":
       console.log(z - y);
       break;
   case "*":
       console.log(z * y);
       break
   case "/":
       console.log(z / y);
       break;
   default:
       console.log("Invalid Operand")
       break;
}


// ======== ternary

let user;

user ? console.log(`Welcome ${user}`) : console.log("Don't know who you're!");

let a = 4;
// (condition) ?  'expression' : 'expression'
(a % 2 === 0) ? console.log(`${a} is even.`) : console.log(`${a} is odd.`);