# Iterators

One tool at our disposal is the `for loop`. However, we also have access to `built-in array methods` which make looping easier.

The built-in JavaScript array methods that help us iterate are called `iteration methods`, at times referred to as iterators. Iterators are methods called on arrays to manipulate elements and return values.

To `iterate` means you're going through each item in the array and you're doing something with each item in the array.

Please refer to the `./main/script.js` to find examples of the following `iteration methods`:

1. `.forEach()` - is used to execute the same code on every element in an array but does not change the array and returns undefined.
2. `.map()` - executes the same code on every element in an array and returns a new array with the updated elements.
3. `.filter()` - checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
4. `.findIndex()` - returns the index of the first element of an array that satisfies a condition in the callback function. It returns -1 if none of the elements in the array satisfies the condition.
5. `.reduce()` - iterates through an array and takes the values of the elements and returns a single value.

* NOTE: All iterator methods take a callback function, which can be a pre-defined function, a function expression, or an arrow function.

## Documentation

* [MDN's Array iteration methods page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Iteration_methods)
