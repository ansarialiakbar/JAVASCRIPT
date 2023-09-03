// ********* 01*******
console.log(addNumber(5, 6));
function addNumber(a,  b){
    return a + b;
}

// ******** 02 ***
console.log(multiplyNumbers(3, 4)); // ReferenceError: Cannot access 'multiplyNumbers' before initialization
const multiplyNumbers = function(a, b){
    return a * b;
}

// ******** 03 *******
function addNumber(a, b){
    var sum;
    console.log(sum);
    sum = a + b;
    return sum;
}
console.log(addNumber(3, 4));

// ******** 04 *****
{
    console.log(a); // a is undrfined

    console.log(b);
    console.log(c);
    let  a = 5
    var b = 4
    const c = 2
    console.log(a);
    console.log(b);
    console.log(c);
   
}

//  ********* 05 *******
{
    console.log(x);
    let x = "pw"
    console.log(x);
}