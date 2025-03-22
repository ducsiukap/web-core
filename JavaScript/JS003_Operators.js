// Arithmetic Operators : + - * / % ++ --
let a = 5, b = 1;
console.log(`${a} % ${b} =`, a % b); // 5 % 1 = 0
console.log(`${a}++ =`, ++a); // a = 6
console.log("-----------------------");


// Assigment Operators: = += -= *= /= %=
a += b; // a = a + b = 6 + 1 = 7


// Comparison Operators: == === != !==, > < >= <=
/* 
== : same value, auto convert type of two operands to the same type.
=== : same value and same type
*/
let c = "7", d = 7, e = "abc";
// a=7
console.log(`a == c is:`, a == c); // true, "3" is converted to 3
console.log(`a === c is:`, a === c); // false
console.log(`a == d is:`, a == d); // true
console.log(`a === d is:`, a === d); // true
console.log(`a == e is:`, a == e); // false, "abc"  => NaN
console.log("-----------------------");


// Logical Operators: &&(and) ||(or) !(not)
const logic_value =  (a == c) && (a === d);
console.log(`(${a} == "${c}") && (${a} === ${d}) is ${logic_value}`); // false
console.log("-----------------------");


// Bitwise Operators: &, |, ^(XOR), ~, <<, >>, >>>
/* difference between >> and >>>:
    - >>: sign-propagating right shift
    - >>>: zero-fill right shift
    ex: -2 >> 1 = 1000 0000 0000 0000 0000 0000 0000 0010 >> 1 = 1000 0000 0000 0000 0000 0000 0000 0001 = -1 
        -2 >>> 1 = 1000 0000 0000 0000 0000 0000 0000 0010 >>> 1 = 0100 0000 0000 0000 0000 0000 0000 0001 = 2147483647
    *number in JS is signed 32-bit integer.
*/
console.log(`-2 >> 1 =`, -2 >> 1); // -1
console.log(`-2 >>> 1 =`, -2 >>> 1); // 2147483647
console.log("-----------------------");


// Conditional (Ternary) Operator: condition ? expr1 : expr2
let max = (a > b) ? a : b;
console.log(`max(${a}, ${b}) = (${a} > ${b} ? ${a} : ${b}) = ${max}`); // 7
console.log("-----------------------");


// Comma Operator: (expr1, expr2, ..., exprn) -> return rightmost expression (exprn).
let myName = (a = "vd", b = "uc", c = "zz", a + b + c);
console.log(`myName = ${myName}`); // vduczz
console.log("-----------------------");


// relational operators: in, of, instanceof
/* 
for ... in: loop through the properties of an object (index if object is sequence)
for ... of: loop through the values of an iterable object 

x in object: true if object has property x
obj instanceof class: true if object is an instance of a class
*/
console.log("for ... in: ");
for (let val in myName) console.log(val); // 0, 1, 2, 3, 4, 5
console.log("for ... of: ");
for (let val of myName) console.log(val); // v, d, u, c, z, z
console.log("[1, 2] instanceof Array is", [1, 2] instanceof Array); // true
console.log("-----------------------");


// BigInt: use n at the end of number to declare BigInt
let intValue = 1232834382943248328329474357843875; // a floating point number, not an integer number
let bigInt = 1232834382943248328329474357843875n; // integer number
console.log(`intValue = ${intValue}, bigInt = ${bigInt}`);
console.log("-----------------------");


// Chain Operators: ?. (optional chaining), ?? (nullish coalescing)
/* 
- obj?.attr: safely accesses to a attribute of an object
  => return obj.attr if attr is included inside obj, otherwise return undefined
- expression ?? value: return value if expression is null or undefined, otherwise return expression
*/
const user = {
    name: "vduczz",
    age: 21,
    address: {
        city: "Hanoi",
        country: "Vietnam"
    },
    pet: null
}
console.log(user?.address?.city); // Hanoi
// console.log(user.hobbies); // error, terminate the program
console.log(user?.hobbies); // underfined

console.log(user.pet ?? "No pet"); // No pet
console.log(user.hobbies ?? "No hobbies"); // No hobbies