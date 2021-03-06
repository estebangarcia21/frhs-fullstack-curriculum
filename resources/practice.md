# Practice

# Make sure to always use single quotes due to a bug with the verifier

Go the the [Full Stack Developer's code verifier](https://fullstack-developers-website.vercel.app/verify-code) to verify your code.

## JS-Practice-Map

Write your code in a file called `map.js`

Create an array that holds the values `0, 10, and 15`. Using the `map` function, add 5 to each value in the array.

Verify your code by exporting the `original` array and the `final` array.

```js
var original = ...;
var final = ...;

module.exports = { original, final };
```

## JS-Practice-ConditionalAnd

Write your code in a file called `and_logic.js`

Create a program that outputs `You can buy a drink` if your age is equal to or greater than 18 and your cash is equal to or greater than 30. However, the program outputs `You can not buy a drink` if you dont meet the requirements.

Read the program arguments using the `__readArg` function provided by the verifier. For example:

```js
const age = __readArg('age');
const cash = __readArg('cash');
```

## JS-Practice-ConditionalOr

Write your code in a file called `or_logic.js`

Create a program that outputs `You can get on the ride` if your age is equal to or greater than 12 or your height in inches is greater than 60. However, the program outputs `You can not get on the ride` if you dont meet the requirements.

## JS-Practice-ForEach

Write your code in a file called `for_each.js`

Using `__readArg` read in the argument `numbers`. Display each value in the array to the console.
