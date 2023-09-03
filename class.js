// class
class product{
// properties -> variable -> data member
//   name ;
//   price;
//   rating;
// ******   to define a constructor use keyword "Constructor" *******
 constructor(n , p , r){
    console.log("calling this constructor");
    // assign value to the data member use key word "this"
    this.name = n;
    this.price = p;
    this.rate = r;
    // return 10; // if you'r running primitive the it will avoided in the constructor
     return {x:10 , y:5} // if you return non primitive  then it will retun
 }
   
//  Behaviour -> function -> member function
  display(){
     console.log("displaying current product", this.name, this.price, this.rate);
  } 
}

const p = new product("iphone" , 10000 , 8); 
 // new-> creates an empty plain object
// -> in the above method we are caslling the constructor method
console.log(p);
p.display();