// Object Oriented Programming (OOP):
// Encapsulation
// Inheritance
// Polymorphism
// Abstraction - in JavaScript there is not abstract class / interface

// Encapsulation: ---------------------------------------------------------
// refers to the bundling of data with the 
// methods that operate on that data.
// Usually done using classes.

class Person {
    // The constructor is a method used to create objects.
    // This constructor for example will create objects of
    // type Person.
    constructor() {
        // Data / properites / state
        // The difference between the properties and regular
        // variables is that the properies are encapsulated variables.
        this.name = null;
        this.age = null;
    }

    // Methods:
    // The difference between methods and functions is
    // that the functions are defined in the global scope.
    // But methods are encapsulated functions.

    greet() {

    }
}

let p = new Person();

p.greet();


// Inheritance -------------------------------------------------------
// Parent (Base) + Child
class Vehicle {
    constructor(speed, type) {
        this.speed = speed;
        this.type = type;
    }

    accelerate() {
        console.log("I'm moving!");
    }

    stop() {
        console.log("I'm stopped!");
    }
}

// We use extends to make inheritance
class Bus extends Vehicle {
    constructor(speed) {
        super(speed, "Bus"); // to call parents constructor
    }
} 

let bus = new Bus(200);

console.log(bus);

bus.accelerate();
bus.stop();


// Polymorphism: ------------------------------------------------------
// Many - forms
class Animal {
    speak() {
        console.log("I'm speaking!");
    }
}

class Dog extends Animal {
    speak() {
        super.speak();
        console.log("Barking!")
    }
}

let d = new Dog();

d.speak();

// Abstract: ------------------------------------------------------
// as there is no abstract class in JavaScript we will use typescript
// to explain this concept.
