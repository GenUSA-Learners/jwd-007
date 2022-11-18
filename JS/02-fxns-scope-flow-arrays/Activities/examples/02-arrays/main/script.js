// empty arrays don't return undefined

const groceryList = [];
console.log(groceryList);


// If your usecase only needs mutation, you can go for const.. if you need reassigning then go for let.

// LET

let condiments = ['Ketchup', 'Soy Sauce', 'Sriracha'];

// Accessing and mutating
condiments[0] = 'Mayo';
console.log(condiments);//=> [ 'Mayo', 'Soy Sauce', 'Sriracha' ]

// Re-assigning possible
condiments = ['Mayo'];
console.log(condiments); //=> [ 'Mayo' ]

// Re-declaring not possible
let condiments = [] //=> SyntaxError: Identifier 'condiments' has already been declared




// CONST

const utensils = ['Fork', 'Chopsticks', 'Spork'];

// Mutation Possible
utensils[2] = 'Spoon'
console.log(utensils); //=> [ 'Fork', 'Chopsticks', 'Spoon' ]
utensils.length = 0
console.log(utensils); //=> [ ]

// Re-assigning not possible
utensils = ['Spoon']; //=> TypeError: Assignment to constant variable.

// Re-declaring not possible
const utensils = {} //=> SyntaxError: Identifier 'condiments' has already been declared
