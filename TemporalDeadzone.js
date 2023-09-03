// In other words, when the computer hoists a var variable, it automatically initializes the variable with the value undefined.

// In contrast, JavaScript does not initialize a let (or const) variable with any value whenever it hoists the variable. Instead, the variable remains dead and inaccessible.

// Therefore, a let (or const) variable’s TDZ(temporal dead zone) ends when JavaScript fully initializes it with the value specified during its declaration.

// However, a var variable’s TDZ ends immediately after its hoisting—not when the variable gets fully initialized with the value specified during its declaration.
// ****************     TDZ       **********
{
    // For Var variable
    // bestFood’s TDZ starts and ends here
    console.log(bestFood); // returns undefined because bestFood’s TDZ does not exist here
    var bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ does not exist here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’sTDZ does not exist here
  } 
// ******   For Let ******************
{
    // bestFood’s TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    console.log(bestFood); // returns ReferenceError because bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    // bestFood’s TDZ does not exist here
  }
{
    // TDZ starts here (at the beginning of this block’s local scope)
    // bestFood’s TDZ continues here
    // bestFood’s TDZ continues here
    let bestFood = "Vegetable Fried Rice"; // bestFood’s TDZ ends here
    console.log(bestFood); // returns "Vegetable Fried Rice" because bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
    // bestFood’s TDZ does not exist here
  }

// *********************    HOISTING     ******************* 
// Hoisting refers to JavaScript giving higher precedence to the declaration of variables, classes, and functions during a program’s execution.

// Hoisting makes the computer process declarations before any other code.

// Note: Hoisting does not mean JavaScript rearranges or moves code above one another. 
// the declarations had higher precedence over other code.