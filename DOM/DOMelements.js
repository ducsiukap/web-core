// 1. Accessing element
// 1.1 walk dom hierarchy (not recommended): 
// let ctn = document.body.firstChild.nextSibling; // div
// 1.2 lookup element
//  by id:
const ctn = document.getElementById('container');
//  by tag name: getElementsByTagName('tag') -> list
//  by class name: getElementByClassName('className') -> list
//  querySelector: .querySelector('selector') 
//      selector: 'tag', '.class', '#id' => CSS selector
//  querySelectorAll: .querySelectorAll('selector') -> list
console.log(ctn);

// 2. change element
let e = ctn.querySelector('ul');
//  2.1 change content:
//  .innerText : only text inside element (displayable element - display != none).
//  .textContent: only text inside element (all element)
//  .innerHTML: HTML content inside element
console.log(e.innerHTML);
//  2.2 change attribute
//  .setAttribute('attribute', value)
console.log(e.style.fontSize ? e.style.fontSize : "null");
e.setAttribute('style', 'font-size: 30px')
console.log(e.style.fontSize);
//  .removeAttribute('attribute'), .getAttribute('attribute')
//  or directly change attribute: e.attribute.subattribute... = value
e.style.color = 'green';

// 3. Change the node structure
// 3.1 add new node
console.log(e.querySelectorAll('li'));
// create new li
const li = document.createElement('li'); // li li li
li.innerHTML = '<i>This line was created with <b>JS DOM</b></i>'
e.appendChild(li); // at end
console.log(e.querySelectorAll('li')) // li li li li
// e.append(childs) // add some childs
// e.insertBefore(newNode, childNodeOfe)
// 3.2 remove a node:
const helloWorld = ctn.querySelector('p') // first p met.
// helloWorld.remove() // un-comment this line to remove "Hello World!"

// 4. Communicating with user
//  console.log(message)  -> open deverloper tools to watch
alert('ec ec ec ec =)))')
confirm('abc?')
//  alert, confirm always run first!