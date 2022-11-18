console.log("js file linked!");
// Write Functions using declaration, expression, and arrow function syntax

// Write your code for #1 below this line
// Using Function declaration syntax

function printMyMusicApp1(myMusicApp) {
	console.log(`I use ${myMusicApp} to listen to music`);
}


// Write your code for #2 below this line
// Using Function expression syntax *NOTE: You'll have to comment out the previous function declaration to avoid errors in the console.

const printMyMusicApp2 = function (myMusicApp) {
	console.log(`I use ${myMusicApp} to listen to music`);
};


// Write you code for #3 below this line
// Using ES6 Arrow function syntax *NOTE: You'll have to comment out the previous function expression to avoid errors in the console.

const printMyMusicApp3 = (myMusicApp) => {
	console.log(`I use ${myMusicApp} to listen to music`);
};


// CALL YOUR FUNCTION BELOW & pass in your music app (in string form) as an argument
printMyMusicApp1('Spotify');
printMyMusicApp2('Spotify');
printMyMusicApp3('Spotify');
