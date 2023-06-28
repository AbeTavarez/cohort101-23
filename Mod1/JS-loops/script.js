
// === Structure of a forLoop =========== //

// (initialization; condition; incrementor)
for (let counter = 10; counter >= 1; counter--) {
    // console.log(counter);
}


for (let i = 2; i <= 10; i+= 2) {
    // console.log(`Counter is ${i}`);
}

// Write a for loop for the given output: 1, 3, 5, 7, 9 2, 4, 6, 8, 10
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


console.log("Hello World!".length);

let str = "Hello World!";
// console.log( str[1] );



for (let index = 0; index <= str.length; index++) {
    // console.log( str[index] );
}



// =========== While Loops =============== //
let a = 1;


while(a <= 10) {

    if (a % 2 === 0 ) {
        console.log(`${a} is even!`);

    } else {
        console.log(`${a} is odd!`);
    }

    a++;
}