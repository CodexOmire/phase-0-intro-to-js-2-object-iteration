// Iterating over an array using for...of
const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}

// Iterating over a string using for...of
const greeting = "Hello";

for (const char of greeting) {
  console.log(char);
}

// Iterating over an object using for...in
const student = {
  name: 'Zeke',
  age: 20,
  cohort: 'SDF-FT14A',
};

for (const key in student) {
  console.log(`${key}: ${student[key]}`);
}
