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
  body
} from './elements.js';

import Controls from './controls.js';

const control = Controls({playButton,pauseButton,setButton,stopButton});

playButton.addEventListener('click', control.play);
pauseButton.addEventListener('click', control.pause);
setButton.addEventListener('click', control.setTime);
stopButton.addEventListener('click', control.stop);