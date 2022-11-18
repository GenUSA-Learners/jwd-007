var comparisonOperators = ["Equal", "Not Equal", "Strict Equal", "Strict Not Equal", "Greater Than", "Less Than"];
var arithmaticOperators = ["+", "-", "%"];
var logicalOperators = ["and", "or", "not"];
var myString = "Hello String";

//Array Methods

// .SORT()
	// Sorts comparisonOperators array and returns the sorted array
	comparisonOperators.sort();

	//Logs sorted array
	console.log(comparisonOperators);

// .PUSH()
	// Adds elements to end of an array. Takes in at least one parameter
	arithmaticOperators.push("%");

	//Logs array with element "%" added to end
	console.log(arithmaticOperators);

// .SLICE()
	//Returns selected elements as a new array.
	var logicalOperatorsSliced = logicalOperators.slice(0,2);

	//Logs new array
	console.log(logicalOperatorsSliced);

	// The orginal array is unchanged
	console.log(logicalOperators);

