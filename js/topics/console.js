
// ============ HOW WORK CONSOLE ============

/*
console - INSTANCE METHODS

console.assert()
Log a message and stack trace to console if the first argument is false.

console.clear()
Clear the console.

console.count()
Log the number of times this line has been called with the given label.

console.countReset()
Resets the value of the counter with the given label.

console.debug()
Outputs a message to the console with the log level debug.

console.dir()
Displays an interactive listing of the properties of a specified JavaScript object. This listing lets you use disclosure triangles to examine the contents of child objects.

console.dirxml()
Displays an XML/HTML Element representation of the specified object if possible or the JavaScript Object view if it is not possible.

console.error()
Outputs an error message. You may use string substitution and additional arguments with this method.

console.exception() Non-standard Deprecated
An alias for error().

console.group()
Creates a new inline group, indenting all following output by another level. To move back out a level, call groupEnd().

console.groupCollapsed()
Creates a new inline group, indenting all following output by another level. However, unlike group() this starts with the inline group collapsed requiring the use of a disclosure button to expand it. To move back out a level, call groupEnd().

console.groupEnd()
Exits the current inline group.

console.info()
Informative logging of information. You may use string substitution and additional arguments with this method.

console.log()
For general output of logging information. You may use string substitution and additional arguments with this method.

console.profile() Non-standard
Starts the browser's built-in profiler (for example, the Firefox performance tool). You can specify an optional name for the profile.

console.profileEnd() Non-standard
Stops the profiler. You can see the resulting profile in the browser's performance tool (for example, the Firefox performance tool).

console.table()
Displays tabular data as a table.

console.time()
Starts a timer with a name specified as an input parameter. Up to 10,000 simultaneous timers can run on a given page.

console.timeEnd()
Stops the specified timer and logs the elapsed time in milliseconds since it started.

console.timeLog()
Logs the value of the specified timer to the console.

console.timeStamp() Non-standard
Adds a marker to the browser performance tool's timeline (Chrome or Firefox).

console.trace()
Outputs a stack trace.

console.warn()
Outputs a warning message. You may use string substitution and additional arguments with this method.
*/

// -------------- Case 1 --------------
const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (let i = 0; i < matrix.length; i += 1) {
  // console.group(`Iteration ${i}`);
  // console.log('i :', i);
  // console.log(`matrix[${i}] :`, matrix[i]);

  for (let j = 0; j < matrix[i].length; j += 1) {
    // console.log('j :', j);
    // console.log(`matrix[${i}][${j}]:`, matrix[i][j]);
  }

  console.groupEnd(`Iteration ${i}`);
}