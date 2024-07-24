//Day 12 : Error Handling

//Tasks/Activities:

//Activity 1: Basic Error Handling with Try-Catch

//Task 1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.
function throwErrorFunction() {
    throw new Error("This is an intentional error.")
}

function handleError() {
    try {
        throwErrorFunction()
    } catch (error) {
        console.error("An error occurred: ", error.message)
    }
}


handleError()

//Task 2: Create a function that divides two numbers and throws an error if the demoninator is zero. Use a try-catch block to handle this error.
function divideNumbers(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed.")
    }
    return numerator / denominator
}


function handleDivision(numerator, denominator) {
    try {
        const result = divideNumbers(numerator, denominator)
        console.log(`Result: ${result}`)
    } catch (error) {
        console.error("An error occurred: ", error.message)
    }
}

handleDivision(10, 2)
handleDivision(10, 0)




//Activity 2: Finally Block

//Task 3: Write a script that includes a try-catch block and a finally block. Log messages in the try,catch, and finally blocks to observe the execution flow.
function throwErrorFunction() {
    throw new Error("This is an intentional error.")
}

function demonstrateTryCatchFinally() {
    try {
        console.log("Inside try block: About to call throwErrorFunction.")
        throwErrorFunction()
        console.log("This message will not be logged because an error occurs above.")
    } catch (error) {
        
        console.log("Inside catch block: An error occurred:", error.message)
    } finally {
        
        console.log("Inside finally block: This block executes regardless of whether an error occurred or not.")
    }
}


demonstrateTryCatchFinally()




//Activity 3: Custom Error Objects

//Task 4: Create a custom error class that extends the built-in Error class. Throw an instanceof this customs error in a function and handle it using aa try-catch block.
class CustomError extends Error {
    constructor(message) {
        super(message) 
        this.name = 'CustomError'
    }
}

function throwCustomError() {
    throw new CustomError("This is a custom error.")
}

function handleCustomError() {
    try {
        console.log("Inside try block: About to call throwCustomError.")
        throwCustomError()
        console.log("This message will not be logged because an error occurs above.")
    } catch (error) {
        if (error instanceof CustomError) {
            console.log("Inside catch block: A custom error occurred:", error.message)
        } else {
            console.log("Inside catch block: An unexpected error occurred:", error.message)
        }
    } finally {
        console.log("Inside finally block: This block executes regardless of whether an error occurred or not.")
    }
}


handleCustomError()

//Task 5: Write a function that validates user input (e.g., checking if a string is not empty) and throws a custom error if the validation fails.Handle the custom error using a try-catch block.
class ValidationError extends Error {
    constructor(message) {
        super(message) 
        this.name = 'ValidationError' 
    }
}

function validateInput(input) {
    if (input.trim() === "") {
        throw new ValidationError("Input cannot be empty.")
    }
    return true
}

function handleUserInput(input) {
    try {
        console.log("Inside try block: About to validate input.")
        validateInput(input)
        console.log("Input is valid.")
    } catch (error) {
        if (error instanceof ValidationError) {
            console.log("Inside catch block: A validation error occurred:", error.message)
        } else {
            console.log("Inside catch block: An unexpected error occurred:", error.message)
        }
    } finally {
        console.log("Inside finally block: This block executes regardless of whether an error occurred or not.")
    }
}

handleUserInput("Hello, World!")
handleUserInput("")


//Activity 4: Error Handling in Promises

//Task 6: Create a promise that randomly resolves rejects. Use .catch() to handle the rejection and log an appropriate message to the console.
function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random()
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully.")
        } else {
            reject(new Error("Promise rejected."))
        }
    })
}

function handleRandomPromise() {
    createRandomPromise()
        .then((message) => {
            console.log(message)
        })
        .catch((error) => {
            console.error("An error occurred:", error.message)
        })
}

handleRandomPromise()



//Task 7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.
function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const randomValue = Math.random()
        if (randomValue < 0.5) {
            resolve("Promise resolved successfully.")
        } else {
            reject(new Error("Promise rejected."))
        }
    })
}

async function handleRandomPromiseAsync() {
    try {
        console.log("Inside try block: About to await the promise.")
        const message = await createRandomPromise()
        console.log(message)
    } catch (error) {
        console.error("Inside catch block: An error occurred:", error.message)
    } finally {
        console.log("Inside finally block: This block executes regardless of whether an error occurred or not.")
    }
}

handleRandomPromiseAsync()




//Task 9: Use the fetch API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.
async function fetchDataFromInvalidURL() {
    const invalidURL = "https://invalid-url.example.com/data"

    try {
        console.log("Inside try block: About to fetch data from an invalid URL.")
        const response = await fetch(invalidURL)

        if (!response.ok) {
            throw new Error(`Network response was not ok: ${response.statusText}`)
        }

        const data = await response.json()
        console.log("Data fetched successfully:", data)
    } catch (error) {
        console.error("Inside catch block: An error occurred while fetching data:", error.message)
    } finally {
        console.log("Inside finally block: This block executes regardless of whether an error occurred or not.")
    }
}

fetchDataFromInvalidURL()



