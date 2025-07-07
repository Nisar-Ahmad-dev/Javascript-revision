/* Question 1: Basic Function
Write a function called isEven that takes a number and returns true if it's even, and false otherwise.

Example:

js
Copy
Edit
isEven(4); // true
isEven(7); // false


*/


function isEven(num) {
  const n = Number(num);
  return n % 2 === 0;
}


console.log(isEven(8)); 
console.log(isEven(7)); 