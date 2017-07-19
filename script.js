const h = "Hello";
const w = "World";

/**
 Function returns sum of two values
 @param {integer} a - first values
 @param {integer} b - second value
*/
function sum(a, b) {
  return a + b;
}

let divide = function(a, b) {
   return a / b;
}

// console.log(sum(2, 2));
//console.log(sum(h, w));
// console.log(divide(2, 2));

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 10) {
  console.log(j);
  j = j + 1;
}

if (1 > 2) {
  console.log("1 is bigger than 2?")
} else if (1 === 2) {
  console.log("1 is equal 2?")
} else {
  console.log("else happened");
}

let somestring = "Lorem ipsum";
let somenumber = 123;
let = false;
let obj = {string: somestring, number: somenumber, sublevel: {
  myval: divide
}};
let arr = [1, 'two', obj];
arr[2] = 'three';
arr.push('aa');
arr.pop();

for (let k = 0; k < arr.length; k++) {
  console.log(arr[k]);
}

console.log(obj);
console.log(obj.sublevel.myval);
console.log(obj.sublevel.myval(2, 2));
console.log(arr);
