# Arrays

- The `Array object`, as with arrays in other programming languages, arrays *enable us to store a collection of multiple items under a single variable name*, and have members (built-in methods) for performing common array operations

- Arrays can be declared using var, let, or const. let and const are the updated ES6 syntax. If you're sticking with ES6 (maintaining consistency in your code is desired), `const` can be used *even if the contents of the array change*, because the variable will be referring to the same array object. However, if you need to re-assign that variable, you'll need to use `let`.

- In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

  - **JS arrays are resizable** and **can contain a mix of different data types**.
  - **JS arrays are not associative arrays** and so array elements cannot be accessed using arbitrary strongs as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
  - **JS arrays are zero-indexed**: the first element of an array is at index `0`, the second is at index `1`, and so one -- and the last element is at the value of the array's length property minus 1.
  - **JS array-copy operations create shallow copies**. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

See more info at [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
