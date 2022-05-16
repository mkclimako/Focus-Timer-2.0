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
  body,
  minutesDisplay,
  secondsDisplay,
} from './elements.js';

import Controls from './controls.js';
import Timer from './timer.js';

const control = Controls({ playButton, pauseButton, setButton, stopButton });
const timer = Timer({ minutesDisplay, secondsDisplay,resetControls: control.resetControls });

playButton.addEventListener('click', () => {
  control.play();
  timer.counter();
});

pauseButton.addEventListener('click', () => {
  control.pause();
  timer.pauseCounter();
});

setButton.addEventListener('click', () => {
  control.setTime();
  timer.sessionTime();
});

stopButton.addEventListener('click', () =>{
  control.resetControls();
  timer.resetCounter();
});

moreMinutesButton.addEventListener('click', () => {
  timer.moreMinutes();
})

lessMinutesButton.addEventListener('click', () => {
  timer.lessMinutes();
})

