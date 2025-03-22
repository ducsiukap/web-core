// Type conversion:
/*
Number(x) -> convert x to number
String(x) -> convert x to string
Boolean(x) -> convert x to boolean
*/
let intV = 5, strV = "3.14", boolV = true;
console.log(Number(strV)); // 3.14
console.log(String(intV)); // "5"
console.log(String(boolV)); // "true"
console.log(Number(boolV)); // 1
console.log("-----------------------");


// Type coercion:
//  String + Number -> String (+ operator => concatenation)
console.log(`"vduczz, " + 20yo = ${"vduczz, " + 20}`); 
// other operations: -> mathematic expression! (-, *, /, %, ==, >, ......)
console.log(`"20" - 5 = ${"20" - 5}\n"20" * 5 = ${"20" * 5}`); // 15, 100
console.log(`"20" > 5 is ${"20" > 5}\n"2" < 5 is ${"2" < 5}`); // true, true

// Boolean + Number -> (true = 1, false = 0) + Number -> Number
console.log("-----------------------");


// Comparision of Different Datatypes:
// 1. Number vs String -> String is converted to Number (a value or NaN)
console.log((intV = 5, strV = "5", intV == strV)); // true
