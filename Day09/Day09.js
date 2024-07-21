//Day 9: Dom Manipulation

//Tasks/Activities

//Activity 1: Selecting and Manipulating Elements

//Task 1: Select an HTML element by its ID and change its text content.
var element = document.getElementById('myParagraph')
element.textContent = 'This is the new text.'

//Task 2: Select an HTML element by its class and changes its background color.
var elements = document.getElementsByClassName('myClass')

for (var i = 0 ;i < elements.length ;i++) {
    elements[i].style.backgroundColor = 'blue'
}


//Activity 2: Creating and Appending Elements

//Task 3: Create a new div element with some text content and append it to the body.
var newDiv = document.createElement('div')

newDiv.textContent = 'This is a new div element added to the body.'

document.body.appendChild(newDiv)


//Task 4: Create a new li element and add it to an exisiting ul list.
var newLi = document.createElement('li')
newLi.textContent = 'New Item'
var ul = document.getElementById('myList')
ul.appendChild(newLi)





//Activity 3: Removing Elements

//Task 5: Select an HTML element and remove it from the DOM.

var elementToRemove = document.getElementById('myParagraph')

if (elementToRemove) {
    elementToRemove.remove()
}

//Task 6: Remove the last child of a specific HTML element.
var parentElement = document.getElementById('myList')

if (parentElement && parentElement.lastElementChild) {
    parentElement.removeChild(parentElement.lastElementChild)
}

//Activity 4: Modifying Attributes and Classes

//Task 7: Select an HTML elements and change one of its attributes(e.g, src of an img tag)
var imageElement = document.getElementById('myImage')

if (imageElement) {
    imageElement.setAttribute('src', 'new_image.jpg')
}
//Task 8: Add and remove a CSS class to/from an HTML element.
var paragraph = document.getElementById('myParagraph')
var toggleButton = document.getElementById('toggleClassButton')

paragraph.classList.add('highlight')
paragraph.classList.remove('highlight')

toggleButton.addEventListener('click', function() {
    paragraph.classList.toggle('highlight')
})

//Activity 5: Event Handling

//Task 9: Add a click event listener to a button that changes the text content of a paragraph.
var button = document.getElementById('changeTextButton')
var paragraph = document.getElementById('myParagraph')

button.addEventListener('click', function() {
    paragraph.textContent = 'The text has been changed!'
})

//Task 10: Add a mouseover event listener to an element that changes its border color.
var hoverElement = document.getElementById('hoverElement')

hoverElement.addEventListener('mouseover', function() {
    hoverElement.style.borderColor = 'red'
})

hoverElement.addEventListener('mouseout', function() {
    hoverElement.style.borderColor = 'black'
})


