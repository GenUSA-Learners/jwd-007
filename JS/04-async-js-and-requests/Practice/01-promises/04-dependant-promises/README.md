# Dependant Promises

* In this activity you are tasked to create 2 promises, where the second promise depends on the return from the first promise. These promises should be inside of functions

* the first promise will use the setTimeout() function https://www.w3schools.com/jsref/met_win_settimeout.asp

* The setTimeout should be set up to return a new promise after a certain amount of seconds

```javascript
setTimeout(param => {
    // return new Promise()
}, 3000)
```

* The second promise should take in the response from the first promise and do something with it. You could run a condition based off it, or manipulate it in some way and display it.
