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