// dubstep from codewars

function songDecoder(song) {
    Array.prototype.clean = function (deleteValue) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] == deleteValue) {
                this.splice(i, 1);
                i--;
            }
        }
        return this;
    }

    let rawData = song.split('WUB');
    let data = rawData.clean('');
    let result = '';

    if (data.length < 200 && (song == song.toUpperCase())) {
        for (let i = 0; i < data.length; i++) {
            result += data[i] + ' ';
        }
        return result.trim();
    } else {
        return ', the string\'s length doesn \'t exceed 200';
    }
}

console.log(songDecoder('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));

function tesNgehe(song) {
    return song.replace(/(WUB)+/g," ").trim();
}

console.log(tesNgehe('WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB'));