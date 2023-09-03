let marvalHeros = ["thor", "spiderman"]
let dcHeros     = ["batman", "superman"]
let heroPower ={
    thor: "hammar",
    spiderman: "sling",
    getSpidermanPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}
// in the Object we have enjected our method `mohan` so that when we try to access mohan in the array `marvalHeros` then array has prototype of Object and Object has method of mohan so that we can access.
// array -> Object and Object has this method
// Even everything in the javascript is a "Object"
Object.prototype.mohan = function(){
    console.log(`mohan is present`);
}

Array.prototype.himohan = function(){
    console.log(`hello`);
}
console.log(marvalHeros.himohan());
console.log(heroPower.himohan()); // this property is not injected in array it is in object
//   ***** Inharitance ****
//  const user ={
//     name: "topname",
//     email: "@123"
//  }
//  const teacher ={
//     makingVideos: true
//  }
//  const teachingSupport ={
//     isAvailable: false
//  }
//  const TAAssistent ={
//     mskeAssignment: "js assignment",
//     fulltime: true,
//     __proto__:teachingSupport // duble underscore
//  }
// console.log(TAAssistent.isAvailable);
// giving property of user to teacher
// console.log(teacher.__proto__ = user);

// *** New method by which you can inherite ****
// Object.setPrototypeOf(teachingSupport, teacher) // giving all property of a teachingsupport to a teacher
// console.log(Object.setPrototypeOf(teachingSupport, teacher));

// **** String *** 
// String.prototype.truelength = function(){
//     console.log(`true length is ${this.trim().length}`);
// }
// "anurag    ".truelength()
// "hitesh    ".truelength()