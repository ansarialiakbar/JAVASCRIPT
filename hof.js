// const higherOrder = n => {
//     const oneFun = m => {
//         const twoFun = p => {
//             return m + n + p
//         }
//         return twoFun
//     }
//     return oneFun
// }
// console.log(higherOrder(3)(4)(5));

// use
function hello(){
    console.log("a");
}
// setTimeout(hello,1000)
setInterval(hello,2000)