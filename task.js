console.log("Mohammed :) ");
const hw = require('./hw.json'); // import file hw.json

console.log("1. All topping types: ");
for (var a in hw) {
    console.log(hw[a].topping);
}
console.log();

console.log("2. All batters types: ");
for (let b in hw) {
    console.log(hw[b].batters);
}
console.log();

var sum = 0;
var count = 0;
console.log("3. All Ppu average and Ppu sum: ");
for (let c in hw) {
    sum += hw[c].ppu
    count++;
}
console.log();

console.log("ppu average = " + sum / count);
console.log("ppu sum = " + sum);
console.log();

console.log("5. List of all mentioned IDs");
for (let d in hw) {
    console.log(hw[d].id);
    for (var i in hw[d].batters.batter) {
        var temp = hw[d].batters.batter;
        console.log(temp[i].id);
    }

    for (var i in hw[a].topping) {
        var temp = hw[a].topping;
        console.log(temp[i].id);
    }

}