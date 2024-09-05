const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    //  fs.writeFile(filename, JSON.stringify(data, null, '\t') is a method that writes data to a file.
    // The first argument is the name of the file that we are writing to.
    // The second argument is the data that we are writing to the file.

    // The third argument is the callback function that will be called after the file is written to.
    // If there is an error, the error will be passed to the callback function.
    // If there is no error, the callback function will log the message 'Success!'.
    // The data is converted to a JSON string with two spaces for indentation.
    // The JSON.stringify() method converts a JavaScript object or value to a JSON string.
    // The JSON.stringify() method has three parameters: value, replacer, and space.
    // what is null and '\t' doing here? 
    //null is the replacer parameter, which is used to control the stringification process. 
    //The space parameter is used to insert white space into the output JSON string for readability purposes.
    //The '\t' is a tab character that is used to insert a tab space into the output JSON string.
    //null is used to indicate that no replacer is used. 
    //The '\t' is used to insert a tab space into the output JSON string.
    //The JSON.stringify() method is used to convert the data object to a JSON string.
    //The JSON.stringify() method has three parameters: value, replacer, and space.
    //The value parameter is the object that will be converted to a JSON string.
    

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      // TODO: Describe how this ternary operator works
    // If there is an error, the error will be passed to the callback function.
    // If there is no error, the callback function will log the message 'Success!'.
    // The ternary operator is a shorthand for an if/else statement.
    // The syntax is condition ? expressionIfTrue : expressionIfFalse.
    // If the condition is true, the expressionIfTrue is executed.
    // If the condition is false, the expressionIfFalse is executed.
    
      err ? console.log(err) : console.log('Success!')
    );
  });
