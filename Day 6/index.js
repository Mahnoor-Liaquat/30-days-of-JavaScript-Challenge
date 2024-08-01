// Day 6: Array
// Activity 1: Array Creation and Access

// Task 1:
let arr= [1,2,3,4,5];
console.log(arr);

// Task 2:
console.log(arr[0]);
console.log(arr[arr.length-1]);

// Activity 2: Array Methods Basic

// Task 3:
arr.push(6);
console.log(arr);

// Task 4:
arr.pop();
console.log(arr);

// Task 5:
arr.shift();
console.log(arr);

// Task 6:
arr.unshift(1);
console.log(arr);

// Activity 3: Array Methods(intermediate)

// Task 7:
let doubleArray = arr.map(x => x * x);
console.log(doubleArray);

// Task 8:
let evenArr = arr.filter(x => x % 2== 0);
    console.log(evenArr);

// Task 9:
let sumOfArr = arr.reduce((accumulator, value)=>{
    return accumulator+ value;
}, 0);
console.log(sumOfArr);

// Activity 4: Array Iteration

// Task 10:
let forLoop = ["Artificial Intelligence", "Deep Learning", "Machine Learning"]
for(let i = 0; i< forLoop.length; i++){
    console.log(forLoop[i]);
}

// Task 11:
let Array = [1,2,3,4]
Array.forEach(element=>{
    console.log(element)
});

// Activity 5: Multidimensional array
// Task 12:
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  console.log(matrix);

//   Task 13:
const row = 1; 
const column = 2; 

const element = matrix[row][column];
console.log(element); 