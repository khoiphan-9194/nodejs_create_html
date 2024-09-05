// TODO: What are we importing?
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// The first argument is the file that we are appending to.
// The second argument is the data that we are appending to the file.

// The third argument is the callback function that will be called after the file is appended to.
// If there is an error, the error will be passed to the callback function.
// If there is no error, the callback function will log the message 'Commit logged!'.

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  err ? console.error(err) : console.log('Commit logged!')
);
