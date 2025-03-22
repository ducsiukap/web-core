// Higher Order Function is a function that
// take another funtion as the input (argument) or the output (return)

//  create:
function higherFunction1(f/*another function as argument*/, args) {
    return f(args);
}
function higherFunction2 () {
    return higherFunction1; // another function as return 
}
console.log(higherFunction1( (x)=>x*x , 2)); // (f, g) 
console.log(higherFunction2()( (user)=>`Hello, ${user.name}`, {name:"vduczz", age: 21} ));
console.log("---------------------");



// Some popular higher order funcion.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// map( funtion(item) {...} )
console.log(arr.map((item) => item*item)); // [1, 4, 9, 16, .....]
console.log("---------------------");


// filter(function(item) => {... return true/false})
console.log(arr.filter( (item) => item&1)); // [1, 3, 5, 7, 9]
console.log("---------------------");


// reduce(function(acc, item) => {....}) // acc is accumulator value.
console.log(arr.reduce((total, item) => total += item)); // 55 (sum(arr))
console.log("---------------------");


// some( (item) => {condition..} ) // checks if at least one array element satisfies a condition
// every( (item) => {condition} ) // checks if all element satisfies a condition
// console.log(arr);
const isPrime = (n) => {
    for (let i = 2; i*i <= n; ++i) {
        if (n%i == 0) return false;
    }    
    return n > 1;
}
console.log(arr.some( (item) => item>=0 ), arr.some( (item) => isPrime(item))); // true true
console.log(arr.every( (item) => item>=0 ), arr.every( (item) => isPrime(item))); // true false

// forEach( (item) => {...})
// find( (item) => {condition...} ) // first element that matched the condition