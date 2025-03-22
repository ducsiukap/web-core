// the prototype chain: 
// The chain ends when we reach a prototype that has null for its own prototype.
 
function Dog(name) {
    this.name = name;
    this.bark = () => { console.log("bark, bark!"); }
}

const object = new Dog("Bull");
let obj = object;
do {
    obj = Object.getPrototypeOf(obj);
    console.log(obj); 
} while (obj);
console.log("--------------");
// object (Dog) -> Dog.prototype {} -> Object.prototype {} -> null
// it means that: when u call a attribute or method of an object, 
// if the property can't be found in the object itself, the prototype is searched for the property. 
// If the property still can't be found, then the prototype's prototype is searched, 
// and so on until either the property is found, or the end of the chain is reached, 
// in which case undefined is returned.

console.log(object.toString() === Object.prototype.toString.call(object));
console.log("--------------");
// Dog.prototype: name, bark() => to Object.prototype
// Object.prototype has toString() method => call Object.toString with this=object!
// 
// if reach to null prototype -> then JavaScript concludes that the property does not exist.
// console.log(object.hehe()); // error

// add property to class/function
let o1 = new Dog("o");
console.log(o1);
Dog.prototype.hehe = () => { console.log("Hehehe!"); }// add to Dog.prototype, not become Dog's member
o1.hehe(); 
// Dog's member: name, bark()
// Dog.prototype's member: hehe(), ...
console.log(o2.hasOwnProperty("hehe")); // false
console.log(Dog.hasOwnProperty("hehe")); // false
console.log(Dog.prototype.hasOwnProperty("hehe")); // true
/**tóm lại .prototype của object đơn giản là nó đi tìm nơi chứa thuộc tính/phương thức cần gọi hoặc là null 
 * và khi thêm phương thức/thuộc tính vào đối tượng thì nó phải thêm vào hàm/lớp định nghĩa của đối tượng đó 
 * và phần được thêm vào thì sẽ nằm ở .prototype của hàm/lớp 
 * chứ không phải trở thành thành viên của lớp 
 */
