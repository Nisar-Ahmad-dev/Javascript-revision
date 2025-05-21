/*
1: First, An array can hold values of mixed types.For example
numbers, string, boolean and null
2: Second the size of array is dynamic and auto-growing.
 In other we dont need to specify the size fo array 
*/

// Array useing  Array() constructor
let test = new Array(1);
test[0] = 1
test[1] = 2
test[2] = 3
// console.log(test);

scores = [1 ,2 ,3 , test]
 scores.push(5)
 scores.pop()
console.log(Array.isArray(scores));
let result = '5' * 2;

console.log(result);