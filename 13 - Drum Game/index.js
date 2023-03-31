let button = document.querySelectorAll('button');

button.forEach(b => {
  b.addEventListener('click', function () {
    console.log(this.classList[0]);
  });
});

// let audio = new Audio('./sounds/crash.mp3');
// audio.play();
