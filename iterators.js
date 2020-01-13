// contoh 1 (forEach)
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
    console.log(artist + ' is one of my favorite artists.');
});

// contoh 2 (map)
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(number => {
    return number * number;
});

console.log(squareNumbers);

// contoh 3 (filter)
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
    return typeof thing === 'number';
});

console.log(onlyNumbers);

// *** Materi forEach ***
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(element => {
    console.log(`I want to eat ${element}`);
});

// *** materi map ***
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below

const bigNumbers = numbers.map(number => {
    return number * 10;
});

const secretMessage = animals.map(animals => {
    return animals[0];
})

console.log(secretMessage);

// *** materi filter ***
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(words => {
    return words.length <= 5;
})

console.log(shortWords);

// *** materi findIndex ***
const jumbledNums = [123, 25, 78, 5, 9];

const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

console.log(lessThanTen);

const binatang = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimals = binatang.findIndex(name => {
    return name === 'elephant';
});

console.log(foundAnimals);

const startsWithS = binatang.findIndex(huruf => {
    console.log(huruf[0]);
    return huruf[0] === 's';
});

console.log(startsWithS);

// *** materi reduce ***
const nomer = [1, 2, 4, 5, 10];
const summedNomer = nomer.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100)

console.log(summedNomer);

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator \t: ' + accumulator);
    console.log('The value of currentValue \t: ' + currentValue);
    return accumulator + currentValue;
}, 26);

console.log(newSum);

// *** materi some ***
const uhuy = ['uniques', 'uncannys', 'piqueqs', 'oxymorons', 'guiases'];
const missing = words.some((uhuy) => {
    return uhuy.length > 6;
});

console.log(missing);

// *** materi every ***
const isBelowThresHold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1.every(isBelowThresHold));
console.log([12, 15, 18, 130, 44].every(c => c >= 10));

// Menentukan iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];

const kata = cities.reduce((acc, currVal) => {
    console.log('This is value of acc: ' + acc);
    console.log('This is valie of currVal: ' + currVal);
    return acc + currVal[0];
}, 'C');

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);
console.log(longCities);

const smallerNums = nums.map(num => num - 5);
console.log(smallerNums);

console.log(nums.some(num => num < 0));
