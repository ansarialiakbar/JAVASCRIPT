// const mySet  = new Set()
// mySet.add(1)
// mySet.add(2)
// mySet.add(3)

// console.log(mySet);

// **** Creating a set *****
let myArray = [1,2,3,4,2,4]
let myArray1 = [5,6,7,8]
let newSet = new Set([...myArray , ...myArray1])
console.log(newSet);

// **** SPREAD OPERATOR ******
// const a = [1,2,3]
// const b = [4,5,6]
// let c = [...a , ...b]
// console.log(c);

// **** REST OPERATOR *******

// (function manyArgument9(...args){
//     let finalarr = args.map( e => e)
//     console.log(finalarr);
// })(1,2,3);

// **** iterating set ****
// for (const item of mySet){
//     console.log(item);
// }
// const myArray = Array.from(mySet)
// console.log(myArray);