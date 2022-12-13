let stocks = {
  fruit: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

// A Promise is a proxy for a value not necessarily known when the promise is created. It allows you to associate handlers with an asynchronous actions eventual success or failure reason.

// Function that returns a promise
let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log('Our shop is closed'));
    }
  });
};

// Use the order function to write out the steps of making Ice Cream by chaining .then() statements. Remeber to use .catch() to handle any errors.

// Use the image located in the Images folder to view the steps.

// Your code goes here

order(2000, () => {
  console.log('Placing order!');
  console.log(`Selecting ${stocks.fruit[1]}!`);
})
  .then(() => {
    return order(2000, () => {
      console.log('Cutting the fruit!');
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}!`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`Start Machine`)
    });
  })
