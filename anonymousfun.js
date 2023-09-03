// Anonymous function
// Anonymous fun that  do not have any name
let a = function (){
    console.log("hi");
}
a(); 
// Immediately invoked function (IIF)
(
    function (){
        console.log("hello");
    }
) ();
// another way
(
    function (x){
        console.log(x*x);
    }
) (5);