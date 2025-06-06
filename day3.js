// 1. Create an object for a student
let student = {
  name: "Prasanna",
  age: 24,
  branch: "Civil",
  isPlaced: false
};

console.log(student.name); // Access property
console.log("Placed?", student.isPlaced);

// 2. Add new key dynamically
student.college = "Impact College";
console.log(student);

// 3. Loop through object keys
for (let key in student) {
  console.log(key + ":", student[key]);
}

// 4. String example
let fullName = "prasanna yadav";
let capitalized = fullName
  .split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ");
console.log(capitalized); // Output: Prasanna Yadav

// 5. Replace domain in email
let email = "prasanna@example.com";
let newEmail = email.replace("example.com", "gmail.com");
console.log(newEmail); // prasanna@gmail.com
