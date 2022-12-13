  // Creates an array containing names of five student in the class
  var students = ["Andrew", "Gowri", "Philip", "WunKuen", "HZachary"];

  // Logs length of the array
  console.log(students.length);

  // For loop starts at 0, runs while i is less than length of student array
  // Increments by 1
  for(var i=0; i < students.length; i++) {
    // This statement will run each time the loop is executed
    console.log("Great to see you, " + students[i] + "!");
  }
