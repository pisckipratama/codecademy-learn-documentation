// penulisan 

let spaceShip = {
    'fuel type': 'Turbo Fuel',
    color: 'silver'
};
console.log(spaceShip);

// access properties
// -> cara 1 (menggunakan dot notation)
let identitas = {
    'nama': 'Piscki',
    'academy': 'Rubicamp',
    'role': 'JavaScript',
    'consentrate': 'Backend'
};

console.log(identitas.academy);

// -> cara 2 (Bracket Notation)
let returnAnyProp = (objectName, propName) => objectName[propName];

console.log(returnAnyProp(identitas, 'role'));

// nested object 
let spaceship = {
    passengers: null,
    telescope: {
        yearBuilt: 2018,
        model: "91031-XLT",
        focalLength: 2032
    },
    crew: {
        captain: {
            name: 'Sandra',
            degree: 'Computer Engineering',
            encourageTeam() {
                console.log('We got this!')
            },
            'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
        }
    },
    engine: {
        model: "Nimbus2000"
    },
    nanoelectronics: {
        computer: {
            terabytes: 100,
            monitors: "HD"
        },
        'back-up': {
            battery: "Lithium",
            terabytes: 50
        }
    }
};

const capFave = spaceship.crew.captain['favorite foods'];
console.log(capFave);
spaceship.passengers = [{
    name: 'Piscki Pratama',
    country: 'Indonesia'
}, {
    name: 'Fenti Rahmawati',
    country: 'Indonesia'
}]

console.log(spaceship.passengers[1]);

const angkasa = {
    homePlanet: 'Earth',
    color: 'silver'
};

let paintIt = obj => {
    obj.homePlanet = 'Mars';
    obj.color = 'gold';
};

console.log(angkasa.homePlanet);
console.log(angkasa.color);

paintIt(angkasa);
console.log(angkasa.homePlanet);
console.log(angkasa.color);

let tryReassigment = obj => {
    obj = {
        identified: false,
        'transport type': 'flying'
    }
    console.log(obj)
}

// tryReassigment(angkasa);
spaceship = {
    identified: false,
    'transport type': 'terbang'
};
console.log(spaceship)

// looping object
let uhuy = {
    crew: {
        captain: {
            name: 'Lily',
            degree: 'Computer Engineering',
            cheerTeam() {
                console.log('You got this!')
            }
        },
        'chief officer': {
            name: 'Dan',
            degree: 'Aerospace Engineering',
            agree() {
                console.log('I agree, captain!')
            }
        },
    }
};

for (let crewMember in uhuy.crew) {
    console.log(`${crewMember}: 
    ${uhuy.crew[crewMember].degree}`)
}