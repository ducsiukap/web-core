// Variables
/* Syntax to declare a variable:
    var/let/const variable_name [= value];
*/

// var: can be re-declared and updated
var x = 10;
x = 15; // updated
var x = 20; // re-declared, same variable (likely change value of x)
// x = 20

// let: can be updated but not re-declared
let l = 10;
l = 15; // updated
// let l = 20; // error

// const: can't be updated or re-declared
const c = 20;
//c = 15; // error
// const c = 25; // error


// Datatypes
/*
- primitve types: 
    + number (int, float, NaN, Infinity)
    + string
    + boolean: truly / falsy (false, 0, "", null, undefined, NaN)
    + undefined: declared but not assigned
    + null
    + symbol
    + BigInt
- Non-primitive types:
    + object
    + array (a special object)
    + function
*/
// object: 
let obj = { attribute: "value"/*, att2:value2, ...*/ };
// array: array can hold multiple values of any type
let arr = [1, 2,,,, "vduczz", 3.14]; // 1, 2, undefined, undefined, undefined, "vduczz", 3.14
// function:
function getType(x) { 
    console.log("type of ", x, " is: ", typeof(x)); // use typeof(variable) to get datatype
}


// main()
getType(obj);
getType(arr);
getType(getType);
getType(3);
getType(5.2);
getType("Hello World");

// use ... to parse an array into separate elements
console.log("-----------------------");
let newArr = [...arr, "new element"]
console.log(newArr);