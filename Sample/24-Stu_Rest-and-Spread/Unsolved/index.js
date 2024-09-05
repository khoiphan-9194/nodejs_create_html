
let a = [1,2,3,4,5]; //memory address 0x1234
let b=a; // this is a reference to the same array in memory => b = 0x1234
b.push(6); // this will add 6 to the array in memory 0x1234
console.log(a); // [1,2,3,4,5,6]

let c = [...a]; // this will create a new array in memory and copy the values from a to c

c.push(7); // this will add 7 to the array in memory 0x1235
console.log(a); //  [1,2,3,4,5,6]
console.log(b); //  [1,2,3,4,5,6]
console.log(c); // [1,2,3,4,5,6,7]


//How about Objects?
let obj1 = {name: 'John', age: 30};
let obj2 = obj1; // this is a reference to the same object in memory => obj2 = 0x1234
obj2.age = 40; // this will change the age of the object in memory 0x1234
console.log(obj1); // {name: 'John', age: 40}

let obj3 = {...obj1}; // this will create a new object in memory and copy the values from obj1 to obj3
obj3.age = 50; // this will change the age of the object in memory 0x1235
console.log(obj1); // {name: 'John', age: 40}
console.log(obj2); // {name: 'John', age: 40}
console.log(obj3); // {name: 'John', age: 50}

let obj4 = {...obj1, age: 60}; // this will create a new object in memory and copy the values from obj1 to obj4 and change the age to 60
console.log(obj1); // {name: 'John', age: 40}
console.log(obj2); // {name: 'John', age: 40}
console.log(obj3); // {name: 'John', age: 50}
console.log(obj4); // {name: 'John', age: 60}

// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//spread operator is being used here
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
// it will make a copy of the songs array and store it in newSongs
console.log(newSongs); // ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got']

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  return array.reduce((a, b) => a + b, 0); // it will add all the elements in the array and return the sum
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));





// TODO: What is this syntax that is being used as the parameter?
// rest operator is being used here
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};
//what is accumulator and current value in the array being processed?
//accumulator is a and current value is b
//what accumulator means?
//accumulator is the total sum of the elements in the array
//0 is the initial value of the accumulator


// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3)); // 6

// TODO: What do you expect to be logged in the console?

console.log(additionSpread(1, 2, 3, 4, 100)); // 110

//reduce method is used to add all the elements in the array and return the sum of the elements. The second parameter is the initial value of the accumulator.
// In this case, the initial value is 0. a is the accumulator and b is the current value in the array being processed. 
//spread operator is used to store multiple values in an array
//rest operator is used to store multiple values in an array

