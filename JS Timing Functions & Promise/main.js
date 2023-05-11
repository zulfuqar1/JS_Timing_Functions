
const red__light = document.querySelector('.red_light');
const yellow__light = document.querySelector('.yellow_light');
const green__light = document.querySelector('.green_light');

function setRed() {
  red__light.style.background = 'red';
  yellow__light.style.background = '#111';
  green__light.style.background = '#111';
  setTimeout(setYellow, 10000);
}

function setYellow() {
  red__light.style.background = '#111';
  yellow__light.style.background = 'yellow';
  green__light.style.background = '#111';
  setTimeout(setGreen, 2000);
}

function setGreen() {
  red__light.style.background = '#111';
  yellow__light.style.background = '#111';
  green__light.style.background = 'green';
  setTimeout(setRed, 15000);
}

setRed();
