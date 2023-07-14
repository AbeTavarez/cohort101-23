const btn = document.querySelector('button');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

btn.addEventListener('click', function(event) {
    // create a new li
    const li = document.createElement('li');
    // setting the text to the input value
    li.textContent = input.value;
    // appending the new li to the ul element
    ul.appendChild(li);

    input.value = '';
});

// Delegating the UL as the element to listen for a click event
ul.addEventListener('click', function(e) {
    e.preventDefault(); // stops a page from refreshing
    console.log(e);

    // stop the event from propagating up
    e.stopPropagation();
});

document.body.addEventListener('click', function(e) {
    console.log(e);
});

input.addEventListener('keypress', function(e) {
    // console.log(e);
});

// document.body.addEventListener('keyup', function(e) {
//     console.log(e);
// });

document.body.addEventListener('keydown', function(e) {
    console.log(e);
});


function addNewComment(event) {
    // create a new li
    const li = document.createElement('li');
    // setting the text to the input value
    li.textContent = input.value;
    // appending the new li to the ul element
    ul.appendChild(li);

    input.value = '';
}