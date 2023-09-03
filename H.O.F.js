// Higher Order Function :  A function that returns a function or takes other functions as arguments is called a higher-order function.
function sayhello (){
    return () => {
        console.log("welcome");
    }
}
let cons = sayhello();
console.log(cons);
// it will return a anonymous function
cons();
// now it will return welcome
const higherOrder = n => {
    const oneFun = m =>{
        const twoFun = p =>{
            return m+n+p
        }
        return twoFun
    }
    return oneFun
}
// syntax to run this function
higherOrder(2)(30)(4)