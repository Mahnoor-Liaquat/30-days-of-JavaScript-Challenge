// Day 7: Objects

// Activity 1: Object Creation and Access

// Task 1: 
let book = {
    title :"Junior level Books Introduction To Computer",
    author : "Amit Garg",
    publicationYear : "2011"
}
console.log(book);

// Task 2:
console.log(book.title);
console.log(book["author"]);

// Activity 2: Object Methods
// Task 3:
let ComputerBook = {
    title: "Client Server Computing",
    author: "Lalit Kumar",
    publicationYear: 2003,
    getDetail: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear) {
        this.year = newYear;
        console.log(`Updated Year: ${this.title} by ${this.author}, published in ${this.year}`);
      }
};
console.log(ComputerBook.getDetail());

// Task 4:
ComputerBook.updateYear(2014);

// Activity 3: Nested Objects
let Library = {
    name: "Computer Library",
    mybooks: [
        {
            title : "Client Server Computing",
            author: "Sharad Kumar Verma",
            publicationYear: "2012"
        },
        {
            title : "Data Structure Using C",
            author: "Sharad Kumar Verma",
            publicationYear: "2015"
        },
        {
            title : "Computer Networks",
            author: "Sharad Kumar Verma",
            publicationYear: "2010"
        },
        {
            title : ".NET Framework & C#",
            author: "Sharad Kumar Verma",
            publicationYear: "2009"
        },
]
}
console.log(Library);

// Task 6
console.log("Library Name:", Library.name);

Library.mybooks.forEach(book => {
    console.log("Book Title:", book.title);
});

// Activity 4: The this keyword

// Task 7:
let myBook = {
    author: "Ronald Rivest",
    title: "Introduction to Algorithm",
    publicationYear: "1989",
    getBookDetails: function() {
        return `${this.title} was published in ${this.publicationYear}`;
    }
};
console.log(myBook.getBookDetails());

// Activity 5: Object Iteration

// Task 8:
let begToProBook = {
    author: "Dave Thomas",
    title: "The Pragmatic Programmer",
    publicationYear: "1999"
};

for (let property in begToProBook) {
    console.log(`${property}: ${begToProBook[property]}`);
}

// Task 9:
console.log("Keys:", Object.keys(begToProBook));
console.log("Values:", Object.values(begToProBook));

