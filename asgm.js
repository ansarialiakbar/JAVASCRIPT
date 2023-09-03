// 01: Count the occurences

function countWord(str){
    const words = str.split(" ")
    const map  = new Map()
    for(let word of words)
    {
        if(map.has(word)){
            console.log(map , map.get(word)+1);
        }
        else{
            map.set(word , 1)
        }
    }
     return map;
}
let string = "I am a student.I am learning web development from pw skills"
console.log(countWord(string));

// **** Creating a new set from an array*****

function uniqeElement(arr){
    return new Set(arr)
}
console.log(uniqeElement([1,2,3,2,3,4,5,4]));

// **** Swap the value ******
let a = 5;
let b = 10;
function swap(p , q){
    [p , q]= [q , p]
    return [p , q]
}

[a , b] = swap(a , b)
console.log(a , b);

// ***** Access random element ******

function extract(arr) {
  const [first, second, , , last] = arr;
  return [first, second, last]
}
let array  = [1,2,3,4,5]
console.log(extract(array));

// *******  Min and Max  value *******
function maxMin(arr){
   return {
    max: Math.max(...arr),
    min: Math.min(...arr),
   };
}
let array = [2,3,45,1]
console.log(maxMin(array));

// ***** Nested Object
const person = {
    name: "mohan",
    age: 23,
    address:{
        street: "21 manmohan park,katra ",
        city: "Allahabad",
        state:  "U.P",
    },

};
function object(obj){
  const  {
    name,
    address:{street},
  } = obj;
  return { name , street};
}

console.log(object(person));