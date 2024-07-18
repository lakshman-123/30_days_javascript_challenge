//Day 6:Arrays

//Tasks/Activities:

//Activity 1:Array Creation and Access

//Task 1:Create an array of numbers from 1 to 5 and log the array to the console
let numbers = [1,2,3,4,5]
console.log(numbers)

//Task 2:Access the first and last elements of the array and log them to the console
numbers = [1,2,3,4,5]
console.log(numbers[0])
console.log(numbers[numbers.length - 1])

//Activity 2:Array Methods (Basic)
//Task 3:Use the push method to add a new number to the end of the array and log the updated array
numbers = [1,2,3,4,5]
numbers.push(6)
console.log(numbers)

//Iask 4:Use the pop method to remove the last element from the array and log the updated array
numbers = [1,2,3,4,5]
numbers.pop(numbers[numbers.length-1])
console.log(numbers)

//Task 5:Use the shift method to remove the first element from the array and log the updated array
numbers = [1,2,3,4,5]
numbers.shift(numbers[0])
console.log(numbers)

//Task 6:Use the unshift method to add a new number to the beginning of the array and log the updated array
numbers = [1,2,3,4,5]
numbers.unshift(0)
console.log(numbers)

//Activity 3: Array Methods (Intermediate)
//Task 7:Use the map method to create a new array where ecah number is doubled and log the new array
numbers=[1,2,3,4,5]
const doubledNumbers = numbers.map(number => number * 2)

console.log(doubledNumbers)

//Task 8:Use the filter method to create a new array with only even numbers and log the new array
numbers=[1,2,3,4,5]
const evenNumbers = numbers.filter(number => number % 2 === 0)
console.log(evenNumbers)

//Task 9:Use the reduce method to calculate the sum of all numbers in the array and log the result
numbers=[1,2,3,4,5]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sum)

//Activity 4:Array Iteration
//Task 10:Use a for loop to iterate over the array and log each element to the console
numbers = [1, 2, 3, 4, 5]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

//Use the forEach method to iterate over the array and log each element to the console
numbers = [1, 2, 3, 4, 5]
numbers.forEach(number => console.log(number))

//Activity 5:Multi-dimensional Arrays
//Task 12:Create a two-dimensional array (matrix) and log the entire array to the console
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix)

//Iask 13:Access and log a specific element from the two-dimensional array
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matrix[1][2])

