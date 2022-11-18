var thirstLevel = 75;
var isHydrationTime = true;
var waterBill = 7;

// If statement
// Evaluates to true so "Thirsty" is logged

if (thirstLevel >= 50) {
  console.log("Thirsty!");
}

// Evaluates to false so nothing is logged
if (thirstLevel < 50) {
  console.log("Not Thirsty!");
}

// Else statement
// Evaluates to true so "Hydrationtime" is logged
if (isHydrationTime === true) {
  console.log("Hydrationtime");
} else {
  console.log("Not Hydrationtime");
}

// isHydrationTime is another way of writing "isHydrationTime === true"
if (isHydrationTime) {
  console.log("Hydrationtime!!");
} else {
  console.log("Not Hydrationtime!!");
}

// Evaluates to false so "It's Hydrationtime Already" is logged
if (!isHydrationTime) {
  console.log("Not Hydrationtime Already!!");
} else {
  console.log("It's Hydrationtime Already !!");
}

// Else if allows you to test more than one condition
// The first condition is false, so the second condition is evaluated. Logs "Cost Rating: $$""

if (waterBill < 10) {
  console.log("Cost Rating: $");
} else if (waterBill >= 10 && waterBill < 15) {
  console.log("Cost Rating: $$");
} else {
  console.log("Cost Rating: $$$");
}
