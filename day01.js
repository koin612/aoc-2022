const fs = require("fs");

const input = fs
  .readFileSync("01.txt", "utf-8")
  .split("\n")
  .map((n) => (n === "" ? null : parseInt(n)));

const cals = [];

while (input.length) {
  cals.push(
    input
      .splice(0, input.indexOf(null) + 1)
      .filter((n) => n)
      .reduce((a, c) => a + c, 0)
  );
}

let maxCal = Math.max(...cals);

console.log(maxCal);

let topThreeCal = maxCal;

for (let i = 0; i < 2; i++) {
  const maxCalIndex = cals.indexOf(maxCal);
  cals.splice(maxCalIndex, 1);
  maxCal = Math.max(...cals);
  topThreeCal += maxCal;
}

console.log(topThreeCal);
