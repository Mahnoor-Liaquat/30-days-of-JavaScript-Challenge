// Day 3: Control Structures

//  Activity 1 : If-Else Statements

// Task 1:
let num = 4;
if(num > 0){
    console.log("Number is Positive");
}
else if(num < 0){
    console.log("Number is negative");
}else {
    console.log("Number is zero");
}

// Task 2:
let age = 23;
if(age >=18){
    console.log("you are eligible for vote");
}else{
    console.log("you are not eligible");
}

// Activity 2: Nested IF-Else Statement

// Task 1:
let num1 = 3;
let num2 = 5;
let num3 = 2;

if(num1 > num2 && num1 > num3){
    console.log("Num1 is greater");
}else if(num2 > num1 && num2 > num3){
    console.log("Num2 is greater");
}else {
    console.log("Num3 is greater");
}

// Activity 3: Switch Case

// Task 4:
let dayNumber = 3;
let day;
switch(dayNumber){
    case 1:
    day = "Saturday";
    break;

    case 2:
    day = "Sunday";
    break;

    case 3:
    day = "Monday";
    break;

    case 4:
    day = "Tuesday";
    break;

    case 5:
    day = "Wednesday";
    break;

    case 6:
    day = "Thursday";
    break;

    case 7:
    day = "Friday";
    break;

    default:
    day = "Invalid day number! Please enter a number between 1 till 7.."

}

console.log(`Day number ${dayNumber} is ${day}`);

// Task 5
let marks = 80;
let grade;

switch (true) {
  case (marks >= 80 && marks <= 100):
    grade = "A";
    break;
  case (marks >= 70 && marks < 80):
    grade = "B";
    break;
  case (marks >= 60 && marks < 70):
    grade = "C";
    break;
  case (marks >= 50 && marks < 60):
    grade = "D";
    break;
  case (marks >= 40 && marks < 50):
    grade = "E";
    break;
  default:
    grade = "F";
}

console.log(`According to your marks, your grade is ${grade}`);

// Activity 4: Conditional Ternary Operator

// Task 6:
let myNumber = 2;

let result = myNumber%2 === 0 ? "Number is Even" : "Number is Odd";
console.log(result);

// Activity 5: Combining Conditions

// Task 7:
let year = 2024;
let isLeapYear;

if(year % 4 === 0 && year % 10 || (year % 400 === 0)){
    isLeapYear = true;
} else{
    isLeapYear= false;
}

if (isLeapYear){
    console.log(`${year} is a leap year `)
}else{
    console.log(`${year} is not a leap year`);
}




