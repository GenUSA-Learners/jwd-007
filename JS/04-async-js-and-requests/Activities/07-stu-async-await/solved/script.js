let stocks = {
  fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let isShopOpen = true;

// Async Await

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("The shop is closed"));
    }
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`${stocks.fruit[0]} has been selected`);

    await time(2000);
    console.log("The fruit has been cut");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`);

    await time(1000);
    console.log("The machine has started");

    await time(2000);
    console.log(`The ice cream was placed in a ${stocks.holder[0]}`);

    await time(3000);
    console.log(`${stocks.toppings[0]} was added`);

    await time(2000);
    console.log("serve ice cream");
  } catch {
    console.log("Customer left");
  } finally {
    console.log("Day ended shop closed");
  }
};

kitchen();
