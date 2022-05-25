export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls,
  sessionCompleted,
}) {
  let minutes = Number(minutesDisplay.textContent);
  let timerTimeout;

  const updateDisplay = (newMinutes, seconds) => {
    newMinutes = newMinutes === undefined ? minutes : newMinutes;
    seconds = seconds === undefined ? 0 : seconds;

    minutesDisplay.textContent = String(newMinutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
  };

  const sessionTime = () => {
    minutes = prompt('How many minutes would you like to set?');
    let isNumber = typeof minutes === 'Number';
    if (minutes < 25 || minutes !== isNumber) {
      minutes = 45;
    }
    updateDisplay(minutes, '0');
  };

  const counter = () => {
    timerTimeout = setTimeout(() => {
      let minutes = Number(minutesDisplay.textContent);
      let seconds = Number(secondsDisplay.textContent);
      let isFinished = minutes <= 0 && seconds <= 0;

      updateDisplay(minutes, 0);

      if (isFinished) {
        resetControls();
        resetCounter();
        sessionCompleted();
        return;
      }

      if (seconds <= 0) {
        seconds = 60;
        minutes -= 1;
      }

      updateDisplay(minutes, seconds - 1);
      counter();
    }, 1000);
  };

  const restTime = () => {
    
  }

  const moreMinutes = () => {
    minutes += 5;
    if (minutes > 60) {
      minutes = 60;
      secondsDisplay.textContent = '00';
    }

    updateDisplay(minutes, secondsDisplay.textContent);
  };

  const lessMinutes = () => {
    minutes -= 5;
    if (minutes < 25) {
      alert('You cannot have less than 25 minutes');
      minutes = 25;
    }

    updateDisplay(minutes, secondsDisplay.textContent);
  };

  const pauseCounter = () => {
    clearTimeout(timerTimeout);
  };

  const resetCounter = () => {
    resetControls();
    updateDisplay(minutes, '0');
    pauseCounter();
  };

  return {
    sessionTime,
    counter,
    updateDisplay,
    pauseCounter,
    resetCounter,
    moreMinutes,
    lessMinutes,
  };
}
