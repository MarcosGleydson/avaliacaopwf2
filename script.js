let fontSize = 16;
const body = document.body;

document.getElementById('increase-font').addEventListener('click', () => {
    fontSize += 2;
    body.style.fontSize = fontSize + 'px';
});

document.getElementById('decrease-font').addEventListener('click', () => {
    if (fontSize > 10) {
        fontSize -= 2;
        body.style.fontSize = fontSize + 'px';
    }
});

document.getElementById('toggle-contrast').addEventListener('click', () => {
    body.classList.toggle('high-contrast');
});