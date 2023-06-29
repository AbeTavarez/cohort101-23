let student1 = "Kevin";
let student2 = "Cynthia";
let student3 = "Mahamadou";
let student4 = "Clement";
let student5 = "Benjamin";

console.log(`Welcome ${student1} to the class!`);

//* === Literal Array

const students = [
  "Kevin",
  "Cynthia",
  "Mahamadou",
  "Clement",
  "Benjamin",
  "Rimi",
  "Vanessa",
];

// gets the length of the array
console.log(students.length);

// print arrays in a table
console.table(students);

// access the last element in the array
console.log(students[students.length - 1]);

// Class Constructor function
const nums = Array(2, 4, 6);
console.log(nums);

//  Array with different types
const arrOfStuff = ["Hello", 333, [], {}, true, function () {}];

const student11 = ["john", 22, true];

// array of objects
const data = [
  {
    name: "john",
  },
  {
    name: "john",
  },
];

const movies = ["Caddyshack", "Interstellar", "Scarface", "fast and furious"];

// access element by index
const firstMovie = movies[0];
console.log(firstMovie);

const lastMovie = movies[movies.length - 1];
console.log(lastMovie);

console.table(movies);

// updating a value in the array by the index
movies[1] = "Toy Story";

//* For Loop
for (let i = 0; i < movies.length; i++) {
  // console.log(movies[i]);
}

//* === For of loop
for (let i of movies) {
  console.log(` My favorite movie is ${i}`);
}

console.log("============================================");

//* ============== Array Methods

const yourMovies = ["Caddyshack", "Interstellar", "Scarface"];
const myMovies = ["Batman", "The Count of Monte Cristo", "Shrek"];

// concat()
const ourMovies = yourMovies.concat(myMovies);
console.log(ourMovies);

// making a copy of an array
const copyArr = yourMovies.concat();

console.log(copyArr);
console.log(copyArr === yourMovies);

console.log(yourMovies);

//* push() adds to the end
yourMovies.push("Transformers");
console.table(yourMovies);

//* unshift() adds to the start
yourMovies.unshift("Toy Story");
console.table(yourMovies);

//* pop() removes from the end
let item1 = yourMovies.pop();
console.log(item1);
yourMovies.pop();
console.table(yourMovies);

//* shift() removes from the start
yourMovies.shift();
yourMovies.shift();
console.table(yourMovies);

//* splice()
const favMovies = ["Caddyshack", "Interstellar", "Scarface", "up"];

console.log(favMovies);

// (index to start, number to delete, )
favMovies.splice(1, 0, "Toy Story");

console.log(favMovies);

//* slice

const topTwoMovies = favMovies.slice(0, 2);
console.log(topTwoMovies);

console.log("============================================");

//* ForEach method
const oldMovies = ["Caddyshack", "Interstellar", "Scarface", "Trading Places"];
console.log(oldMovies);

oldMovies.forEach(function (el) {
  console.log(el.toLowerCase());
});

//* ... Spread operator
const juneMovies = ["Spaceballs", "The Sting", "Alien"];

const juneCopy = ["Toy Story", ...juneMovies, "Transformers"];

//* join() returns a single string from the values inside of the array
console.log(juneCopy.join(" "));

console.log("============================================");
//* ============== Nested Arrays ================== //

const numArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log( numArray[2][0] );

let numArray1 = [
	[1, 2, 3],
	[4, 5, 6],
	[
		[7, 8, 9],
		[10, 11, 12],
		[13, 14, 15]
	],
];

console.log(numArray1[2][1][1]);