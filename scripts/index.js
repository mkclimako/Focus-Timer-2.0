import {
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  moreMinutesButton,
  lessMinutesButton,
  body,main,p,svgs,
  minutesDisplay,
  secondsDisplay,
  darkModeButton,
  lightModeButton
} from './elements.js';

import Controls from './controls.js';
import Timer from './timer.js';
import Sounds from './sounds.js';

const sound = Sounds();
const control = Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
  forestSound,
  rainSound,
  fireplaceSound,
  coffeeShopSound,
  darkModeButton,
  lightModeButton,
  body,
  main,
  p,svgs
});
const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: control.resetControls,
  sessionCompleted: sound.sessionCompleted,
});

playButton.addEventListener('click', () => {
  control.play();
  timer.counter();
  sound.buttonClickSound();
});

pauseButton.addEventListener('click', () => {
  control.pause();
  timer.pauseCounter();
  sound.buttonClickSound();
});

setButton.addEventListener('click', () => {
  control.setTime();
  timer.sessionTime();
  sound.buttonClickSound();
});

stopButton.addEventListener('click', () => {
  control.resetControls();
  timer.resetCounter();
  sound.buttonClickSound();
});

moreMinutesButton.addEventListener('click', () => {
  timer.moreMinutes();
  sound.buttonClickSound();
});

lessMinutesButton.addEventListener('click', () => {
  timer.lessMinutes();
  sound.buttonClickSound();
});

forestSound.addEventListener('click', () => {
  control.forestSoundButton();
  sound.forest.play();
  sound.rain.pause();
  sound.fireplace.pause();
  sound.coffeeShop.pause();
});

rainSound.addEventListener('click', () => {
  control.rainSoundButton();
  sound.rain.play();
  sound.forest.pause();
  sound.fireplace.pause();
  sound.coffeeShop.pause();
});

fireplaceSound.addEventListener('click', () => {
  control.fireplaceSoundButton();
  sound.fireplace.play();
  sound.forest.pause();
  sound.rain.pause();
  sound.coffeeShop.pause();
});

coffeeShopSound.addEventListener('click', () => {
  control.coffeeShopSoundButton();
  sound.coffeeShop.play();
  sound.forest.pause();
  sound.rain.pause();
  sound.fireplace.pause();
});

const soundsButtons = [forestSound, rainSound, fireplaceSound, coffeeShopSound];
soundsButtons.forEach((button) => {
  button.addEventListener('dblclick', () => {
    button.classList.remove('selected');
    sound.coffeeShop.pause();
    sound.forest.pause();
    sound.rain.pause();
    sound.fireplace.pause();
  });
});

darkModeButton.addEventListener('click', () => {
  control.darkMode();
})

lightModeButton.addEventListener('click', () => {
  control.lightMode();
})
