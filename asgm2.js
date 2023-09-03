// ******** Double using callback ********
function h(arr, f){
  const doubleArray =  arr.map(num => {
    return f(num)
  }) 
  return doubleArray
}
let arr1 = [2,3,4,5]
function f(num){
  return num*2
}
const doubleArray = h(arr1, f)
console.log(doubleArray);

// ********* String Manipulation.*********
function manipulateString(inputString, callback){
    const manipulatedString = inputString.toUpperCase()
    callback(manipulatedString)
}
function logString(manipulatedString){
    console.log(`"The manipulated string is: ${manipulatedString}`);
}
manipulateString("hello world!", logString);

// ************** Age in Days ***********
const person = {
  firstname:"Ashu",
  lastname:"singh",
    age: 18,

}
function ageInDays(personObject, callback){
   const fullname = `${personObject.firstname} ${personObject.lastname}`
   const ageInDays = personObject.age *365
   callback(fullname, ageInDays)
}
function logResult(fullname, ageInDays){
    console.log(
        `Person full name is ${fullname} and their ageInDays is ${ageInDays}`);
}
ageInDays(person, logResult)

// ******* Arrange in alphabetical order **********
var books = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        year: 2011
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        year: 2005
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        year: 2016
    }];
  function logTitle(titles){
    titles.sort()
    console.log(titles.join(", "));
  }
  function extractTitle(books, callback){
    const title = books.map((book) => book.title)
    callback(title)
  }
  extractTitle(books, logTitle)

// ******* Greeting Promise **********
function greet(name){
    return new Promise((resolve)=>{
        const greeting =`Hello, ${name}!`
        resolve(greeting)
    })
}
greet("Mithun").then((message)=>{
    console.log(message);
}
  
)

// ******* Fetch results asynchronously *********
async function fetchData(){
    const response = await
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    const data = await response.json()
    console.log(data);
}
fetchData()

// ******* Error Handling *******
fetch("https://jsonplaceholder.typicode.com/posts/123456789").then
((response)=> {
    if(!response.ok){
        throw new Error("Network response is not ok")
    }
    return response.json()
})
