const second = document.querySelector('.second');
const loss = document.querySelector('#losses');
const guess = document.querySelector('#guess');
const win = document.querySelector('#wins');
const man = document.querySelector('.man');
const message = document.querySelector('.message')
let choice, word, display, w, losses = 0, wins = 0;

function init() {
  const words = ['food', 'drink', 'milk', 'apple', 'dog', 'fish', 'donkey', 'green', 'yellow', 'computer'];
  const random = Math.floor(Math.random() * 10);
  choice = words[random];
  word = Array.from(choice);
  display = [];
  w = 0;
  display = word.map(item => '_');
  guess.innerHTML = `${10 - w}`;
  second.innerHTML = `${display.join(' ')}`;
  man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
}
init();
window.addEventListener('keypress', e => {
  let char = e.key.toLowerCase();
  if (/^[a-z]$/.test(char)) keyMatch(char);
});
const keyMatch = (key) => {
  if (choice.includes(key)) {
    word.forEach((letter, index) => {
      if (letter === key) display[index] = key;
    });
    second.innerHTML = `${display.join(' ')}`;
    if (!display.includes('_')) {
      wins++;
      win.innerHTML = `${wins}`;
      message.innerText = `Yes it's ${choice}. You won!!!`;
      message.classList.add('active');
      setTimeout(() => {
        message.classList.remove('active');
      }, 2000);
      init();
    }
  } else {
    w++;
    guess.innerHTML = `${10 - w}`;
    man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
    if (w === 10) {
      message.innerText = `It was ${choice}. You lost!!!`;
      losses++;
      loss.innerHTML = `${losses}`;
      message.classList.add('active');
      setTimeout(() => {
        message.classList.remove('active');
      }, 2000);
      init();
    }
  }
}
