let a = ["1","2","3" ,"4", "5","6", "7"];
// adding at last position
// a.push(6,7);
// console.log(a);
// removing from last position
// a.pop();
// console.log(a);

// removing from starting position
//  let b = a.shift();
// console.log(b);

// adding at starting position
// a.unshift(8);
// console.log(a);

// concate two arrays
// let b = [6,7,8,9];
// let c = a.concat(b);
// console.log(c);

// to convert an element of array into string 
// let b = a.join("");
// console.log(b);
// let c = a.join("$");
// console.log(c);

// To extract particular array from an array
// console.log(a.slice(2,5));

// adding an element in the array in place of deleted or undeleted.
// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// syntax: splice(start, deleteCount, item1, item2, itemN)
// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
a.splice(3,2, "pw","skill", "sigma");
console.log(a);
// a.splice(1,2,8);
// console.log(a);
// a.splice(1,2,7,8);
// console.log(a);
// output [1,7,8,4,5]
// a.splice(1,2,7,8,9);
// console.log(a);
// let p = [1,2,3]
// let q = [5,6,7]
// console.log(p.concat(...q));

// *** Nested array destructuring ****
// var numbers = [5, [2, 3, 4], 12, 14];
// var  [t, [x, y, z]] = numbers;

// console.log(x); // Output: 2
// console.log(y); // Output: 3
// console.log(z)
