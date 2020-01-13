// function expression

// *** contoh 1 *** 
const myTasks = function () {
    let data = [];
    
    for (let i = 0; i < arguments.length; i++) {
        data.push(arguments[i]);
    }
    
    return data;
}

console.log(myTasks('Learning Code', 'Washing Car', 'Watching Film'));

// *** contoh 2 ***
const plantNeedsWater = function(day) {
    if (day === 'Sunday') {
        return true;
    } else {
        return false;
    }
}

let isDay = 'Tuesday';
let checkNeedWater = plantNeedsWater(isDay);
console.log(checkNeedWater);