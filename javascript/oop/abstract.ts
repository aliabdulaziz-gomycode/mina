abstract class AStudent {
    doSomething() {
        console.log("I'm doing something!")
    }

    // This is an abstruct method
    abstract study();
}

// You cannot instantiate an abstract class
// let s = new AStudent();

// But you can inherit it.
class Student extends AStudent {
    study() {
        console.log("study")
    }
}

