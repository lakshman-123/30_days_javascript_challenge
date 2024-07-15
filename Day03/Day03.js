//Day 3:Control Structures

//Tasks/Activities
//Activity 1:If-Else Statements

//Task 1:Write a program to check if a number is  positive ,negative or zero and log the result to the console.

let num=prompt("Enter the number:")

if (num>0) {
    console.log(`The given number ${num} is positive`)
}
else if(num<0) {
    console.log(`The given number ${num} is negative`)
}
else {
    console.log(`The given number ${num} is zero`)
}

//Task 2:Write a program to check if aperson is eligible to vote (age>=18) and log the result to the console

let age=prompt("Enter your age:")
if (age>=18) {
    console.log("The person is eligible to vote")
}
else{
    console.log("The person is not eligible to vote")
}

//Activity 2: Nested if-else statements

//Task 3: Write a program to find the largest of three numbers using nested if-else statements

let largest
let a=prompt("Enter your first number")
let b=prompt("Enter your second number")
let c=prompt("Enter your third number")

if (a>=b){
    if (a>=c) {
        largest=a
        console.log(`The number ${a} is largest`)
    }
    else{
        largest=c
        console.log(`The number ${c} is largest`)
    }
}
else{
    if (b>=c) {
        largest=b
        console.log(`The number ${b} is largest`) }
    else {
        largest=c
        console.log(`The number ${c} is largest`)
    }        

} 

//Activity 3: Switch Case

//Task 4:Write a program that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console.
let number=prompt("Enter your day number range from 1 to 7")
switch (number) {
    case "1":
        console.log("Monday")
        break;
    case "2":
        console.log("Tuesday");
        break;
    case "3":
        console.log("Wednesday");
        break;
    case "4":
        console.log("Thursday");
        break;
    case "5":
        console.log("Friday");
        break;
    case "6":
        console.log("Saturday");
        break;
    case "7":
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7");
        break;
}

//Task 5:Write a program that uses a switch case to assign a grade ('A','B','C','D','F') based on a score and log the grade to the console

let score = prompt("Enter your score (0-100):");
score=parseInt(score);
if (isNaN(score) || score < 0 || score > 100) {
    console.log("Invalid input");
}
else{
switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 80 && score < 90):
        console.log("B");
        break;
    case (score >= 70 && score < 80):
        console.log("C");
        break;
    case (score >= 60 && score < 70):
        console.log("D");
        break;
    case (score >= 0 && score < 60):
        console.log("F");
        break;
    default:
        console.log("Invalid input");
        break;
} }

//Activity 4: Conditional (Ternary) Operator

//Task 6:Write a program that uses the ternary operator to check if a number is even or odd and log the result to the console
num=parseInt(prompt("Enter the number"))
let even=(num%2)===0
let result=even?"even":"odd"
console.log(result)

//Activity 5:Combining Conditions

//Task 7:Write a program to check if a year is a leap year using multiple conditions (divisible by 4,but not 100 unless also divisible by 400) and log the result to the console

let year = prompt("Enter a year:");

year = parseInt(year);

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(`${year} is a leap year.`);
    } else {
        console.log(`${year} is not a leap year.`);
    }

