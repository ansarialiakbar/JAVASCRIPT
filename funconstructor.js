function product(n, p, r){
    this.name = n;
    this.price = p;
    this.rate = r;
}
const p = new product("iphone" , 10000 , 8);
console.log(p);

/*
* 1. this keyword in js is differ than other lang
* 2. this keword refers to the context from where we called
*
* in the fun constructor also
* if you returning primitive it will ignored we returned the object referd by this
* if you return the custome object it will return 
*if you don't return anything it will  then object  will referred by this is returned
**/ 