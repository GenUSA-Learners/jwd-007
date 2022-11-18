console.log("js file linked!");
// Create Arrays and print them to the console

// Write your code for Challenge 1 below
const seasonsRanked = ['Spring', 'Summer', 'Fall', 'Winter'];
const groceriesNeeded = ['tofu', 'apples', 'bananas', 'lentils', 'chips'];
const dataTypes = ['string', true, 25, undefined, null];

console.log(seasonsRanked);
console.log(groceriesNeeded);
console.log(dataTypes);


// write your code for Challenge 2 below

//1. reverse order seasons array
seasonsRanked.reverse();
console.log(seasonsRanked);

//2. remove last item groceries array
groceriesNeeded.pop();
console.log(groceriesNeeded);

//3. print length data types array
// console.log(dataTypes.length);
const length = dataTypes.length;
console.log(length);

//4.
const favoriteMovies = [['Napolean Dynamite', 'White House Down'], ['John Heder', 'Channing Tatum']];

console.log(favoriteMovies[0][1]);
