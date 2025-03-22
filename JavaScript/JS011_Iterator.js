// An iterator is any object which having a next() method
// next() method return an object with two properties: {value, done?}

function makeIterator(start = 0, end = Infinity, step = 1) {
    let nextValue = start;

    return {
        // syntax
        next() {
            let result;
            if (nextValue < end) {
                result = {value: nextValue, done: false};
                nextValue += step;
            } else {
                result = {value: undefined, done: true};
            }
            return result;
        }
    }
}

const it = makeIterator(1, 10, 3);
let value, done = false;
do {
    ({value, done} = it.next());
    console.log(value);
} while (done == false);
// let arr1 = [...makeIterator]; 
// console.log(arr1);
// for (let val of makeIterator) { console.log(value); } // can't work with for...of

console.log("------------------");
// Symbol.iterator: returns the iterator for an object
// can work with for...of, [...spreadArray], ...
const makeIterator2 = {
    i: 1,
    // syntax: [Symbol.iterator]()
    [Symbol.iterator]() {
        let that = this;
        return {
            next() {
                let result = {value: undefined, done: true};
                if (that.i < 10) {
                    result = {value: that.i, done: false};
                    ++that.i;
                }
                return result;
            }
        }
    }
}
// for (let val of makeIterator2) { console.log(val); }// okey to run
let arr = [...makeIterator2];
console.log(arr);

console.log("------------------");
const arr2 = [1, 2, 3, 4, 5];
// or
arr2[Symbol.iterator] = function() {
    let idx = 0;
    return {
        next: () => {
            if (idx < this.length) 
                return {value: this[idx++]*100, done: false};
            else return {value: undefined, done: true};
        }
    }
}
console.log([...arr2]); // 100 200 300 400 500
for (let i = 0; i < arr2.length; ++i) console.log(arr2[i]); // 1 2 3 4 5
console.log("------------------");

// or
const arr2It = arr2[Symbol.iterator]();
let item = arr2It.next();
while (item.done == false) {
    console.log(item.value);
    item = arr2It.next();
}


