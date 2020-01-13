// helper function 

// ** contoh 1 **
function multiplyByNineFirst (num) {
    return num * (9/5);
}

function getFahrenheit(celcius) {
    return multiplyByNineFirst(celcius) + 32;
}

console.log(getFahrenheit(15));

// ** contoh 2 **
function monitorCount(rows, columns) {
    return rows * columns;
}

function costsOfMonitor(rows, columns) {
    return monitorCount(rows, columns) * 200;
}

const totalPrices = costsOfMonitor(4,5);
console.log(`The price of monitors is $${totalPrices}.00`);