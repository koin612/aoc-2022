const fs = require("fs");

const input = fs.readFileSync("02.txt", "utf-8").trim().split("\n");

const points = ["X", "Y", "Z"];

const rules = {
  win: {
    A: "Y",
    B: "Z",
    C: "X",
  },
  draw: {
    A: "X",
    B: "Y",
    C: "Z",
  },
  loss: {
    A: "Z",
    B: "X",
    C: "Y",
  },
};

function checkWin(first, second) {
  if (rules.draw[first] === second) return 3;
  if (rules.win[first] === second) return 6;
  return 0;
}

function getResult(input) {
  return input.reduce((a, c) => {
    const [first, second] = c.split(" ");
    const choicePoints = points.indexOf(second) + 1;
    const roundPoints = checkWin(first, second);
    return a + choicePoints + roundPoints;
  }, 0);
}

console.log(getResult(input));

function secretStrat() {
  const strat = {
    X: rules.loss,
    Y: rules.draw,
    Z: rules.win,
  };
  return input.map((n) => {
    const [first, second] = n.split(" ");
    return `${first} ${strat[second][first]}`;
  });
}

console.log(getResult(secretStrat()));
