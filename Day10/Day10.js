//Day 10 Event Handling

//Tasks/Activities:

//Activity 1: Basic Event Handling

//Task 1: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.getElementById('myButton')
const paragraph = document.getElementById('myParagraph')

button.addEventListener('click', function() {
    paragraph.textContent = 'Text has been changed!'
})

//Task 2: Add a double click listener to an image that toggles its visibility.
const image = document.getElementById('myImage')
image.addEventListener('dblclick', function() {
    if (image.style.display === 'none') {
        image.style.display = 'block'
    } else {
        image.style.display = 'none'
    }
})




//Activity 2: Mouse Events

//Task 3: Add a mouseover event listener to an element that resets its background color.
let element = document.getElementById('myElement')
element.addEventListener('mouseover', function() {
    element.style.backgroundColor = 'lightblue'
})



//Task 4: Add a mouseout event listener to an element that resets its background color.

element = document.getElementById('myElement')
element.addEventListener('mouseout', function() {
    element.style.backgroundColor = 'lightblue'
})



//Activity 3: Keyboard Events

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
let inputField = document.getElementById('myInput')
inputField.addEventListener('keydown', function(event) {
    console.log(`Key pressed: ${event.key}`)
})

//Task 6: Add a keyup event listeneer to an input field tat displays the current value in a paragraph.
inputField = document.getElementById('myInput')
let displayParagraph = document.getElementById('displayParagraph')

inputField.addEventListener('keyup', function() {
    displayParagraph.textContent = 'Current value: ' + inputField.value
})



//Actiivity 4: Form Events

//Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
const form = document.getElementById('myForm')

form.addEventListener('submit', function(event) {
    event.preventDefault()
    
    const formData = new FormData(form)
    
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`)
    })
})



//Task 8: Add a change event listener to a select a dropdown that displays the selected value in a paragraph
const select = document.getElementById('mySelect')
 displayParagraph = document.getElementById('displayParagraph')

select.addEventListener('change', function() {
    displayParagraph.textContent = 'Selected value: ' + select.value
})



//Activity 5: Event Delegration

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.
document.addEventListener('DOMContentLoaded', function() {
    let list = document.getElementById('myList')
    list.addEventListener('click', function(event) {
        if (event.target && event.target.tagName === 'LI') {
            console.log('Clicked list item text:', event.target.textContent)
        }
    })
})



//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('addButton')
    list = document.getElementById('myList')

    addButton.addEventListener('click', function() {
        const newItem = document.createElement('li')
        newItem.textContent = 'New Item ' + (list.children.length + 1)
        
        list.appendChild(newItem)
    })
})
