# Switch Statement

`else if` statements are a great tool if we need to check multiple conditions. In programming, we often find ourselves needing to check multiple values and handling each of them differently.

A switch statement provides an alternative syntax that is easier to read and write.

* The `switch` keyword *initiates* the statement and is followed by `( ... )`, which contains the value that each case will compare. In the example, the value or expression of the switch statement is *athleteFinalPosition*.
* Inside the block, `{ ... }`, there are multiple cases. The `case keyword` checks if the expression matches the specified value that comes after it. The value following the first case is *'first place'*. If the value of *athleteFinalPosition* equalled *'first place'*, that case‘s console.log() would run.
* The value of *athleteFinalPosition* is *'third place'*, so the third case runs— *'No medal awarded'* is logged to the console.
* The `break keyword` tells the computer to exit the block and not execute any more code or check any other cases inside the code block. Note: Without break keywords, the first matching case will run, but so will every subsequent case regardless of whether or not it matches—including the default. This behavior is different from if/else conditional statements that execute only one block of code.
* At the end of each switch statement, there is a `default statement`. If none of the cases are true, then the code in the default statement will run.
