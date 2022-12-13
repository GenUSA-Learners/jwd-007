let stocks = {
  fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
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
      reject(console.log("Our shop is closed"));
    }
  });
};

// Use the order function to write out the steps of making Ice Cream by chaining .then() statements. Remeber to use .catch() to handle any errors.

// Use the image located in the Images folder to view the steps.

// Your code goes here

order(2000, () => {
  console.log(`${stocks.fruit[0]} was selected`);
})
  .then(() => {
    return order(2000, () => {
      console.log(`The fruit has been cut`);
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(
        `${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`
      );
    });
  })
  .then(() => {
    return order(1000, () => {
      console.log(`The machine has started`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`${stocks.holder[1]} has been selected`);
    });
  })
  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} has been added`);
    });
  })
  .then(() => {
    return order(2000, () => {
      console.log(`Serve Ice Cream`);
    });
  })
  .catch(() => {
    console.log(`The customer left`);
  })
  .finally(() => {
    console.log(`The day has ended`);
  });
