console.log("Hi Prasanna, this is your first JS program!");

for (let i = 0 ; i<10; i++ ) {
   console.log(i);
}

// 1. Create array of fruits and print each one
let fruits = ["apple", "banana", "mango"];
fruits.forEach(function(fruit) {
  console.log(fruit);
});

// 2. Function to add two numbers
function add(a, b) {
  return a + b;
}
console.log(add(10, 20));

// 3. Arrow function to square a number
const square = (n) => n * n;
console.log(square(5));

// 4. Loop through numbers 1 to 10, print even numbers
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  }
}


// 1. Create an object for user
const user = {
  name: "Prasanna",
  age: 25,
  skills: ["JavaScript", "Drupal", "React"]
};

console.log("Name:", user.name);
console.log("Skills:", user.skills.join(", "));

// 2. Loop through object
for (let key in user) {
  console.log(key + " => " + user[key]);
}

// 3. String operations
let message = "Welcome to JavaScript learning";
console.log("Length:", message.length);
console.log("Uppercase:", message.toUpperCase());
console.log("Words:", message.split(" "));

// 4. Destructuring
const { name, age } = user;
console.log(`My name is ${name} and I am ${age} years old.`);
