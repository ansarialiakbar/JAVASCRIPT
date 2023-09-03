// forEach () method call a function to element of an array
let arr = [2,3,4,5]
// arr.forEach(function(element, index,  array){
//     console.log(index, element, array);
// })
// Using arrow function
// arr.forEach((element, index,  array) => {
//     console.log(index, element, array);
// })
const heros = ["shaktiman", "doga",  "maniraj", "nagraj"]
// heros.forEach((el)=> {
//     console.log(el.toUpperCase());
// })

// heros.forEach((el)=> {
//     console.log(el.toLowerCase());
// })


// Similarly we can use map as forEach
arr.map(function(element, index,  array){
    console.log(index, element, array);
})