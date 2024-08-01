// Day 5: Functions

// Activity 1 : Function Declaration

// Task 1:
function IsEvenOrOdd (num){
    if(num % 2=== 0){
        console.log("Even Number")
    }
    else{
        console.log("Odd Number")
    }
}
IsEvenOrOdd(7);

// Task 2:
function square(num){
    console.log(num**num);
}
square(2);

// Activity 2 : Function Expression

// Task 3:
function maxNum(num1, num2){
    if(num1 > num2){
        console.log( num1, " is greater");
    }
    else if(num2 > num1){
        console.log(num2, " is greater");
    }
    else{
        console.log("Both Numbers are equal");
    }
}
maxNum(22, 16);

// Task 4:
function concatenate(firstName,lastName){
    console.log(firstName + lastName);
}
concatenate("Mahnoor ", "Liaquat!");

// Activity 3 : Arrow Functions

// Task 5:
const sumNum = (num1, num2) => {
    const sum = num1 + num2;
    console.log(sum);
};

sumNum(23,2);

// Task 6:
const character = (str, char) => {
    return str.includes(char);
}
console.log(character("Mahnoor", "o"))

// Activity 4: Function Parameters and Default value

// Task 7:
function product(number, number2){
    number2 = 4

    return(number * number2);
}

console.log(product(2))

//Task 8:
function greetings(name , age = "unknown"){
    return `Hello, ${name} you are ${age} years old`;
}
console.log(greetings("Mahnoor",23));
console.log(greetings("Muzammil Ali"));

// Activity 5: Higher Order Function

// Task 9:
const higherOderfunction =(funct, times) =>{
    for(let i = 0; i<=times; i++){
        funct();
    }
};
const sayHelloAndGoodBye = () =>{
    console.log("Hello and goodBye")
}
higherOderfunction(sayHelloAndGoodBye,6);

// Task 10 
const applyFunction = (funct1, funct2, value)=>{
    const result1 = funct1(value);
    const result2 = funct2(result1);
    return result2;
}

const addSeven = x =>x+7;
const squareNum = x => x * x;

const result = applyFunction(addSeven, squareNum, 2);
console.log(result);
