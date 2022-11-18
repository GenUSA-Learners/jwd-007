
// Refactor the first if / else block to use a ternary operator
let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

// Refactor the second if / else block to use a ternary operator
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log('I don`t love that');
