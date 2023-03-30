let elves = ['Galadriel', 'Elrond', 'Turgon', 'Ecthelion'];
console.log(elves);
console.log(elves[2]);
console.log(elves.length);
console.log(elves.includes('Elrond'));

elves.push('Finwe');
console.log(elves);

elves.pop();
console.log(elves);

let names = ['Angela', 'Ben', 'Jenny', 'Michael', 'Chloe'];

function whosPaying(names) {
  let size = names.length;
  let randomName = Math.floor(Math.random() * size);
  return names[randomName];
}

console.log(whosPaying(names));
