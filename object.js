// creating an object
let obj = {id: 100, name: "ali", age: 20 };
console.log(obj);
// creating a new object
let emp = new Object();
console.log(emp);
// assigning a new property in this new object
emp.id = 102;
emp.name = "akbar"
console.log(emp);
// creating another way new object
function fun(i,n,s){
    this.id =i;
    this.name = n;
    this.salary =s;
}
let s = new fun(105,"ashif",1000)
console.log(s);

// Accesing , updating key value with the help of dot operator(.) and square bracket [].
console.log(emp.id);
console.log(emp["name"]);
emp['name'] = 'zeeshan';
emp['id'] = 98;
console.log(emp);
// deleting a property
delete emp.id;
console.log(emp);
