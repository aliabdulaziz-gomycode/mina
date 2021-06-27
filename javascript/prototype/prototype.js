/*
    Everything in JavaScript is an object, except primitive types.

    Anytime I create an object, another object called __proto__ will be 
    attached to it by the browser.
*/


console.log(new String("Ali"));
console.log(new Number(10));
console.log([10, 20, 30]);
console.log({ name: "Ali" });

class Person {
    constructor() {
        this.name = null;
        this.age = null;
    }

    eat() {
        console.log("Eating!");
    }
}

class Employee extends Person {
    constructor() {
        super();
        this.job = null;
    }

    work() {
        console.log("Working!");
    }
}

let employee = new Employee();

console.log(employee);