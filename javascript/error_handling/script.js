// to prevent the application from crashing

try {
    function sum(num1, num2) {
        if (isNaN(num1) || isNaN(num2)) {
            throw Error("num1 and num2 must be numbers!");
        }

        return num1 + num2;
    }

    var x = sum("true", 2);
    console.log(x);
} catch (e) {
    // hadling error
    console.log(e);
}

console.log("System is still running!");