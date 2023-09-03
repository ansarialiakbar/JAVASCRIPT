function createPromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("timer done");
            resolve(10)
        //   reject(5);
        }, 3000)
    })
}

// async function consume(){
//     return 10
// }
// console.log(consume()); // it will return a Promise {10}
async function consume(){
    console.log("inside function");
    const response = await createPromise()
    console.log(response);
}
console.log("start");
consume()
console.log("end");