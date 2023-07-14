
const propBtn = document.getElementById('prop-btn');
const methodBtn = document.querySelector('#method-btn');

// registers a function to the onclick event
propBtn.onclick = print;





function print() {
    console.log('Button was clicked!');
}



// Method: register a function to the selected element
// methodBtn.addEventListener('click', print);

methodBtn.addEventListener('mousedown', function() {
    console.log('Mouse Down Event');
});

methodBtn.addEventListener('mousemove', function() {
    console.log('Mouse is moving....');
});

methodBtn.addEventListener('mouseup', function() {
    console.log('Mouse Up Event');
});