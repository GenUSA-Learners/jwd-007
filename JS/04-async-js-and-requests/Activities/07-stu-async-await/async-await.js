let stocks = {
  fruit: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

// Async Await

function time(ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => resolve('Timer complete!'), ms);
    } else {
      reject(console.log('The shop is closed'));
    }
  });
}

// Turn the kitchen function into an async function and then fill in the try block with the steps from the ice cream image.
const kitchen = async () => {
  try {
    const val = await time(2000);
    console.log(val)
    console.log('Placing order!');
    console.log(`Selecting ${stocks.fruit[1]}!`);
    await time(2000);
    console.log('Cutting the fruit!');
    await time(1000);
    console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}!`);
    await time(1000);
    console.log('Start the machine!');
    await time(2000);
    console.log('Selecting the container!');
    await time(3000);
    console.log(`Select ${stocks.toppings[1]}!`);
    await time(2000);
    console.log('Serve the ice cream!');
  } catch {
    console.log('The customer left');
  }
};

kitchen();
