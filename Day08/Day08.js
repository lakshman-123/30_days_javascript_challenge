//Day 8: ES6+ Features

//Tasks/Activities

//Activity 1: Template Literals

//Task 1: Use template literals to create a string that includes variable for a persons name and age, and log the string to the console.
let name = "John"
let age = 30
let message = `Hello, my name is ${name} and I am ${age} years old.`
console.log(message)


//Task 2: Create a multi-line string using template literals and log it to the console.
let multiLineString = `
This is a multi-line string.
You can write it across multiple lines
without using any concatenation.
It's very useful for creating strings that span
multiple lines in your code.
`

console.log(multiLineString)

//Activity 2: Destructuring

//Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

let numbers = [10, 20, 30, 40, 50]

let [first, second] = numbers

console.log(`First element: ${first}`)
console.log(`Second element: ${second}`)

//Task 4: Use Object destructuting to extract the title and author form a book object and log them to the console.

let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}
  
 
let { title, author } = book
  
 
console.log(`Title: ${title}`)
console.log(`Author: ${author}`)
  
//Activity 3: Spread and Rest Operators

//Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.
let originalArray = [1, 2, 3]
let newArray = [...originalArray, 4, 5, 6]
console.log(newArray)


//Task 6: Use the rest operator in a function to accept an arbitray number of arguments,sum them,and return the result.
// Define a function that uses the rest operator to accept an arbitrary number of arguments
function sum(...numbers) {
 
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}
  
let result = sum(1, 2, 3, 4, 5)
  
console.log(result) 
  

//Activity 4: Default Parameters

//Task 7: Write a funciton that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
// Define the function with two parameters, the second having a default value of 1
function multiply(a, b = 1) {
    return a * b
}
  

let resultWithBothParams = multiply(5, 2)
  
let resultWithOneParam = multiply(5)
  
console.log(`Result with both parameters: ${resultWithBothParams}`)
console.log(`Result with one parameter: ${resultWithOneParam}`)
  



//Activity 5: Enchanced Object Literals

//Task 8: Use enhanced object literals to create an object with methods and properties,and log the object to the console.
// Define variables to be used as properties
name = "Alice"
age = 25

let person = {
  name, 
  age,  
  greet() { 
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`)
  },
  updateAge(newAge) { 
    this.age = newAge
  }
}

console.log(person)

person.greet()
person.updateAge(26)
console.log(`Updated age: ${person.age}`)

//Task 9: Create an object with computed property names based with methods and properties, and log the object to the console.
let propName1 = 'firstName'
let propName2 = 'lastName'
let methodName = 'sayHello'

person = {
  [propName1]: 'John',
  [propName2]: 'Doe',
  [methodName]() {
    console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`)
  }
}


console.log(person)

person.sayHello()

