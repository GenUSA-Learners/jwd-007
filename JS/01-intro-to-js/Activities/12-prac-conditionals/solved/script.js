// Change the values and operators below to test your algorithm meets all conditions
var x = 45;
var expression1 = (x > 25);
var expression2 = (x < 50);

// Write Your JavaScript Code Here
// Check if both expressions are true using &&

if(expression1 && expression2) {
    console.log("True ✅ True ✅");

// If both conditions are not true, check if expression1 is true
} else if (expression1) {
    console.log("True ✅ False ❌");

// If expression1 is not true, then check if expression2 is true
} else if (expression2) {
    console.log("False ❌ True ✅");

// If none of the conditions above evaluate to true, both expressions must be false
} else {
    console.log("False ❌ False ❌");
}
