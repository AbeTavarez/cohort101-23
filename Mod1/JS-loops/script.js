//* === Structure of a forLoop =========== //

//* (initialization; condition; incrementor)
for (let counter = 0; counter <= 10; counter++) {
    // console.log(counter);
}

//* Exercise
//* Write a for loop that counts down from 10 to 1.

for (let counter = 10; counter >= 1; counter--) {
    // console.log(counter);
}


for (let i = 2; i <= 10; i+= 2) {
    // console.log(`Counter is ${i}`);
}

//* Exercise
//* Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
for (let x = 1; x <= 9; x ++) {
    // console.log(x);

    if (x === 3) {
        continue
    }

    console.log('Inside the loop');

    if (x === 5) {
        break;
    }
}

//* Exercise
//* create a loop that outputs multiples of 3 starting at 6 ending at 60.
for (let j = 6; j <= 60; j+=3) {
    // console.log(j);
}

// Exercise
// Write a for loop for the given output: ######
let hash = '#';
for(let z = 0; z <= 6; z++) {
    // console.log(hash);
    hash+= '#';
}

//* Print even numbers
//* Using the remainder % operator, write a for loop that iterates between 0 and 10 and prints all even numbers.
for(let r = 0; r <= 10; r++) {
    if (r % 2 === 0){
        console.log(`${r} is an even number.`);
    } else {
        console.log(`${r} is an odd number.`);
    }
}




//* ===== Looping over a string ===== 
console.log("Hello World!".length);

let str = "Hello World!";
// console.log( str[1] );


for (let index = 0; index <= str.length; index++) {
    // console.log( str[index] );
}



//* =========== While Loops =============== //
//* Structure of a while loop
// while(condition){}

let a = 1;
while(a <= 10) {

    if (a % 2 === 0 ) {
        console.log(`${a} is even!`);

    } else {
        console.log(`${a} is odd!`);
    }

    a++;
}