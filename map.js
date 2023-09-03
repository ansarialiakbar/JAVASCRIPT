// const map1 = new Map()
// map1.set('a',1)
// map1.set('b',2)
// map1.set('c',3)
//  console.log(map1.size);
// console.log(map1.get('b'));
// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
// console.log(contacts.get("Jessie"));
// console.log(contacts.delete("Jessie"));
// console.log(contacts.keys());

// ******** Maps can be iterated using For... Of loops *********
// const myMap = new Map()
// myMap.set(0 , "zero") 
// myMap.set(1 , "one") 
// for (const[key , value] of myMap){
//     console.log(`${key} = ${value}`);
// }
// for (const value of myMap.values()){
//     console.log(value);
// }

// ********** Using forEach 
// myMap.forEach((value,key) => {
//     console.log(`${key} = ${value}`);
// });

// **** Relation between array and object ******
// const array = [
//     ["key1", "value1"],
//     ["key2", "value2"],
// ];
// const myMap = new Map(array)
// console.log(myMap.get("key2"));
// console.log(Array.from(myMap));    // Will show you exactly the same Array as kvArray
// console.log(...myMap);
// console.log(Array.from(myMap.keys()));
// console.log(myMap.keys());


// *******  Maps can be merged maintaining key uniqeness *****
const first = new Map(
    [
        [1 , "one"],
        [2, "two"],
        [3, "three"],
    ]
)
const second = new Map([
    [1, "uno"],
    [2, "dos"],
  ])
  
// Merge two maps. The last repeated key wins.
// Spread syntax essentially converts a Map to an Array
const merged = new Map([...first , ...second])
console.log(merged.get(1));
console.log(merged.get(2));
console.log(merged.get(3));