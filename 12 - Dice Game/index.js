let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let winner = document.querySelector('.winner');

document.querySelector('.img1').src = `./images/dice${randomNumber1}.png`;
document.querySelector('.img2').src = `./images/dice${randomNumber2}.png`;

if (randomNumber1 > randomNumber2) {
  winner.innerHTML = 'Player 1 Wins!';
} else if (randomNumber2 > randomNumber1) {
  winner.innerHTML = 'Player 2 Wins!';
} else {
  winner.innerHTML = 'Its a Draw!';
}
