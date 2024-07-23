// Day 4: Loops

//  Activity 1 : For Loops

// Task 1:
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Task 2:
for(let m = 1; m <= 10; m++){
    let product = m * 1;
    console.log(`5 x ${m} = ${product}`);
}

// Activity 2 : While loop

//Task 3:
let w = 1;
let sum = 0;
while (w<=10){
    sum += w;
    w++;
}
console.log(`The sum of numbers from 1 to 10 is ${sum}`);

// Task 4
let b=11;
while(b > 1){
    b--;
    console.log(b);
}

// Activity 3: Do while loop

// Task 5

let d = 1;
do{
    console.log(d);
    d++;
}while (d <= 5)

// Task 6

let number = 4;
let factorial = 1;
let f = number;

do {
    factorial *= f;
    f--;
} while (f > 0);

console.log(`The factorial of ${number} is ${factorial}`);

// Activity 4: Nested Loops

// Task 7
let rows = 5;
for(let p = 1; p<=rows; p++){
    let row = "";
    for(let t= 1; t<=p; t++){
        row += "*";
    }
    console.log(row);
}

// Activity 5: Loop Control Statements

// Task 8
for(let c=1; c<=10; c++){
    if(c===5){
        continue;
    }
  console.log(c);
}

// Task 9:
for(let b = 1; b<= 10; b++){
    if(b===7){
        break;
    }
    console.log(b);
}