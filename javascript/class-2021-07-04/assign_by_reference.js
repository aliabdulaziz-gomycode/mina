// Array example
//---------------------------

let x = [10, 20];

// let x2 = x; // assign by reference
let x2 = Object.assign([], x); // new copy (different location in memory)

x2.push(30);

console.log(x);
console.log(x2);


// Object example
//---------------------------

let y = { a: 10, b: 20 };

// let y2 = y; // assign by reference
let y2 = Object.assign({}, y); // new copy (different location in memory)

y2.c = 30;

console.log(y);
console.log(y2);