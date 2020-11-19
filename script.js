/*
Exercise 1:
Write a function testNum that takes a number as an argument 
and returns a Promise 
that tests if the value is less than or greater than the value 10. 
Log the result to the console.
*/

const testNum = (num) => {
    return new Promise(
        (resolve, reject) => {
            if (num >= 10) {
                resolve(num + ` is greaater or equal than 10`)
            } else {
                reject(num + ` is smaller than 10`)
            }
        }
    )
};

testNum(7)
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected));
testNum(22)
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected));

/*
Exercise 2:
Write two functions that use Promises that you can chain! 
The first function, makeAllCaps(), will take in an array of words and capitalize them, 
and then the second function, sortWords(), will sort the words in alphabetical order. 
If the array contains anything but strings, it should throw an error.
Then call these functions by *chaining* the promises
*/

const makeAllCaps = (array) => {
    return new Promise((resolve, reject) => {
        if (array.every(item => {
            return typeof item === 'string';
        })
        ) {
            resolve(
                sortWords(
                    array.map(item => {
                        return item.toUpperCase();
                    })
                )
            );
        } else {
            reject(`Not everything in the array is a string`);
        }
    });
};
const sortWords = (array) => {
    return new Promise((resolve, reject) => {
        if (array) {
            resolve(array.sort());
        } else {
            reject(`Still no strings!`)
        }
    })
};

const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];

makeAllCaps(arrayOfWords)
    .then(sortWords(arrayOfWords))
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected));

makeAllCaps(complicatedArray)
    .then(sortWords(complicatedArray))
    .then(resolved => console.log(resolved))
    .catch(rejected => console.log(rejected));
// call both functions, chain them together and log the result to the console