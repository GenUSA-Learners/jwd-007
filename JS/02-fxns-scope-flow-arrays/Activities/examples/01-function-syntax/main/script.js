const myName = "Kathryn";

console.log("js file linked!");
// Write Functions using declaration, expression, and arrow function syntax

//1. My first function!

//Declaring the function
//keyword	name
function myFirstFunction() {
	//here we are in the function body
	console.log('Hello from a function declaration!');
}

// // // Calling the function
myFirstFunction();
myFirstFunction();
myFirstFunction();


// Function Expression syntax
const mySecondFunction = function() {
	console.log('Hello from a function expression!');
}


// 2. Parameters & Arguments
// 					num1 & num2 are PARAMETERS
function difference(num1, num2) {
	console.log(num1 - num2);
}
// 					// 9 & 5 are ARGUMENTS
difference(9, 5);
difference(11, 5);





//3. Return
function multiplyNumbers(num1, num2) {
	return num1 * num2;
}
multiplyNumbers(10,5);
// const answer = multiplyNumbers(4,5);
// console.log(answer);

// // OR...

// console.log(multiplyNumbers(4,5));




// 4. Scope

// //global scope
const favoriteFood = 'snacks';
function myFavoriteFood() {
	return favoriteFood;
}

function printFavoriteFood() {
	// local scope
	const favoriteFood = 'pizza';
	return favoriteFood;
}

console.log(printFavoriteFood());
console.log(favoriteFood);

//more scope

const city = 'New York City';

function logCitySkyline() {

	let skyscraper = 'Empire State Building';

	return "The stars over the " + skyscraper + " in " + city;
}

console.log(logCitySkyline());





//5. ES6 Arrow Functions

function greetingDeclaration(name) {
	return `Hello! My name is ${name}.`
}

const greetingArrowFunc = name => `Hello! My name is ${name}.`;

console.log(greetingDeclaration('Kathryn'));
console.log(greetingArrowFunc('Kathryn'));




function addMyPaychecksDec(week1, week2) {
	return week1 + week2;
}

//implicit return, we don't need the 'return' keyword because we only have one expression so it is implied
const addMyPaychecksArrow = (week1, week2) => week1 + week2;

//const totalSalary = addMyPaychecksDec(800, 900);
const totalSalary = addMyPaychecksArrow(800, 900);
console.log(totalSalary);



const makeSentence = (greeting, name, day) => {
	let sentence = `${greeting}! My name is ${name}, and it is ${day}.`
	return sentence;
}

console.log(makeSentence('Hello', 'Kathryn', 'Wednesday'));
