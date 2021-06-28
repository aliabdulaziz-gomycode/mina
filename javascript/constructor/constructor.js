// ES5 Syntax

// constructor is a function used to create objects.
// the object will have:
// - properties: state
// - methods: actions
function Person(name, age) {
    // this refers to the object which will be created in the future.
    this.name = name;
    this.age = age;
}

// we will not create the methods directly in the constructor,
// because this will crate a separate copy for each object.
// instead we will add the methods to the prototype.

Person.prototype.greet = function () {
    console.log(`Hi, my name is ${this.name}, and I'm ${this.age}`);
}

Person.prototype.walk = function () {
    console.log("I'm walking!");
}

//--------------------------------------------------------------

// ES6 Syntax

class Person2 {
    // The constructor is the one responsible for creating the objects.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, my name is ${this.name}, and I'm ${this.age}`);
    }

    walk() {
        console.log("I'm walking!");
    }
}



// To use the constructor to create objects we need to use the "new" keyword.
// The following line means: create new object of type Person.

let p1 = new Person("Mina", 30);
let p2 = new Person2("Mina", 30);

// now let's print the objects and see their content
console.log(p1);
console.log(p2);

// greet() is now stored in the prototype object
// not in p1, p2, and p3.
p1.greet();
p1.walk();

p2.greet();
p2.walk();

