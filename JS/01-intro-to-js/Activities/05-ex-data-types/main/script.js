// Number and BigInt
// BigInt is necessary for big numbers because they are unreliable with Number type
// https://www.codecademy.com/resources/docs/javascript/data-types?page_ref=catalog
var num = 7;
var bigInt = 9999999999999999n;


// String: can be defined with either ' ' or " ".
var greeting = '3 + 4';
var message = 'You are doing great! Keep studying!';


// Boolean: for truthy or falsey values.
var lateToWork = true;
var isTheEarthFlat = false;


// Null and Undefined: both for the absence of a value, but they have different meanings.
// Undefined means there should be some values, but it is undefined now
var finishCourseTime;
console.log(finishCourseTime);

finishCourseTime = true;
console.log(finishCourseTime);


// Null means there is no value here
var finishStudyingDate = null;


// Objects: can have fields with different values and types inside:
const user = {
	name: 'Alex',
	age: 88,
	isActive: true
};
