console.log("Mohammed :) ");
//const hw = require('./hw.json'); // import file hw.json

const hw =
    [
        {
            "id": "0001",
            "type": "donut",
            "name": "Cake",
            "ppu": 0.78,
            "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" },
                        { "id": "1003", "type": "Blueberry" },
                        { "id": "1004", "type": "Devil's Food" }
                    ]
            },
            "topping":
                [
                    { "id": "5001", "type": "None" },
                    { "id": "5002", "type": "Glazed" },
                    { "id": "5005", "type": "Sugar" },
                    { "id": "5007", "type": "Powdered Sugar" },
                    { "id": "5006", "type": "Chocolate with Sprinkles" },
                    { "id": "5003", "type": "Chocolate" },
                    { "id": "5004", "type": "Maple" }
                ]
        },
        {
            "id": "0002",
            "type": "donut",
            "name": "Raised",
            "ppu": 0.55,
            "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" }
                    ]
            },
            "topping":
                [
                    { "id": "5001", "type": "None" },
                    { "id": "5002", "type": "Glazed" },
                    { "id": "5005", "type": "Sugar" },
                    { "id": "5003", "type": "Chocolate" },
                    { "id": "5004", "type": "Maple" }
                ]
        },
        {
            "id": "0003",
            "type": "donut",
            "name": "Old Fashioned",
            "ppu": 0.26,
            "batters":
            {
                "batter":
                    [
                        { "id": "1001", "type": "Regular" },
                        { "id": "1002", "type": "Chocolate" }
                    ]
            },
            "topping":
                [
                    { "id": "5001", "type": "None" },
                    { "id": "5002", "type": "Glazed" },
                    { "id": "5003", "type": "Chocolate" },
                    { "id": "5004", "type": "Maple" }
                ]
        }
    ]


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