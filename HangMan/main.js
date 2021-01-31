const second = document.querySelector('.second');
const wrong = document.querySelector('#wrong');
const guess = document.querySelector('#guess');
const wins = document.querySelector('#wins');
const man = document.querySelector('.man');
let choice;
let word;
let display;
let win = 0;
let w;

function init() { //resets all the values except win every round
  const words = ['food', 'drink', 'milk', 'apple', 'dog', 'fish', 'donkey', 'green', 'yellow', 'computer'];
  const random = Math.floor(Math.random() * 10); //gives a number between 0 - 9
  choice = words[random]; //pickes a random array element which is a string
  console.log(choice);
  word = Array.from(choice);
  display = []; //character array will be displayed in second
  w = 0;
  for (let i = 0; i < word.length; i++) {
    display.push('_');
  }
  wrong.innerHTML = `${w}`;
  guess.innerHTML = `${10-w}`;
  second.innerHTML = `${display.join(' ')}`;
  man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
}
init();
window.addEventListener('keydown', e => { //gets the pressed key
  let char = e.key.toLowerCase();
  if (/^[a-z]$/.test(char)) {
    keyMatch(char);
  }
});
const keyMatch = (key) => { //checks the pressed key
  if (choice.includes(key)) {
    word.forEach((letter, index) => {
      if (letter === key) {
        display[index] = key;
      }
    });
    console.log(display);
    second.innerHTML = `${display.join(' ')}`;
    if (!display.includes('_')) {
      win++;
      wins.innerHTML = `${win}`;
      alert(`Yes it's ${choice}. You won!!!`);
      init();
    }
  } else {
    w++;
    wrong.innerHTML = `${w}`;
    guess.innerHTML = `${10-w}`;
    man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
    if (w === 10) {
      alert(`It was ${choice}. You lost!!!`);
      init();
    }
  }
}
