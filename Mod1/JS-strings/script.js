console.log("running");

console.log("Hello" + " World!");
console.log("This is the number " + 5); // type coercion
console.log("Hello" - "JS"); // NaN -> Not A Number

const userName = "Inigo Montoya";
// userName = "Kevin";

userName[6] = "X"; // in-mutable
console.log(userName[6]);

// const a = "a";
// const b = "b";
// console.log(a > b);

console.log("Hey" === "hey");
console.log("Hey" == "hey");

const frost =
  "Nature's first green is gold, " +
  "Her hardest hue to hold. " +
  "Her early leaf's a flower; " +
  "But only so an hour. " +
  "Then leaf subsides to leaf. " +
  "So Eden sank to grief, " +
  "So dawn goes down to day. " +
  "Nothing gold can stay. ";

console.log(frost);

let msg1 = "Hello,";
let msg2 = "JavaScript";
console.log(msg1 + " " + msg2 + "!!!!");

const frost2 =
  "Nature's first green is gold, \
Her hardest hue to hold. \
Her early leaf's a flower; \
But only so an hour. \
Then leaf subsides to leaf. \
So Eden sank to grief, \
So dawn goes down to day. \
Nothing gold can stay.";

console.log(frost2);





// ====
console.log('They said, "this string does not need an escape!"');

console.log('They said, "this string doesn\'t need an escape," but that isn\'t true.');

const frost3 =
"\tNature's first green is gold, \n\
Her hardest hue to hold. \n\
Her early leaf's a flower; \n\
But only so an hour. \n\
Then leaf subsides to leaf. \n\
So Eden sank to grief, \n\
So dawn goes down to day. \n\
Nothing gold can stay.";

console.log(frost3);


const frost4 =
`Nature’s first green is gold,
Her hardest hue to hold.
Her early leaf’s a flower;
But only so an hour.
Then leaf subsides to leaf.
So Eden sank to grief,
So dawn goes down to day.
Nothing gold can stay.`;

console.log(frost4);

const a = 5;
const b = 10;

console.log(`'a' is assigned a value of "${a}," and 'b' is assigned a value of "${b}."
Therefore, 'a' plus 'b' is equal to ${a + b}.`);

// ==== Template Literals
const city = 'NYC';
const population = 5000;
const relocated = 500;

console.log(`Today is ${new Date()}, In the $ city "${city}" we have a population of ${population},
new population is ${population - relocated}.`);

const balance = 2000;
console.log(`Your balance is $${balance}`);

