export default function Controls({
  playButton,
  pauseButton,
  setButton,
  stopButton,
}) {
  const play = () => {
    playButton.classList.add('hide');
    setButton.classList.add('hide');
    pauseButton.classList.remove('hide');
    stopButton.classList.remove('hide');
  };

  const pause = () => {
    pauseButton.classList.add('hide');
    stopButton.classList.remove('hide');
    playButton.classList.remove('hide');
    setButton.classList.add('hide');
  };

  const setTime = () => {
    setButton.classList.add('hide');
    playButton.classList.remove('hide');
    pauseButton.classList.add('hide');
    stopButton.classList.remove('hide');
  };

  const resetControls = () => {
    stopButton.classList.add('hide');
    pauseButton.classList.add('hide');
    playButton.classList.remove('hide');
    setButton.classList.remove('hide');
  };

  return { play, pause, setTime,resetControls };
}



