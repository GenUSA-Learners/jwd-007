// For Loop

// We use a for-loop to execute code more than once
for (let i = 0; i < 5; i++) {
    // This is the block of code that will run each time
    console.log("This is the current value of i: " + i + ".");
}

// For-loops are often used to iterate over arrays
const zooAnimals = ["Bears", "Giraffes", "Penguins", "Meerkats"];

//To determine how many times the loop should execute, we use the array's length
for (let i = 0; i < zooAnimals.length; i++) {
    console.log("I am going to zoo to see " + zooAnimals[i] + ".");
}

const greeting = "Hello World";

//To determine how many times the loop should execute, we use the array's length
for (let i = 0; i < 5; i++) {
    console.log(greeting);
}



// While Loop

// For Loop to While Loop conversion

  // A for loop that prints 1, 2, and 3
  for (let counterOne = 1; counterOne < 4; counterOne++){
    console.log(counterOne);
  }

  // A while loop that prints 1, 2, and 3
  let counterTwo = 1;
  while (counterTwo < 4) {
    console.log(counterTwo);
    counterTwo++;
  }

// Do...while Loop
  let countString = '';
  let i = 0;

  do {
    countString = countString + i;
    i++;
  } while (i < 5);

  console.log(countString);

// the Break keyword
for (let i = 0; i < 99; i++) {
    if (i > 2 ) {
       break;
    }
    console.log('Banana.');
  }

  console.log('Orange you glad I broke out the loop!');

// Output:
//   Banana.
//   Banana.
//   Banana.
//   Orange you glad I broke out the loop!


// OTHER LOOPS
// For...in Loop
// For...of Loop
