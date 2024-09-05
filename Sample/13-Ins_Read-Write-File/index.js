// fs is a Node standard library package for reading and writing files
const fs = require('fs');
let string;

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile('data.csv', 'utf8', (error, data) =>
  // error ? console.error(error) : console.log(data)
{
     error ? console.error(error) : console.log(data)
     string =data;

}

);

async function readFile() {
    let data = await fs.promises.readFile('data.csv', 'utf8');
 //   console.log(data);
    return data;
}

string = readFile();
console.log(string);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
