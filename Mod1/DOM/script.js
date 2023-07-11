

// Selecting an element from the DOM using getElementById()
const h1Element = document.getElementById('title');
console.dir(h1Element);

// query by the id
const h1 = document.querySelector('#title');
console.log(h1);

// query by the class
const h2 = document.querySelector('.next-section');
console.log(h2);

// query by the element name
const h3 = document.querySelector('h3');
console.log(h3);

// query by the element name
const body = document.querySelector('body');
console.log(body);

// returns a list or array like with all the elements
const lis = document.querySelectorAll('li');
console.log(lis);
console.log(lis[0].innerText);