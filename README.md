1. get elementby id picks the element which has that specific id, getelementsbyclassname selects every elements
2. with the specific class and queryselect picks the first element that has a specific id or class and queryselectorall
3.  does the same but picks every elements sharing an id or class

2.to insert a new element with dom we first use document.createelement(), then this will be the code

const newElement = document.createElement('h1');
// this makes a new h1 tag 
put text in the new element
newElement.textContent ="hey guys"

if i had a div with box id

const boxedDiv = document.getElementById('box')

boxedDiv.appendChild(newElement)

//this will add the new element in the document

3.Event Bubbling is when an event on a child element (like a button click) automatically
moves up and triggers the same event on its parent elements, all the way to the top of the DOM.
It happens from the innermost element outward

4.What is Event Delegation in JavaScript? Why is it useful? give short answer to gie and answer by mouth

5.preventdefault() stops the default action of an element (like a link navigating or form submitting) basically it stops refreshing the page after submit,
while stoppropagation() stops the event from bubbling up (or down) the DOM tree to parent or ancestor elements.

