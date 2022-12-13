let stocks = {
  fruit: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

const toppingsChoice = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log("What toppings would you like?"));
    }, 3000);
  });
};

const kitchen = async () => {
  console.log("A");
  console.log("B");
  console.log("C");

  await toppingsChoice();

  console.log("D");
  console.log("E");
};

kitchen();

console.log("doing the dishes");
console.log("taking other orders");