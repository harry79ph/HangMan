const body = document.querySelector('body');
const colour = document.querySelector('#colour');
const second = document.querySelector('.second');
const wrong = document.querySelector('#wrong');
const guess = document.querySelector('#guess');
const wins = document.querySelector('#wins');
const man = document.querySelector('.man');
var counter = 0;
var words;
var random;
var choice;
var word;
var display;
var win = 0;
var w;
var g;
colour.addEventListener('click', e => {
    if (e.target.tagName === 'IMG') {
        switch (e.target.className) {
            case 'grey':
                body.setAttribute('style', 'background-color: grey;');
                break;
            case 'yellow':
                body.setAttribute('style', 'background-color: yellow;');
                break;
            case 'red':
                body.setAttribute('style', 'background-color: red;');
                break;
            case 'green':
                body.setAttribute('style', 'background-color: green;');
                break;
            case 'blue':
                body.setAttribute('style', 'background-color: blue;');
                break;
            case 'white':
                body.setAttribute('style', 'background-color: white;');
                break;
            default:
                break;
        }
    }
});
function init() {
    words = ['food', 'drink', 'milk', 'apple', 'butterfly', 'fish', 'donkey', 'green', 'yellow', 'black',
            'computer', 'phone', 'printer', 'pencil', 'rubber', 'face', 'arm', 'hand', 'flower', 'tree'];
    random = Math.floor(Math.random() * 20);
    choice = words[random];
    word = Array.from(choice);
    display = [];
    w = 0;
    g = 10;
    for (let i = 0; i < word.length; i++) {
        display.push('_');
    }
    wrong.innerHTML = `${w}`;
    guess.innerHTML = `${g}`;
    second.innerHTML = `${display.join(' ')}`;
    man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
}
if (counter === 0) {
    init();
}
counter++;
window.addEventListener('keydown', e => {
    keyMatch(e.key);
});
const keyMatch = (key) => {
    if (choice.includes(key)) {
        word.forEach((letter, index) => {
            if (letter === key) {
                display[index] = key;
            }
        });
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
        g--;
        guess.innerHTML = `${g}`;
        man.innerHTML = `<img src="imgs/${w}.png" alt="man">`;
        
    }
    if (w === 10) {
        setTimeout(() => {
            alert(`It was ${choice}. You lost!!!`);
        }, 100);
        init();
    }
}