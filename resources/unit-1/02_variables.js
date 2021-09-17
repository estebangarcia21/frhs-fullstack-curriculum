/**
 * Declare a variable using the var keyword.
 *
 * var someVariableName = someValue;
 */

var stringValue = "This is a string! It is a sequence of characters.";
var numberValue = 32.52; // This is a number! It can be a whole or decimal number.

/**
 * Value reassignment.
 *
 * Lets print out the value of stringValue before and after.
 */
console.log("String value before: " + stringValue);

// Reassign.
stringValue = "New string!"; // We do not need the var keyword because we have already declared that stringValue exists.

console.log("String new value: " + stringValue);
