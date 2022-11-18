// STRING CONCATENATION

let client = 'The Piano Man';
let meetingDate = 'August 2nd';
let meetingTime = '1:30pm';

// the + operator
let displayText = 'Your meeting with ' + client  + ' is scheduled for ' + meetingDate + ' at ' + meetingTime + '.';

console.log(displayText); // Prints: Your meeting with The Piano Man is scheduled for August 2nd at 1:30pm.



// Other Ways to Concatenate Strings

let str1 = 'Your meeting with Earl';
let str2 = ' is scheduled for September 9th';
let str3 = ' at 10:00am.';

// string.concat() - built-in string method
displayConcatMethod = str1.concat(str2, str3);

console.log(displayConcatMethod); // Prints: Your meeting with Earl is scheduled for September 9th at 10:00am.


// array.join() - built-in array method
displayJoinMethod = [str1, str2, str3].join();

console.log(displayJoinMethod); // Prints: Your meeting with Earl, is scheduled for September 9th, at 10:00am.
