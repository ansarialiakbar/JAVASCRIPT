class complexNumber{
    #real;
    #img;
    constructor(r, i){
        this.#real = r;
        this.#img = i;
    }
    display(){
        console.log(this.#real, " +i", this.#img);
    }
    get real(){
      return this.#real;
    }
    get img(){
       return this.#img;
    }
    addComplexNumber(c){
        this.#real += c.real;
        this.#img += c.img;
    }
}
const c1 = new complexNumber(2, 3)
c1.display()
const c2 = new complexNumber(4, 5)
c1.addComplexNumber(c2)
c1.display()