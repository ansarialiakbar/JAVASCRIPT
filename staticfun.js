class product{
    // properties -> variable -> data member
    //   name ;
    //   price;
    //   rating;

    // **** to make data member "private" use symbol "#" before the variable
    #rating;

    // ******   to define a constructor use keyword "Constructor" *******
     constructor(n , p , r){
        console.log("calling this constructor");
        // assign value to the data member use key word "this"
        this.name = n;
        this.price = p;
        this.#rating = r;
        // return 10; // if you'r running primitive the it will avoided in the constructor
        //  return {x:10 , y:5} // if you return non primitive  then it will retun
     }

    //  ******* Declaring a staticFunction  use the keyword "Static" before fun name *****
    static custome(){
        console.log("calling a static fun");
    }


       
    //  Behaviour -> function -> member function
      display() {
         console.log("displaying current product", this.name, this.price, this.#rating);
      } 
    }
    
    const p = new product("iphone" , 10000 , 8);  // new-> creates an empty plain object
    // -> in the above method we are caslling the constructor method
    p.name = "nokia123"

    // console.log(p.#rating); // SyntaxError: Private field '#rating' must be declared in an enclosing class
    console.log(p);
    
    // you can't call the static method using object
    // p.custome()

    // static method can only be call with the help of "Class name"
    product.custome()
    p.display();