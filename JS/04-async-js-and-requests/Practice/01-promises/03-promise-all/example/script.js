console.log('Your JS file is linked!');

// We can have multiple promises that we need to all complete before doing something.
// If the promises do not rely on one another then we can use Promise.all()
// Below is a working example, feel free to add or change whatever you would like

let firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("First Promise")
  }, 1000);
})

let secondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("Second Promise")
  }, 2000);
})

let thirdPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve("Third Promise")
  }, 3000);
})

Promise.all([
  firstPromise,
  secondPromise,
  thirdPromise
]).then(message => {
  console.log(message);
})

Promise.race([
  firstPromise,
  secondPromise,
  thirdPromise
]).then(message => {
  console.log(message);
})
