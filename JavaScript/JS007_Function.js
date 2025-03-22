// syntax of traditional function
// funtion functionName(parameterlist) {}
function println(msg) {
    console.log(msg);
    console.log("from println()");
    console.log("-----------------------");
    // return value or undifined
}

println("vduczz");


/*
Function in JS is first-class funtion:
    - a function can be assigned to a variable (annonymous function)
    - can become parameter or return of another function
    - can be stored in array, ...
*/
//  assigne a function to a variable
const max = function(a, b) { 
    if (a > b) return a;
    return b;
}
println(max(99, 12));

// become parameter 
const log = function(func, value) {
    console.log(`Calling ${func.name}(${value})`);
    func(value);
}
log(println, "Hi there!");

// return of another function
const add = function(a, b) { return a + b; }
const sub = function(a, b) { return a - b; }
const callAFunction = function(func) {
    return func;
}
let a = 10, b = 20;
println(callAFunction(add)(a, b));
println(callAFunction(sub)(a, b));
println(callAFunction(println)("Hello")); // println(Hello), return undifined => println(undefined)



// Arrow function (Lambda expression)
const div = (a, b) => {
    if (b == 0) {
        console.error("Error: Cannot divide by zero");
        return;
    }
    return a / b;
}
console.log(div(10, 2)); // 5
console.log(div(1, 0)); //Error: Cannot divide by zero
                        // undefined


// Immediately Invoked Function Expression (IIFE) 
(function () { console.info("%cthis is IIFE function", "color: yellow"); })(); //this is IIFE function

