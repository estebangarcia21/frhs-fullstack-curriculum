/* We learned about string and number values. But there is a critical
 * type of value that is always used in Javascript.
 *
 * Objects!
 */
var object = {}; // An empty object.

/**
 * Objects are like maps. You can map a key to a value. Its like
 * a variable that has sub variables within it.
 */
var myObject = {
  someKey: "someValue",
  anotherKey: 32,
};

var nestedObject = {
  someNestedObject: {
    key: "val",
  },
  otherKey: "otherValue",
};

// *** EXAMPLE ***
var user = {
  firstName: "Esteban",
  lastName: "Garcia",
};

var userFirstName = user.firstName; // Access the items by using the .
var hashAccess = user["firstName"]; // Or using a string
