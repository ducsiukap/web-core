// console.log()
console.log("use console.log(expression) to print the value of expression");
console.log("-----------------------");


// console.error() to print error messages, font color: red
console.error("this is an error message");
console.log("-----------------------");


// console.warn() to print warning messages, font color: yellow
console.warn("this is a warning message");
console.log("-----------------------");


// console.info() logs informational messages
console.info("this is an informational message");
console.log("-----------------------");


// console.table([list of obj])
console.table([1, 2, 3, {name:"vduczz", age: 21}, {name:"nddat", age: 21}]);
console.log("-----------------------");

// console.time(label) and console.timeEnd(label) -> determine how long a block of code takes to run
console.time("label"); // start the timer
console.log("HelloWorld!");
console.timeEnd("label"); // end the timer
console.log("-----------------------");


// console.assert(expression, message) -> write an error message to the console if the expression is false
console.assert(false, "error logged by console.assert()");
console.log("-----------------------");


// console.count(label) -> log the number of times that label is called
console.count("label");
console.count("label");
console.log("-----------------------");


// console.clear() -> clear the console
// console.trace() -> print the stack trace, who calling me ?
function a() {
    b()
}
function b() {
    console.trace()
}
a() // heheh
