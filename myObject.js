// **********Data Type -> Symbol **********
// A Symbol is a unique and immutable primitive value and may be used as the key of an Object property (see below). In some programming languages, Symbols are called "atoms". The purpose of symbols is to create unique property keys that are guaranteed not to clash with keys from other code
const component1 = Symbol("ali")
const component2 = Symbol(2)
obj = {
    [component1]: "ali",
    [component2]: "2"
}
// access  value of key(component1 and component2) 
console.log(obj[component1]);
console.log(obj[component2]);
// access key value pair of obj
console.log(obj);
