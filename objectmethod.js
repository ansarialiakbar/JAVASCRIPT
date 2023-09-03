// extracting keys, value from object
let emp = {
    id : 100,
    name : 'ali',
    age: 20


};
let keys = Object.keys(emp);
console.log(keys);
let value = Object.values(emp);
console.log(value);
//Extracting keys and value  together with the help of "entries"
console.log(Object.entries(emp));

// if you dont want to update,you can't add new value then use freeze(not allow deletion ,add, update)
// Object.freeze(emp);
// emp.address = 'xyz';
// emp.id = 107;
// console.log(emp);
// not allow to add and delete only allow update then use "seal"

Object.seal(emp);
emp.id = 102;
console.log(emp);

// copy old object into new object
let o = Object.assign({},emp)
console.log(o);
// copy old object along with some new entries
let p = Object.assign({x:32, newname:'xyz'},emp);
console.log(p);