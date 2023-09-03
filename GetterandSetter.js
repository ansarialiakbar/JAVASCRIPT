class product{
    #rating;
     constructor(n , p , r){
        console.log("calling this constructor");
      
        this.name = n;
        this.price = p;
        this.#rating = r; 
     }
   //   setRating(r){
   //      if(r<0)
   //      return this.#rating = r;
   //   }
   //   getRatting(){
   //      console.log(this.#rating);
   //   }
       
   // *** Another method to define getter and setter
   set ratingSetter(r){
      if(r<0)
            return this.#rating = r;
   }
   get  ratingGetter(){
      console.log(this.#rating);
   }
   
      display(){
         console.log("displaying current product", this.name, this.price, this.rate);
      } 
    }
    
    const p = new product("iphone" , 10000 , 8); 
    console.log(p);
   //  p.setRating(9);
   //  p.getRatting();
   p.ratingSetter = 10;
   p.ratingGetter;