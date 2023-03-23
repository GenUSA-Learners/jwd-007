let stocks = {
  fruit: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

let isShopOpen = true;

// Async Await

function time() {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      // setTimeout(() => resolve('Timer complete!'), ms);
      resolve('Vanilla');
    } else {
      reject(console.log('The shop is closed'));
    }
  });
}


function printIceCream(flavor) {
  console.log(`You have selected ${flavor}`);
}


// Turn the kitchen function into an async function and then fill in the try block with the steps from the ice cream image.
const kitchen = async () => {
  try {
    let flavor = await time();
    printIceCream(flavor);
    



    await time(2000);
    console.log(`Selecting ${stocks.fruit[1]}!`);

    await time(2000);
    console.log('Cutting the fruit!');

    await time(1000);
    console.log(`Adding ${stocks.liquid[0]} and ${stocks.liquid[1]}!`);

    await time(1000);
    console.log('Start Machine');


  
  } catch {
    console.log('The customer left');
  }
};

kitchen();
