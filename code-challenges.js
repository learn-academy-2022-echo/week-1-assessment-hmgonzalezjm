// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: 
// create a function called boilPoint that takes in a number called temp
// if temp is higher than 212 degrees return "is above boiling point"
// if temp is lower than 212 degrees return "is below boiling point"
// if temp equals 212 degrees return "at boiling point"
// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

const boilPoint = (temp) => {
    if (temp > 212){
        return `${temp} is above boiling point`
    } else if (temp < 212){
        return `${temp} is below boiling point`
    } else {
        return `${temp} at boiling point`
    }
}
console.log(boilPoint(350))
console.log(boilPoint(212))
console.log(boilPoint(42))

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code: 
// Create a variable called comboNumbers
// Combine the two arrays using .concat
// Determine the length of the combined arrays using .length.
// Use a console log entry to output the length of the combined arrays

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

var comboNumbers = (myNumbers1.concat(myNumbers2))
    console.log(comboNumbers.length)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code: 
// Use the split method to transform the string into split array
// Next you will reverse the split array
// Then you will join the array back into a string
// The console log the output

const currentCohort = "Echo 2022"

function reverseString(currentCohort){
    return currentCohort.split("").reverse().join("")
}
console.log(reverseString(currentCohort));

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// Create a function called oddEven
// Use array filter method to create new array with information passed along
// Set if/else statements to determine if elements in array are odd or even
// Output results will be odd or even

const myArray = [13, 34, 5, 10, 27, 42];
const oddEven = myArray.filter(element => {
    if(element % 2 !== 0) {
        console.log("odd");
    } else{
        console.log("even")
    }
});

// // --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// // Pseudo code:
// Create a function named subtract
// Argument will have two parameters set called num1, num2
// return a result of the two paramters with the smaller number subtracted from the larger number

// // Set one:
// const number1 = 58
// const number2 = 100

const subtract1 =(num2, num1) => {
    return num2 - num1
}
console.log(subtract1(100,58))


// // Set two:
// const number3 = 27
// const number4 = 24

const subtract2 =(num3, num4) => {
    return num3 - num4
}
console.log(subtract2(27,24))
