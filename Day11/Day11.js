//Day 11: Promises and Async/Await

//Tasks/Activities:

//Activity 1: Understanding Promises

//Task 1: Create a promise that resolves with a messge after a 2-second timeout and log the message to the console.
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("This is the resolved message after 2 seconds")
    }, 2000)
})


myPromise.then(message => {
    console.log(message)
})

//Task 2: Create a promise that rejects with an error message after a 2 second timeout and handle the error using .catch().
myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("This is the error message after 2 seconds"))
    }, 2000)
})

myPromise.catch(error => {
    console.error(error.message)
})

//Activity 2: Chaining Promises

//Task 3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log message in a specific order.
const fetchData1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 1")
        }, 1000) 
    })
}

const fetchData2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 2")
        }, 2000) 
    })
}

const fetchData3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data from server 3")
        }, 1500) 
    })
}

fetchData1()
    .then((data1) => {
        console.log(data1) 
        return fetchData2()
    })
    .then((data2) => {
        console.log(data2) 
        return fetchData3()
    })
    .then((data3) => {
        console.log(data3) 
    })
    .catch((error) => {
        console.error(error)
    })



//Activity 3: Using Async/Await

//Task 4: Write an async function that waits for a promise to resolve and then logs the resolved value.
// Create a promise that resolves with a value after a delay
myPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Resolved value from the promise")
    }, 2000)
})


async function logResolvedValue() {
    try {
        const resolvedValue = await myPromise
        console.log(resolvedValue)
    } catch (error) {
        console.error(error)
    }
}

logResolvedValue()





//Task 5: Write an async function that handles a rejected promise using try catch and logs the error message.
myPromise = new Promise((_, reject) => {
    setTimeout(() => {
        reject(new Error("This is the error message from the promise"))
    }, 2000) 
})

async function handleRejectedPromise() {
    try {
        const resolvedValue = await myPromise
        console.log(resolvedValue)
    } catch (error) {
        console.error(error.message)
    }
}

handleRejectedPromise()



//Activity 4: Fetching Data from an API

//Task 6: Use the fetch API to get data from a public API and log the response data to the console using promises.
let apiUrl = "https://jsonplaceholder.typicode.com/posts/1"

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        return response.json() 
    })
    .then(data => {
        console.log(data) 
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error)
    })




//Task 7: Use the fetch API to get data from a pubkic API and log the response data to the console using async/await.
apiUrl = "https://jsonplaceholder.typicode.com/posts/1"

async function fetchData() {
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json() 
        console.log(data) 
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error)
    }
}

fetchData()


//Activity 5: Concurrent Promises

//Task 8: Use Promise.all to wait for multiple promises to resolve and then log all their values.
let promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 1")
    }, 1000) 
})

let promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 2")
    }, 2000) 
})

let promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 3")
    }, 1500)
})

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log(values) 
    })
    .catch(error => {
        console.error('One of the promises rejected:', error)
    })




//Task 9: Use Promise.race to log the value of he first promise that resolves among multiple promises.
 promise1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 1")
    }, 3000) 
})

promise2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 2")
    }, 1000) 
})

promise3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Value from promise 3")
    }, 2000) 
})

Promise.race([promise1, promise2, promise3])
    .then(value => {
        console.log(value) 
    })
    .catch(error => {
        console.error('One of the promises rejected:', error)
    })


