let yourName = prompt('What is your name? ');
let otherName = prompt('What is the other persons name? ');

let loveScore = Math.floor(Math.random() * 100) + 1;

loveScore = 10;

if (loveScore >= 75) {
  alert(
    `You are lucky!, you have ${loveScore}% of chance that ${otherName} loves you!`
  );
} else if (loveScore >= 50 && loveScore < 75) {
  alert(
    `There is still a chance!, you have ${loveScore}% of chance that ${otherName} loves you.`
  );
} else {
  alert(
    `I'm sorry bro, you have only ${loveScore}% of chance that ${otherName} loves you...`
  );
}
