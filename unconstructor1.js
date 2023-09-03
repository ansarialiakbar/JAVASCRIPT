const product = (n, p, r)=> {
   this.name = n;
    this.price = p;
    this.rate = r;
}
const p = new product("iphone" , 10000 , 8); 
console.log(p);
// the theory of this keyword pointing to calling context is not applicable with arrow function