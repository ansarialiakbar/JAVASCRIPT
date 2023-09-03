// ***** Type  conversion *****
function convertToNumber(args) {
    try {
       const num = Number(args)
       if(Number.isNaN(num)){
        throw new Error("Invalid number")
       }
       return num;
    } catch (e) {
        return error.message;
    }
    
}
console.log(convertToNumber("abc"));
console.log(convertToNumber("1234"));

// ***** Building robust function in javascript *********
function getPerson(obj){
    try{
        if(typeof obj != "object" || !obj.name || !obj.age){
            throw new Error("Invalid parameter type")
        }
        return `Name: ${obj.name}, age: ${obj.age}`
    }
    catch(error){
        return error.message;
    }
}
console.log(getPerson({ name: "Mithun", age: 20 }));
console.log(getPerson({ name: "Mithun" }));
console.log(getPerson(["name", "Mithun"]));

// ******* Car Description class ******
 class Car {
    constructor(c,  m,  y){
        this.c = c
        this.m = m
        this.y = y
    }
    getDescription(){
        return `This  is a ${this.y} ${this.c} ${this.m}`
    }

 }
 const myCar = new Car("Skoda", "Rapid", 2022);
console.log(myCar.getDescription()); 

// ********** Employee Class Chalenge ***********
class Employee{
    constructor(name, position, salary){
        this.name = name
        this.position = position
        this.salary = salary
    }
    getSalary(){
        return this.salary
    }
}
const employee1 = new Employee ("Mohan", "Sftware Engineer", 70000)
console.log(employee1.getSalary());

// ********** Implementing a person class with default value ********
class Person{
    constructor(name = "unknown",  age = 0){
        this.name = name
        this.age = age
    }
    getDetail(){
        return `Name: ${this.name},  Age: ${this.age}`
    }
}
const person1 = new Person("Sahid", 18)
console.log(person1.getDetail());

const person2 = new Person()
console.log(person2.getDetail());

// **********  Using static method to Add Two number with calculator class ******
class Calculator{
    static add(num1, num2){
        return num1+num2 
    }
}
const result = Calculator.add(4, 5)
console.log(result);

// ******* Password Checker *************
class User {
    constructor(username, password) {
      this.username = username;
      this.password = password;
    }
  
    getPassword() {
      return this.password.replace(/./g, "*");
    }
  
    setPassword(newPassword) {
      let containsNumber = false;
      let containsUppercase = false;
      for (let i = 0; i < newPassword.length; i++) {
        const char = newPassword.charAt(i);
        if (!isNaN(char)) {
          containsNumber = true;
        } else if (char === char.toUpperCase()) {
          containsUppercase = true;
        }
      }
      if (newPassword.length >= 8 && containsNumber && containsUppercase) {
        this.password = newPassword;
      } else {
        console.log(
          "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
        );
      }
    }
  }
  const user = new User("Rahim", "Password123");
  console.log(user.getPassword());
  user.setPassword("Mypassword123")
  console.log(user.getPassword());
  user.setPassword("Mypassword")
  console.log(user.getPassword());

  


// ******** Adding a mthod to prototype ********
function Student(name){
    this.name = name 
} 
Student.prototype.printDetail = function(){
   console.log(  `Hello my name is ${this.name}`);
}
const student = new Student("Mithun")
student.printDetail()

// ********** Check the presence using closure **********
function numberCheck(numbers){
    return function(num){
        return numbers.includes(num)
    }
}
const arr = [2,1,3,4,5,6]
const  checkNum = numberCheck(arr)

console.log(checkNum(5));
console.log(checkNum(8));

// ********* Filter by category ********
function filterByCategory(products){
    return function(category){
        return products.filter(function(product){
            return product.category === category
        })
    }
}
var products = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
  ];
  var clothingProduct = filterByCategory(products)("Clothing")
  console.log(clothingProduct);