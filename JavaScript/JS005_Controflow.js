// if ... else if ... else
let a = 13, b = 3, c = 9;
let max = 0;
if (a > b) { // true
    if (a > c) { // true
        max = a;
    } else { // false
        max = c;
    }
} else { // false
    if (b > c) {
        max = b;
    } else {
        max = c;
    }
}
// max = a > b ? a > c ? a : c : b > c ? b : c;
console.log(max);
console.log("-----------------------");


// loop
// for (let i = 0; i < 5; i++) {} 
// while (condition) {}
// do {} while (condition);

// for ... in: loop through the properties of an object 
let arr = [a, b, c];
for (let i in arr) {
    console.log(`i = ${i}, arr[${i}] = ${arr[i]}`);
}
console.log("-----------------------");
// for ... of: loop through the values of an iterable object
for (let i of arr) {
    console.log(`i = ${i}`);
}
console.log("-----------------------");

// return : ends the function and back to the caller
// break : stop the loop
for (let i = 0; i < 10; ++i) {
    if (i > b) { // stop the loop when i == 4
        break; 
    }
    console.log(`i = ${i}`); // 0 1 2 3
}
console.log("-----------------------");
// continue: skip this iteration and continue to the next one
for (let i = 0; i < 10; ++i) {
    if (i&1) { continue; } // print only even numbers
    console.log(`i = ${i}`); // 0 2 4 6 8
}
console.log("-----------------------");


// switch ... case
/*
switch (expression) {
    case value1:
    case value2:
        ...
    case valueN:
        statements;
        break;
    
    case valueN+1:
    case ... :
        statements;
        break;
        
    default:
        statements;
    }
*/
let month = 3;
switch (month) {
    case 2: 
        console.log(`${month}th month in the year has 28 days`);
        break;
    case 4: case 6: case 9: case 11:
        console.log(`${month}th month in the year has 30 days`);
        break;
    default:
        console.log(`${month}th month in the year has 31 days`);
}