let obj = {
    x: 10,
    fun(){
        console.log(this.x); // here this refer to calling context that is obj, and in obj x is equal to 10 so this.x equal to 10
    }
}
obj.fun()

// ******* Arrow function *******
let product = {
    y:12,
    fun1:() =>{
        console.log(this.y); // outcome will undefined as this keyword is not applicable in arrow function
    }
}
product.fun1()
// *****  example ***
let obj1 = {
    x1:5,
    fun(){
        y = {
            gun:() =>  {
                console.log(this.x1); // op is 5
            }
        }
        y.gun()
    }
}
obj1.fun()