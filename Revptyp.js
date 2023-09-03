let p = {
    // name: "ali",
    age: 23,
    getMethod: function(){
        console.log(`This is a data of a user name is ${this.name}, and age ${this.age}`);
    }
}
// console.log(p.getMethod());
let a = {
    run: () =>{
        console.log("this is true");
    }
}
p.__proto__ = a // giving the property of a to the p
a.__proto__ = {
    name: "asgar"
}
console.log(p.name); // first it will check in the object p if not found then it will goes to a either not found then it will goes to it prototype .
// prototype->prototype->prototype->.....