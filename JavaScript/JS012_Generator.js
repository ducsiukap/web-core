// A generator function is a special type of function 
// that can pause its execution at any point and resume later by calling next() method

// syntax
function* Counter(start, end, step) {
    for (let i = start; i < end; i += step) {
        yield i; // pause this function's execution when meet yield and return value
        // when call next(), this function will continue execute from this.
    }
}

const it = Counter(1, 10, 1); // make iterator
// console.log([...it]);
let item = it.next();
while (item.done == false) { 
    console.log(item.value); 
    item = it.next();
}

const fibonacci = {
    limits: -1,
    setLimits: function(limits) { this.limits = limits; },
    *[Symbol.iterator]() {
        let [a, b] = [0, 1];
        while (a <= this.limits) {
            yield a;
            [a, b] = [b, a + b];
        }
    }
}
fibonacci.setLimits.bind(fibonacci);

fibonacci.setLimits(1000);
console.log([...fibonacci]);

fibonacci.setLimits(10000);
console.log([...fibonacci])


// create inifity sequence
function* Inifity() {
    for (let i = 0; true; ++i) { yield i; }
}
const iter = Inifity();
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());