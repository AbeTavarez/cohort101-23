

// Selecting an element from the DOM using getElementById()
const h1Element = document.getElementById('title');
console.dir(h1Element);

// query by the id
const h1 = document.querySelector('#title');
console.log(h1);

// query by the class
const h2 = document.querySelector('.next-section');

// h2.textContent = "Manipulating Elements";
console.log(h2.textContent);

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


const p = document.querySelector('p');
console.log(p.textContent);
console.log(p.innerHTML);

// Returns a NodeList collection
const allPTags = document.querySelectorAll('p');
console.log(allPTags);

// loop over the NodeList using forEach
allPTags.forEach(p => console.log(p));

// returns the element by the index
allPTags.item(0);

const pTagWithDiv = document.querySelector('div > p');
console.log(pTagWithDiv.textContent);

//* Changing the textContent and inner HTML
const pComments = document.querySelector('#comments');
console.log(pComments);

// set the literal text and will not parse the HTML
pComments.textContent = 'Comments for <strong>Today</strong>'

// will set any HTML in the text as HTML
pComments.innerHTML = 'Comments for <strong>Today</strong>';


//* Changing the CSS of an Element
h1Element.style.backgroundColor = 'red';
h1Element.style.textAlign = 'center';
h1Element.style.color = '#fff';

// Change another element
p.style.backgroundColor = '#BADA55';
p.style.fontSize = '30px';
p.style.padding = '5px';

// ul Element
const ul = document.querySelector('ul');
ul.style.background = 'purple';
ul.style.padding = '10px';


//* Getting and Setting Attributes
const a = document.querySelector('a');
console.log(a);

// checks if element has a attribute and returns an boolean 
console.log(a.hasAttribute('target'));

// returns the attribute value
const href = a.getAttribute('href');
console.log(href);

// set a new attribute on the element
a.setAttribute('id', 'special-link');

a.setAttribute('data-index', 0);

//* ==== Navigating between elements
const head = document.querySelector('head')

// nextElementSibling return the next element sibling
console.log(head.nextElementSibling);

// counts the white spaces as a sibling or (Child Node) 
console.log(head.nextSibling);

console.log(ul.previousElementSibling);

// Parent Element or Parent Node
console.log(ul.parentElement);
console.log(ul.parentNode);

//! === HTMLCollection returns a Live Collection
console.log(ul.children[1]);

//? === NodeList returns the static or original value
console.log(ul.childNodes[1]);

// firstChild
console.log(ul.firstChild);
console.log(ul.firstElementChild);

// last child
console.log(ul.lastChild);
console.log(ul.lastElementChild);

// Saving the reference to an element
const middleChild = ul.firstElementChild.nextElementSibling;
middleChild.textContent = 'I get all the love!';

//* Practice
const googleA = document.querySelector('#google');
console.log(googleA);
googleA.setAttribute('href', 'http://google.com');
googleA.setAttribute('target', '_blank');

//* === Creating and Appending Elements
// grab an element
const footer = document.querySelector('footer');

// create a new ul element
const linksUl = document.createElement('ul');
// create new li 
const firstLi = document.createElement('li');
firstLi.textContent = 'First LI';

// append the LI to the UL element
linksUl.appendChild(firstLi);

// append the UL to the Footer
footer.appendChild(linksUl);

//* ==== Remove an Element
const ol = document.querySelector('ol');

//? getting a live HTML collection
const liveLis = document.getElementsByTagName('li');
console.log(liveLis);

for (let li of liveLis) {
    console.log(li.textContent);
}

// removes the element
const removedElement = ol.firstElementChild.nextElementSibling.remove();

//* Using a while loop
// removes and returns the element
while(ol.firstElementChild) {
    const removedChild = ol.removeChild(ol.firstElementChild);
    console.log('The removed child ---> ', removedChild);
}

// removes the last child
// ol.removeChild(ol.lastElementChild);
console.log(ol);

//* === ClassList methods

// add a class
footer.classList.add('footer-main');

// check if an element contains a class
console.log(footer.classList.contains('footer-main'));

// remove an class
footer.classList.remove('footer-main');
console.log(footer.classList.contains('footer-main'));

footer.classList.toggle('footer-main');
// footer.classList.toggle('footer-main');

// replace a class
footer.classList.replace('footer-main', 'footer-space');

console.log(footer.classList);

