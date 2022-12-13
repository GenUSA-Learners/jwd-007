# Promises

* For this activity you are tasked to create a Promise and then handle the response using the .then() and .catch() methods that come built into Promise objects.

* Create a function that returns a `new Promise()`
    - it should have 2 parameters (resolve, reject)
    - it should then generate a random number between 0 and 3
    - if the number generated is 0 or 1 it should resolve with a message that includes the random number
    - if the number generated is 2 or 3 it should reject with a message that also includes the random number

* After you create the function you will have to use the .then() method to handle a resolve() case.

* You will also need a .catch() method to handle the reject() case.

* You can use node to run the script in the terminal, or you can create an index.html if you would prefer to run it in the browser.
