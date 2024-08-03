// Day 8: ES6 + Features

// Activity 1: Template Literals
// Task 1:
let myname = "Mahnoor";
let age = 21;
let myIntro = `My name is ${myname} and I am ${age} years old`;
console.log(myIntro);

// Task 2:
let aboutMe = `Hello ! I am Mahnoor Liaquat Ali.
I'm a MERN Stack web developer,
enthusiastic about crafting seamless user experiences through clean and efficient code`
console.log(aboutMe);

// Activity 2: Destructuring
// Task 3:
let arr = [2, 4, 6, 8, 10];

let [first, second] = arr;
console.log("First element:", first);
console.log("Second element:", second);

// Task 4:
let book = {
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    publicationYear: "2009"
};

let { title, author } = book;

console.log("Title:", title);
console.log("Author:", author);

// Activity 3: Spread and Rest Operator
// Task 5:
let array = ["abc", "def", "ghi", "jkl", "mno", "pqr"];
let newarray = [...array, "stu", "vwx", "yz"];
console.log(newarray);

// Task 6:
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); 

//Activity 4: Default Parameters
// Task 7:
function multiplication (num1, num2=1){
    return num1 * num2;
}
console.log(multiplication(3));

// Activity 5: Enhanced Object Literals
// Task 8:
let mybook = {
    title: "Clean Code",
    author: "Robert C. Martin",
    publicationYear: 2008,
    getDescription() {
        return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
    },

    updatePublicationYear(newYear) {
        this.publicationYear = newYear;
    }
};

console.log(mybook);
console.log(mybook.getDescription());

mybook.updatePublicationYear(2023);
console.log(mybook.getDescription());

// Task 9:
let property1 = 'name';
let property2 = 'age';

let person = {
    [property1]: 'Muzammil Ali',
    [property2]: 18
};
console.log(person);