1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: 

getElementById finds only one element by its id and return a single element. if this id not found then it will return null.

gelElementsByClassName represents a html collection thats find all elements with its className and return the html collection. if it doesn't found with this classname then it will return an empty collection. we can select multiple elements with same className.

querySelector only find the first element by any CSS selector. when we use querySelector it return the first element. 

querySelectorAll represents a NodeList. It find all elements by any CSS selector and return it with a nodeList.It will return all the element. 



2. How do you **create and insert a new element into the DOM**?

Ans:

if we want to create an element at first we have to use  createElement('') function. Inside this first bracket we use what we want to create like div/paragraph/heading etc. we can create multiple elements by using it.
then we have to set the innerText or innerHtml . after that we can insert it into DOM by using appendChild() function.
we call the parent and appendChild with the new element.



3. What is **Event Bubbling** and how does it work?

Ans:

Event Bubbling means when we click any element inside our web page. Then it find the main target and after that it find its own parent . likewise if we click a button it will find the button first then it find the parent of button and then it find parent of the parent. 

we can see a example.
button clicked
div clicked
document clicked.

Bubbling want to find the root. it goes from target to document.



4. What is **Event Delegation** in JavaScript? Why is it useful?

Ans:

Event delegation is a process of event Bubbling . in this process we add one eventListener in parent section. and parent handles all the children events.

 if we add a new child element later it will automatically handled by the parent .for this reason eventDelegation is more useful for us, this makes our work process to easier. we can handle large number of element by using this.


5. What is the difference between **preventDefault() and stopPropagation()** methods?

Ans:

preventDefault() known as a  method of event interface. this method stop the default behavior of the browser. if we create a button and add eventListener to the button after click that the web page will automatically refreshed when we it. if we want to stop its default behavior we have to use.

stopPropagation() is a method that use for stop Bubbling.  it used to stop the parent element from accessing child event. we can understand it with a example. like, i have a button on my div if i clicked the button then it target the button and also it parent. if i want to stop exploring parent div i use stopPropagation() function. this will stop the bubbling and only target the clicked element.

