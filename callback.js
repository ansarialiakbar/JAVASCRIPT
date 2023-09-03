// function hof(x, fn) {
//     // hof -> higher order function
//     // fn -> callback function
//     console.log(x);
//     fn(x*x)
    
// }
// hof(5, exec)
// function exec(n){
//     console.log("square of x is", n);
// }  // Synchronous piece of code

// ********* Asynchronous piece of code
console.log("start");
setTimeout(function f(){
    console.log("timer start");
}, 0)
console.log("end");

/*
**** java script browser aur Node js ke ander alag-alag capability provide krtya hai jub run krte hai
*/