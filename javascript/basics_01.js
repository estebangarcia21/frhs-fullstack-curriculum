/*
 * =============================
 * Comments
 * =============================
 */
{
  // Single line comment. Start the line with double forward slash. You can write anything and it will be completley ignored by the compiler!
  /*
   * Multi line comment.
   * You can make this as many lines as you want.
   *
   * Start the line with a forward slash and a star.
   * You can write anything and it will be completley ignored by the compiler!
   *
   * You can also use the backslash to escape the star.
   * End the multiline comment with a star and a forward slash.
   */
}

/*
 * =============================
 * Variables
 * =============================
 */
{
  // Declare a variable using the var keyword and the variable name.
  // Variable names should always be camelCase. Start the variable name with a lower case letter
  // and each new word with a capital letter.
  var myVariable;

  // Set the value of a variable with the assignment operator (=).
  myVariable = 64;

  // You can declare and initialize a variable at the same time.
  var myOtherVariable = 'Initialized!';

  // Different types of values in JavaScript. Numbers, strings, booleans, objects, and arrays are the most common.

  // A number value. Can be an integer or decimal.
  var numberValueInteger = 0;
  var numberValueDecimal = -3.5;

  // A string is a sequence of characters. You can use single or double quotes.
  var stringValue = 'Hello world!';

  // Boolean values are either true or false. Can also be represented with a 0 for false and 1 for true.
  var booleanValueFalse = false;
  var booleanValueTrue = true;

  // A map of values indexed by a string key or position in an array.
  var object = {};

  // A set of values.
  var array = [];
  var exampleArray = [0, 1, 2];
  var exampleArray2 = ['Hello', 'world', 0, {}, []];
}

/*
 * =============================
 * Arithmetic
 * =============================
 */
{
  // Addition (+)
  var addition = 1 + 2;

  // Subtraction (-)
  var subtraction = 1 - 2;

  // Multiplication (*)
  var multiplication = 1 * 2;

  // Division (/)
  var division = 1 / 2;

  // Modulo (%) - returns the remainder of a division.
  var modulo = 1 % 2;

  // Increment (++)
  var increment = 1;
  increment++;

  // Decrement (--)
  var decrement = 1;
  decrement--;
  
  // Adding a value to a variable
  var x = 5;
  var y = 10;
  
  x = x + 50;

  // You can do a shortcut with + - / *
  x += 50; // the same as x = x + 50
  x *= 50;
  x -= 50;
  x /= 50;
  
  // You can join strings using the + operator
  var a = "Hello, ";
  var b = "world!";
  var msg = a + b; // "Hello, world!"
}

/*
 * =============================
 * Logging
 * =============================
 */
{
  // Use console.log to log a value to the console.
  console.log('Hello world!');
}

/*
 * =============================
 * Loops
 * =============================
 */
{
  // You can repeatedly run a block of code a number of times using a loop!
  // Specifiy the amonut of times you want to loop. This loop loops five times.
  for (var i = 0; i < 5; i++) {
    console.log('Looping! ' + i);
  }
  
  // A for loop contains 3 sections. Initialization, condition, iteration. Each section is split using a semicolon (;)
  // Initialization: Initialize a variable that will keep track of the loop iteration.
  // Condition: Run the loop until the condition evaluates to false.
  // Iteration: Every time the loop runs, what will happen to the initialized variable?
  //
  // For most cases, we always initialize a variable named i and set it to 0. We usually always just want to increment by one after each iteration.
  // If you recall from arithmetic, variable++ is a shorthand for adding one to a variable, so we usually do that.
}

/*
 * =============================
 * Conditionals
 * =============================
 */
{
  // You can control the flow of your code using conditional statements. If something is true, then run a block of code.
  if (true) {
    console.log('This is true!');
  }

  // Lets check some stuff out.
  // Use the === operator to check if two values are equal.
  if (2 === 2) {
    console.log('Two is equal to two!');
  }

  // You can use else to run something if a conditional evaluates to false.
  if (2 === 3) {
    console.log('Two is equal to three!');
  } else {
    console.log('Two is not equal to three!');
  }

  // You can also use else if to check for another condition if a condition fails.
  if (2 === 3) {
    console.log('Two is equal to three!');
  } else if (2 === 2) {
    console.log('Two is equal to two!');
  }

  // Chain as many else ifs as you want!
  if (2 < 3) {
    console.log('Something!');
  } else if (2 === 3) {
    console.log('Something!');
  } else if (2 > 3) {
    console.log('Something!');
  }

  if (2 === 3) {
    // All three...
    console.log('Two is equal to three!');
  } else if (2 === 2) {
    console.log('Two is equal to two!');
  } else {
    console.log('Bruh...');
  }

  // You can also use the ternary operator to check for a condition and run a block of code if it is true.
  const isTwoEqualToTwo =
    2 === 2 ? 'This is the value if its true!' : 'Value if its not true!';

  console.log('(Ternary) isTwoEqualToTwo: ' + isTwoEqualToTwo);

  // All conditional operators.
  // less than / greater than
  if (2 < 3 || 2 > 3) {
    console.log('Two is less than three!');
  }

  // Less than or equal to / greater than or equal to.
  if (2 <= 3 || 2 >= 3) {
    console.log('Two is less than or equal to three!');
  }

  // Not equal to
  if (2 !== 3) {
    console.log('Two is not equal to three!');
  }

  // You can use the AND (&&) operator to check that one condition AND another condition is true.
  if (2 === 2 && 2 !== 3) {
    console.log('Two is equal to two and two is equal to three!');
  }

  // You can use the OR (||) operator to check that one condition OR another condition is true.
  if (2 === 2 || 2 !== 3) {
    console.log('Two is equal to two or two is not equal to three!');
  }
}

/*
 * =============================
 * Objects
 * =============================
 */
{
  // JSON objects map a stringifiable key to a value. JSON stands for Javascript Object Notation.
  var user = {
    firstName: 'Bob',
    lastName: 'Brown'
  };

  // Output: {firstName:'Bob',lastName:'Brown'}
  console.log(user);

  // Access values using dot notation.
  console.log(user.firstName);

  // Access values using bracket notation.
  console.log(user['lastName']);

  // Acess the nth key of the object using an integer.
  console.log(user[0]); // firstName is the 0th key in object.
  console.log(user[1]); // lastName is the 1st key in the object.
}
