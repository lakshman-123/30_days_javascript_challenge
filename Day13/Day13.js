// Day 13:Modules
// Activity 1:Creating and exporting a module

// Task 1: Create a module that exports a function of add two numbers. Import the module and use it to another script.
function add(a, b) {
    return a + b;
  }
  module.exports= add;

//Task 2: Create a module that exports an object representing a person. with properties and methods.Import and use this module in another script.
const PersonObj={
    name:'Tom',
    age:20,
    getAge:function(){
        return this.age;
    },
    greet:function(){
        return `Hello ${this.name}`;
    }
}
module.exports=PersonObj;

// Activity 2: Named and Default exports
// Task 3: Create a module that exports multiple function using named exports. Import and use this module in another script.

const multiple = (a, b) => {
    return a * b;
  };
  
  const division = (a, b) => {
    return a / b;
  };
  
  module.exports = {
    multiple,
    division,
 
  };
  
// Task 4: Create a module that exports a single function using default exports. Import and use this module in another script.

function isLeapYear(year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  }
  export default isLeapYear;

// Activity 3: Importing Entire module
// Task 5: Create a module that exports multiple constants and functions. Import the entire module as an object in another script and use its properties. 

let mongodbConnection = true; 
function dataFetch(category){
    console.log(`Fetching data for  ${category}`)

}
module.exports= {
    mongodbConnection, 
    dataFetch
}

// Activity 4 : Use third Party module
// Task 6: Install a third party module (eg, lodash ) using npm . Import and use the function from this module script
const lodash = require('lodash')
const arr = [
    {name:'John',age:20},
    {name:'Tom',age:0},
    {name:'Peter',age:41},
    {name:'Mary',age:2},
    {name:'Mike',age:1},
]
const sortedArr = lodash.sortBy(arr,'age')
const findzeroage= lodash.find(arr, {age:0})

arr.splice(0,arr.length)

exports.arr=arr
exports.sortedArr=sortedArr
exports.findzeroage=findzeroage

//Task 7: Install a third party module (eg. axios)using npm . import and use this module to make a network request to the script. 
const axios= require('axios')
async function fetchData(username){
try{
    const response = await axios.get(`https://api.github.com/users/${username}`)
console.log(`Github follower for the ${username} is `,response.data.followers)
}catch(err){
    console.error('Error occurred while getting data', err)
}
}
module.exports = fetchData; 