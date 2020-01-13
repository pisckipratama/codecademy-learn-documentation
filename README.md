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