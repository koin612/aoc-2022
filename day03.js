const { group } = require("console");
const fs = require("fs");

const input = fs.readFileSync("03.txt", "utf-8").trim().split("\n");

function appearsInBoth(contents) {
  const first = contents.substring(0, contents.length / 2);
  const second = contents.substring(contents.length / 2);

  for (let c of first) {
    if (second.includes(c)) {
      return c;
    }
  }
}

const prioritize = (a, c) => {
  const code = c.charCodeAt(0);
  return a + code - (isUpperCaseCode(code) ? 38 : 96);
};

const isUpperCaseCode = (code) =>
  code >= "A".charCodeAt(0) && code <= "Z".charCodeAt(0);

const priority = input.map(appearsInBoth).reduce(prioritize, 0);

console.log(priority);

const groups = [];
while (input.length) {
  groups.push(input.splice(0, 3));
}

const groupPriority = groups
  .map((contents) => {
    for (let c of contents[0]) {
      if (contents[1].includes(c) && contents[2].includes(c)) {
        return c;
      }
    }
  })
  .reduce(prioritize, 0);

console.log(groupPriority);
