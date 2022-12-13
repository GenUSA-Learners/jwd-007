
// Example 1
let myObj = {
    name: "Robert Anderson",
    age: 32,
    favoriteColor: "blue",
    likesCoffee: true
}

console.log(myObj);

delete myObj.name
console.log(myObj.age);
console.log(myObj.favoriteColor);
console.log(myObj.likesCoffee);

myObj.hasDogs = true;

console.log(Object.keys(myObj));

// Example 2
let persona = {
    name: 'Stephany',
    age: 30,
    favoriteColor: 'purple',
    drinkCoffee: true
};

console.log(persona);
persona.eyes = 'brown';
persona.personality = 'bubbly';
console.log(persona);
persona.favoriteColor = 'aqua';
console.log(persona);
delete persona.age;
console.log(persona);
