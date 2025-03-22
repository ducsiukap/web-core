// Binding 'this' attribute of a function with a specific object
function sayHi() {
    console.log(`Hi ${this.name}!`);
}

const user1 = {
    name: "vduczz",
    age: 21
}

const user2 = {
    name: "nddat",
    age: 21

}
// .bind(obj) => return a new function with this = obj, call after.
let helloUser = sayHi.bind(user1);
helloUser(); // Hi vduczz!
helloUser = sayHi.bind(user2);
helloUser(); // Hi nddat!
console.log("---------------------------------------------------");


function abc(arg1, arg2) {
    console.log(`arg1 = ${arg1}, arg2 = ${arg2}`);
    console.log(`this.name = ${this.name}`);
}
// .call(obj, arg1, arg2, ...) => Immediately call function with this = obj, and pass arguments, not return new function
abc.call(user1, 1, 2); 
abc.call(user2, [3, 4]); // arg1 = [3, 4], arg2 = undefined
console.log("---------------------------------------------------");

// .apply(obj, [arg1, arg2, ...]) => Immediately call function with this = obj, and pass arguments in array, not return new function
// abc.apply(user1, 1, 2); // error
abc.apply(user2, [3, 4]);