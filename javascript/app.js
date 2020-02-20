const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

const $ = selector => document.querySelectorAll(selector);

const keys = $('.key');
const keysBlack = $('.key.black');
const keysWhite = $('.key.white');

keys.forEach(key => {
    key.addEventListener('click', () => playNote(key));
})

document.addEventListener('keydown', e => {
    if (e.repeat) return true;
    const keysBlackIndex = BLACK_KEYS.indexOf(e.key);
    const keysWhiteIndex = WHITE_KEYS.indexOf(e.key);
    if (keysBlackIndex > -1) playNote(keysBlack[keysBlackIndex]);
    if (keysWhiteIndex > -1) playNote(keysWhite[keysWhiteIndex]);
})

function playNote(key) {
    const sound = document.getElementById(key.dataset.note);
    sound.currentTime = 0;
    sound.play();
    key.classList.add('active');
    sound.addEventListener('ended', () => {
        key.classList.remove('active');
    })
}
