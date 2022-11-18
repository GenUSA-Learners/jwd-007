// Iterators


// METHOD: .forEach();

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit =>
console.log('I want to eat a ' + fruit));



// METHOD: .map()

// ex 1
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => {
  return animal[0];
});

console.log(secretMessage.join(''));


// ex 2
const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(bigNumber => {
  return bigNumber / 100;
});

console.log(smallNumbers);



// METHOD: .filter()

// ex 1
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const littleNumbers = randomNumbers.filter(randomNumber => {
  return randomNumber < 250;
});
console.log(littleNumbers);


// ex 2
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(favoriteWord => {
  return favoriteWord.length > 7;
});
console.log(longFavoriteWords);



// METHOD: .findIndex()
const favAnimals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = favAnimals.findIndex(animal => {
  return animal === 'elephant';
});

const startsWithS = favAnimals.findIndex(animal => {
  return animal[0] === 's';
});



// METHOD: .reduce()
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);
 console.log(newSum);
