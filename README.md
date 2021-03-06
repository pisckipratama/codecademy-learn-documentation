## MY Notes

### Fundamental data type JavaScript
- Number
- String
- Boolean
- Null
- Undifined
- Symbol (fitur yang akan datang)
- Object (collection data)

urutan 6 pertama merupakan tipe data primitif

### Interpolation 
yaitu mengisi value variable menggunakan backtick.

### List Falsy
- 0
- string kosong ("") atau ('')
- null
- Undifined
- NaN

### Reduce Array 
yaitu digunakan untuk mengakumulasikan atau mengurangi nilai berdasarkan elemen di dalam array.

### Helper Function
yaitu fungsi yang memanggil fungsi lainnya untuk mengeksekusi sebuah program.

### Function Expression
adalah fungsi yang dideklarasikan di dalam variable. Biasanya menggunakan keyword ```const``` untuk deklarasi variable-nya. Fungsi ini juga tidak bisa di ```hoisting``` seperti di fungsi deklarasi.

### Anonymous Function
adalah fungsi yang tidak memiliki nama.

### Arrow Function
syntax function javascript terbaru dari ES6 dengan menggunakan ```() =>.``` Menghilangkan keyword ```function```. Contoh :
``` javascript
const rectangleArea = (width, height) => {
  let area = width * height;
  return area;
};
```

### Concise Body Arrow Function
JavaScript arrow function bisa diringkas dengan menggunakan satu line saja. Contoh:
```javascript
const squareNum = (num) => num * num;
```

### Scope Pollution
Mempunyai banyak variable global bisa menyebabkan beberapa masalah dalam program. Dengan demikian scope pollution adalah ketika kita memiliki banyak global variable yang ada di global namespace atau ketika kita menggunakan ulang variable di berbagai cakupan.

### Practice Good Scoping
Untuk penulisan scope terbaik dalam javascript bisa menggunakan block scope atau contoh seperti program berikut:
```javascript
const logVisibleLightWaves = () => {
    let lightWaves = 'Moonlight';
    let region = 'The Arctic';

    if (region === 'The Arctic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }

    console.log(lightWaves);
};

logVisibleLightWaves();

}
```
Walaupun kita menggunakan block scope, kita masih mendapatkan Scope Pollution karena menggunakan kembali variable yang sama sebanyak 2 kali. Dengan demikian lebih baik menggunakan variable di dalam block.

### Function as Data
Ada kalanya kita menuliskan nama function dengan karakter yang banyak, untuk memudahkan kita fungsi bisa ditampung lagi dalam satu variable, contoh:
```javascript
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
}

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
```
Code diatas menjelaskan bahwa function ```checkThatTwoPlusTwoEqualsFourAMillionTimes()``` disimpan di variable ```is2p2```, sehingga dalam pemanggilan fungsi tidak perlu ribet.
<br>

### Function Name
Pada suatu saat kita pun bakal menjumpai bahwa kita lupa dengan nama fungsi yang telah kita buat dan disimpan ke suatu varible, untuk itu kita memerlukan method name function untuk mengecek nama dari fungsi tersebut, contoh: 
```javascript
console.log(is2p2.name);
```
### Callback Function
fungsi callback adalah fungsi yang diteruskan sebagai argumen ke fungsi lain.

### Iterators - .forEach() Method
forEach method mengambil argument fungsi callback. Return value forEach akan selalu berbentuk ```undefined```. Penulisan syntax forEach akan lebih baik menggunakan ES6, tetapi masih bisa juga menggunakan fungsi declarasi yang biasa, contoh penulisan syntax:
```javascript
const groceries = ['brown sugar', 'salt', 'walnuts', 'milk'];

// contoh 1
groceries.forEach(function(groceryItem) {
  console.log(' - ' + groceryItem);
});

// contoh 2
groceries.forEach(groceryItem => console.log(groceryItem));

// contoh 3
function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);
```

### Iterators - .map() Method
`map()` method akan menghasilkan array baru ketika `map()` dipanggil akan dibutuhkan suatu argument di dalam fungsi callback. Cara kerja `map()` sama seperti `forEach()`, yang membedakan nya adalah `.map()` mengembalikan array baru. Contoh penulisan syntax:
```javascript
const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers) // Output: [10, 20, 30, 40, 50]
```

### Iterators - .filter() Method
Membuat array baru dengan semua elemen yang bernilai true yang telah diimplementasikan oleh fungsi yang disediakan. Contoh syntax
```javascript
const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door'];

const shortWords = words.filter(words => {
    return words.length <= 5;
})

console.log(shortWords);
// output: [ 'chair', 'music', 'brick', 'pen', 'door' ]
```
Kode diatas berisi perintah untuk menampilkan element dalam array `words` yang jumlah `length` nya lebih kecil sama dengan 5.

### Iterators - .findIndex() Method
Akan mengembalikan index element pertama yang bernilai true pada fungsi callback. Contoh syntax:
```javascript
const jumbledNums = [123, 25, 78, 5, 9];
const lessThanTen = jumbledNums.findIndex(num => {
    return num < 10;
});

console.log(lessThanTen); 
// Output: 3
```
Kode menghasilkan output 3 karena index pertama yang bernilai true dalam function diatas adalah index ke-3.

### Iterator - .reduce() Method
Method `.reduce()` mengembalikan nilai tunggal setelah iterasi melalui elemen-elemen array, sehingga mengurangi array. Contoh syntax:
```javascript
const nomer = [1, 2, 4, 5, 10];
const summedNomer = nomer.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
});

console.log(summedNomer); // Output: 22
```
Bisa juga ditambahkan dengan bilangan tertentu seperti berikut:
```javascript
const nomer = [1, 2, 4, 5, 10];
const summedNomer = nomer.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 100); // <- paramater kedua untuk dijumlahkan 100

console.log(summedNomer); // Output: 122
```

### Iterator - .some() Method
Metode some () menguji apakah setidaknya satu elemen dalam array bernilai true yang dilaksanakan oleh fungsi yang disediakan. Ini mengembalikan nilai Boolean. Contoh syntax:
```javascript
const uhuy = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
const missing = words.some((uhuy) => {
    return uhuy.length < 6;
});

console.log(missing); // Output: true
```
Kode diatas menghasilkan `true` karena salah satu element dari array `uhuy` ada yang memiliki panjang kurang dari 6 karakter.

### Iterator - .every() Method
Method ini sama seperti `some()` tetapi jika disalah satu element ada yang bernilai `false` maka akan mengembalikan nilai `false`. Contoh syntax:
```javascript
const isBelowThresHold = (currentValue) => currentValue < 40;
const array1 = [1, 30, 49, 29, 10, 13];

console.log(array1.every(isBelowThresHold)); // Output: false
```
Kode diatas akan menghasilkan boolean `false` karena disalah satu element array `isBelowThresHold` ada yang bernilai `false` dalam function-nya.

### Object Pass by Reference
Ini berarti ketika kita mem `pass` variabel yang diassign ke object dan ke fungsi sebagai argument, komputer menerjemahkan nama parameter sebagai menunjuk ke ruang di memori yang memegang object itu. Akibatnya, fungsi yang mengubah properti objek sebenarnya bermutasi objek secara permanen (bahkan ketika objek ditugaskan ke variabel const).

### Looping Through Object
Untuk me-looping object bisa menggunakan `for...in`. Contoh syntax:
```javascript
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
    console.log(`${crewMember}: ${uhuy.crew[crewMember].degree}`)
}

// Output:
// captain: Computer Engineering
// chief officer: Aerospace Engineering
// medic: Physics
// translator: Conservation Science
```

### Arrow Function with this keyword
Untuk menggunakan `this` keyword dalam arrow function di object *sangat tidak disarankan* karena arrow function pada dasarnya sudah mengandung `this`. Dengan demikian `this` yang menggunakan arrow function akan menghasilkan nilai `undefined`. Contoh syntax:
```javascript
const cat = {
    dietType: 'carnivore',
    makeSound() {
        console.log('Miauww');
    },
    diet: () => {
        console.log(this.dietType);
    }
}

cat.diet(); // undefined
```

### Privacy Object
Biasanya delevoper JavaScript menamai property dengan awalan <i>underscore</i> (`_`) yang berarti property tidak harus diubah. Berikut contoh syntax-nya:
```javascript
const robot = {
    _energyLevel: 100,
    recharge() {
        this._energyLevel += 30;
        console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
};

console.log(robot.recharge());
```

### Getters Object
Getters adalah metode yang mendapatkan dan mengembalikan properti internal pada suatu object. Tetapi mereka dapat melakukan lebih dari sekedar mengambil nilai property. Contoh syntax:
```javascript
const person = {
    _firstName: 'Fenti',
    _lastName: 'Rahmawati',
    get fullName() {
        if (this._firstName && this._lastName) {
            return `${this._lastName} ${this._firstName}`;
        } else {
            return 'Missing a first name or a last name.';
        }
    }
}

console.log(person.fullName); // Output: Rahmawati Fenti
```

### Setter Object
Seiring dengan metode `getters`, kita juga bisa membuat metode `setter` yang menetapkan nilai properti yang ada dalam suatu objek. Contoh syntax:
```javascript
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num){
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      console.log('Pass in a number that is greater than or equal to 0');
    }
  }
};

robot.numOfSensors = 100;
console.log(robot.numOfSensors); // Output: 100
```

### Factory Function
Dengan factory function kita bisa membuat banyak instance object dengan cepat. Contoh syntax:
```javascript
const monsterFactory = (name, age, energySource, catchPhrase) => {
    return {
        name: name,
        age: age,
        energySource: energySource,
        scare() {
            console.log(catchPhrase);
        }
    }
}
const herScare = monsterFactory('Fenti', 21, 'Be Loved', 'aaaaa!');
herScare.scare() // Output: aaaaa!
```

### Property Value Shorthand
Kita bisa mempersingkat penulisan factory function dengan metode property value shorthand. Berikut contoh syntax-nya:
```javascript
const myPassion = (jobs, hobby) => {
    return {
        jobs,
        hobby
    }
};

const myDataPassion = myPassion('backend', 'soccer');
console.log(myDataPassion.hobby); // Output: soccer
```

### Destructured Assignment
Teknik ini digunakan untuk memanggil value dari object dengan cara shorthand.
```javascript
const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
        day: 'stay inside',
        night: 'satisfy appetite',
        morning: {early: 'hahaha', atEight: 'huhuhu'}
    }
};

const { residence } = vampire;
console.log(residence); // Output: Transylvania

const { early } = vampire.preferences.morning;
console.log(early); // Output: hahaha
```

### Object.key()
Untuk mengambil key dan dijadikan array. Contoh syntax:
```javascript
const myWish = {
    role: 'Programmer',
    expert: 'JavaScript',
    degree: 'Backend Web Developer',
    minSalary: 10000000,
    hasOwnHome: true,
};

const myGirlKeys = Object.keys(myGirl);
console.log(myGirlKeys) // Output: [ 'role', 'expert', 'degree', 'minSalary', 'hasOwnHome' ]
```

### Object.entries()
Untuk menampilkan key dan value dan dijadikan array. Contoh syntax:
```javascript
const object1 = {
    a: 'somestring',
    b: 42
};

const antrian = Object.entries(object1);
console.log(antrian); // Output: [ [ 'a', 'somestring' ], [ 'b', 42 ] ]
```

### Object.assign()
untuk menambah key dan value dari suatu object. Contoh syntax:
```javascript
const object1 = {
    a: 'somestring',
    b: 42
};

const newRobot = Object.assign(object1, {
    laserBlaster: true,
    voiceRecognition: true
})

console.log(newRobot); // Output: { a: 'somestring', b: 42, laserBlaster: true, voiceRecognition: true }
```

### Classes
Adalah sebuah tool yang memungkinkan developer bisa membuat object yang sama dengan cepat. Contoh penulisan:
```javascript
class Dog {
    constructor(name) { // custructor
        this._name = name;
        this._behavior = 0;
    }

    get name() { // getter method 
        return this._name;
    }
    get behavior() { // getter method
        return this._behavior;
    }

    incrementBehavior() { // method
        this._behavior++;
    }
}

const halley = new Dog('Halley'); // instance
console.log(halley.name); // Output: Halley
console.log(halley.behavior); // Output: 0
halley.incrementBehavior(); 
console.log(halley.behavior); // Output: 0
```
Ada beberapa bagian dari class yang perlu diketahui, yaitu:
- `constructor` yaitu method yang harus dipanggil setiap membuat instance baru dalam class. Setiap parameter harus menggunakan keyword `this`.
- `instance` yaitu sebuah object yang berisi nama property dan method class tersebut. Tetapi dengan nilai value yang unique.
- `methods` yaitu perilaku atau fungsi yang bisa dilakukan oleh class tersebut.

Untuk contoh penulisan bisa dilihat di contoh syntax diatas yang sudah diberi keterangan.

### Inheritance
Menurunkan class, terdiri dari `parent class` dan `child class`. Parent class merupakan class yang inti dan child class merupakan class yang diturunkan. Berikut syntax penulisannya:
```javascript
// => parent class
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

// => child class
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
console.log(nurseOlynyk);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification('Genetics');
console.log(nurseOlynyk.certifications);
```
Dalam inheritance ada 2 keyword yang wajib yaitu :
- `extends`, keyword ini bertugas membuat method yang ada di parent class ke dalam child class.
- `super`, untuk memanggil constructor parent class, dalam contoh code diatas `super(name)` berarti mengambil argument `name` dari `HospitalEmployee` (parent class) ke `Nurse` (child class).

<b>NOTICE:</b> `super` wajib dipanggil di awal construction.

### Static Methods
Adalah methods yang hanya bisa dijalankan diparent classnya dan tidak perlu untuk menginstance class nya. Contoh syntax:
```javascript
class ClubSepakbola {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    static generateName() {
        const names = ['Arema', 'Persib', 'Persija', 'Persebaya', 'Bali United'];
        const randomNumber = Math.floor(Math.random() * 5);
        return names[randomNumber];
    }

    get name() {
        return this._name;
    }
}

console.log(ClubSepakbola.generateName()); // output: random club sepakbola

const pelatihClub = new ClubSepakbola('Rene Alberts'); // instance
// console.log(pelatihClub.generateName()); // will output error
```

### Babel
adalah library javascript untuk mengubah syntax ES6 ke ES5 agar bisa dijalankan di browser yang tidak compatibel dengan ES6.

Langkah-langkah install babel, sebelumnya buat dulu folder src, dan masukkan file `main.js` yang berisi syntax ES6, berikut perintahnya:
- ```npm install babel-cli```
- ```npm install babel-preset-env``` 
- ```npm run build```

Setelah 3 perintah tersebut dijalankan, cek apakah ada folder `/lib` dan berisikan file `main.js`, file tersebut merupakan syntax ES5-nya.

### Babel npm init
Perintah `npm init` untuk setup project JavaScript ketika menjalankan npm run build, akan menghasilak json file dengan nama `package.json` yang berisikan informasi tentang project yang telah disetup menggunakan `npm init`. Lalu bisa menggunakan perintah yang sama.

### Babel .babelrc
Untuk menspesifikasikan javascript version dan versi lainnya. Buat file `.babelrc` dengan perintah: `touch .babelrc`

Setelah itu isi file `.babelrc` tersebut dengan teks berikut:
```json
{
  "presets": ["env"]
}
```
Ketika babel dijalankan ia akan menentukan versi javascript yang telah diinisialisasi. Untuk perintah `["env"]` ia akan menginstruksikan babel untuk mengconvert ES6 ke ES5.

### Babel Source Lib
Ini adalah langkah terakhir untuk mengkonvert ES6 ke ES5, kita butuh `package.json` untuk melakukan converting. Di dalam `package.json` ada property yang bernama `scripts` yang menampung sebuah object untuk menspesifikasikan command line shortcuts. Kira kira seperti ini:
```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1"
}, ...
```
Untuk mensetting babel kita perlu menambahkan beberapa baris perintah menjadi seperti berikut:
```json
...
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "build": "babel src -d lib"
}
```

### Babel build
Setelah melakukan installasi, initialize, dan menambah script build, sekarang babel siap untuk dieksekusi. Kita hanya perlu menjalankan perintah `npm run build`

### Modules
Javascript modules sering digunakan untuk export program yang akan digunakan oleh program lain.

### Modules (module.exports)
```javascript
// contoh 1
let Airplane = {};
Airplane.myAirplane = "StarJet";

module.exports = Airplane;

// contoh 2
module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};
```

### Modules (require)
```javascript
const Airplane = require('./1-airplane.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();
```