//Day 7: Objects

//Tasks/Activities:

//Activity 1: Object Creation and Access
//Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
// Creating a book object
let book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960
}
console.log(book)

//Task 2: Access and log the title and author properties of the book object.
console.log("Title:", book.title)
console.log("Author:", book.author)

//Activity 2: Object Methods
//Task 3: Add a method to the book object that returns a string with the book’s title and author, and log the result of calling this method.
// Creating a book object
book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`
    }
}
console.log(book.getBookInfo())

//Task 4: Add a method to the book object that takes a parameter (year) and updates the book’s year property, then log the updated object.
// Creating a book object
book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`
    },
    updateYear: function(newYear) {
        book.year = newYear
    }
}

book.updateYear(2024)

console.log(book)

//Activity 3: Nested Objects
//Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console.
let book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`
    },
    updateYear: function(newYear) {
        book.year = newYear
    }
}

let book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`
    },
    updateYear: function(newYear) {
        book.year = newYear
    }
}

let library = {
    name: "City Library",
    books: [book1, book2]
}
console.log(library)


book1 = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`;
    },
    updateYear: function(newYear) {
        book.year = newYear
    }
}

book2 = {
    title: "1984",
    author: "George Orwell",
    year: 1949,
    getBookInfo: function() {
        return `${book.title} by ${book.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear
    }
}

library = {
    name: "City Library",
    books: [book1, book2]
}


console.log(`Library Name: ${library.name}`)
console.log("Books in the library:")
library.books.forEach(book => {
    console.log(`- ${book.title}`)
});


//Activity 4: The this Keyword
//Task 7: Add a method to the book object that uses the this keyword to return a string with the book’s title and year, and log the result of calling this method.
 book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${this.title} by ${this.author}`
    },
    updateYear: function(newYear) {
        this.year = newYear
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`
    }
}

console.log(book.getTitleAndYear())

//Activity 5: Object Iteration
//Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
    getBookInfo: function() {
        return `${this.title} by ${this.author}`
    },
    updateYear: function(newYear) {
        this.year = newYear
    },
    getTitleAndYear: function() {
        return `${this.title} (${this.year})`
    }
};


for (const key in book) {
    console.log(`${key}: ${book[key]}`)
}

// Task 9: Use Object.keys and Object.values methods to log all the keys and values of the book object.
keys = Object.keys(book)
values = Object.values(book)

console.log("Keys:", keys)
console.log("Values:", values)

