# Variables

One of the features that came with ES6 is the addition of `let` and `const`, which can be used for variable declaration. The question is, what makes the different from good ol' `var` which we've been using?

- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while `var` variables are *initialized with undefined*, `let` and `const` variables are *not initialized*.
- While `var` and `let` *can be declared **without** being initialized*, `const` *must be initialized **during** declaration*.

## Helpful Links

[Var, Let, and Const - What's the Difference?](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/)
