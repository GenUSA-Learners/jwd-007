// Global Date object

const currentDate = Date.now();
// Returns the numeric value corresponding to the current time—the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC, with leap seconds ignored.

console.log(currentDate);
console.log(currentDate.toString());

const birthday = new Date('January 23, 1990 09:56:12')

console.log(birthday.getDate());
// Returns the day of the month ( 1-31) for the specified date
console.log(birthday.getFullYear());
console.log(birthday.getMonth());
console.log(birthday.getDay());
// Sunday - Saturday : 0 - 6
console.log(birthday.getHours());
console.log(birthday.getMinutes());
console.log(birthday.getSeconds());
