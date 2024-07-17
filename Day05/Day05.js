// Day 5: Functions

//Tasks/Activities:

// Activity 1:Function Declaration

// Task 1: write a function to check if a number is even or odd and log the result

function evenOrOdd() {
    let num=prompt("Enter the number")
    if ((num%2) == 0) {
        console.log("Even")
    }
    else{
        console.log("Odd")
    }
  }
  evenOrOdd()

// Task 2: write a function  to calculate the square of a number adn return the result

let num=prompt("Enter the number")
function square(num) {
    return num * num
  }
console.log(square(num))

// Activity 2:Function Expression
 
// Task 3: write a function expression to find the maximum of two number and log the result
let a=prompt("Enter the first number")
let b=prompt("Enter the second number")
const maximumOfTwoNumbers=function(a,b) {
    if (a>=b) {
        console.log(`${a} is highest number`)
    }
    else {
        console.log(`${b} is highest number`)
    }
}
maximumOfTwoNumbers(a,b)

// Task 4: write a function expression to concatenate two string and return the result
a=prompt("Enter the first string")
b=prompt("Enter the second string")
const concatenateStrings=function(a,b) {
    return a+" "+b
}
console.log(concatenateStrings(a,b))

// Activity 3:Arrow functions

// Task 5: write a arrow function to calculate the sum of two numbers and return the result
a = parseInt(prompt("Enter the first number"))
b = parseInt(prompt("Enter the second number"))

if (isNaN(a) || isNaN(b)) {
    console.log("One of the inputs is not a number")
} else {
    let sum = (a, b) => a + b
    console.log(sum(a, b))
}
// Task 6: write a arrow function to check if a string contains a specific character and return a boolean value
const containsCharacter = (str, char) => str.includes(char);
let stringToCheck = prompt("Enter a string:");
let characterToFind = prompt("Enter the character to find:");
let result = containsCharacter(stringToCheck, characterToFind);
console.log(`The string "${stringToCheck}" contains the character "${characterToFind}": ${result}`);

// Activity 3:Function parameters and default values
 
// Task 7: write a function that takes two parameter and return their product. provide a default value for the second parameter
a=prompt("Enter the first function parameter")
function multiply(a, b = 2) {
    return a * b;
  }
console.log(multiply(a))

// Task 8: write a function that takes a person's name and age and return a greeting message. provide default value for age.
const greet = (name, age = 18) => `Hello, ${name}! You are ${age} years old.`

let personName = prompt("Enter your name:")

console.log(greet(personName))

// Activity 3:Higher-Order Functions
 
// Task 9: write a higher-order function that takes a function and a number and calls the function that many items
const repeatFunction = (fn, times) => {
    for (let i = 0; i < times; i++) {
        fn()
    }
}

const sayHello = () => console.log("Hi")

repeatFunction(sayHello, 3)
 
// Task 10: write a higher-order function that takes two functions and a value applies the first function to the value, and then applies the second function to the result
const composeFunctions = (fn1, fn2, value) => {
    const result = fn1(value)
    return fn2(result)
}

const double = x => x * 2
const increment = x => x + 1

console.log(composeFunctions(double, increment, 5))

