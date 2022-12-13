// setTimeout

setTimeout(() => {
  console.log("callback 2 fired");
}, 5000);


setTimeout(() => {
  console.log("callback 1 fired");
}, 2000);



// setInterval
const greet = () => {
  console.log("Hello World");
};

setInterval(greet, 2000);
