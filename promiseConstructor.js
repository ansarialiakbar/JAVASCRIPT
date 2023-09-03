function createPromise(){
   return new Promise(function exec(resolve, reject){
    setTimeout(function f(){
        console.log("timer done");
        // resolve(value)
        reject(value)
        
    })
   })
      
}

console.log("start");
let x = createPromise();
console.log("got a newe promise");
x.then(function f(value){
    // x.then is registration
    // x.then means whenever Promise object resolve then I will call this f function
    console.log("promise done", value);
}).catch(function f(value){
    console.log("handled", value);
}).finally(function f(){})
console.log("end");