let stocks = {
    fruit: ["strawberry", "grapes", "banana", "apple"],
    liquid: ["water", "ice"],
    holder: ["cone", "cup", "stick"],
    toppings: ["chocolate", "peanuts"],
  };
  
  // CALLBACK FUNCITONS, AND CALLBACK HELL
  
  let order = (fruitName, callProduction) => {
    setTimeout(() => {
      console.log(`${stocks.fruit[fruitName]} was selected`);
  
      callProduction();
    }, 2000);
  };
  
  // Use setTimeout to fill in the body of the production function and using the steps in the image make the ice cream
  
  let production = () => {
    // Your code goes here
    setTimeout(() => {
      console.log(`Production has started`);
      setTimeout(() => {
        console.log("The fruit has been cut");
        setTimeout(() => {
          console.log(
            `${stocks.liquid[0]} and ${stocks.liquid[1]} have been added`
          );
          setTimeout(() => {
            console.log("The machine has started");
            setTimeout(() => {
              console.log(`${stocks.holder[1]} has been selected`);
              setTimeout(() => {
                console.log(`${stocks.toppings[0]} has been added`);
                setTimeout(() => {
                  console.log("Serve Ice Cream");
                }, 2000);
              }, 3000);
            }, 2000);
          }, 1000);
        }, 1000);
      }, 2000);
    });
  };
  
  // Call the order fucntion below
  
  order(0, production);
  