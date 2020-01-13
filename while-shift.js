// while shift 

let myChores = ['Learn basic JavaScript', 'Read Node.js Book', 'Do Exercise'];
let goAhead = ''


while ((i = myChores.shift()) !== undefined) {
    goAhead += i + '\n';
}

console.log(goAhead);

const flower = ['peony', 'daffodil', 'marigold'];

function addFlower(arr) {
    arr.push('lily');
}

addFlower(flower);
console.log(flower);

// for (let i = 3; i >= 0; i--) {
//     console.log(i);
// }

let myArray = [2, 19, 20];
let herArray = [19, 81, 2];

for (let i = 0; i < myArray.length; i++) {
    for (let j = 0; j < herArray.length; j++) {
        if (myArray[i] === herArray[j]) {
            console.log('Both loops have the number: ' + herArray[j]);
        }
    }
};

let bobsFollowers = ['claudya', 'john', 'frank', 'alex'];
let tinasFollowers = ['angel', 'frank', 'claudya'];
let mutualFollowers = [];

for (let a = 0; a < bobsFollowers.length; a++) {
    for (let b = 0; b < tinasFollowers.length; b++) {
        if (bobsFollowers[a] === tinasFollowers[b]) {
            mutualFollowers.push(tinasFollowers[b]);
        }
    }
};

console.log(mutualFollowers);

// while
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

while (currentCard !== 'spade') {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}

let countString = '';
let angka = 0;

do {
    countString = countString + angka;
    angka++;
} while (angka < 5);

console.log(countString);

const firstMessage = 'I will print';
const secondMessage = 'I will not print';

do {
    console.log(firstMessage);
} while (true === false);

while (true === false) {
    console.log(secondMessage);
};

const timeFuncRuntime = funcParameter => {
    let t1 = Date.now();
    funcParameter();
    let t2 = Date.now();
    return t2 - t1;
}

const addOneToOne = () => 1 + 1;
console.log(timeFuncRuntime(addOneToOne));