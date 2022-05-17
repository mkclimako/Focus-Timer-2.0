export default function Sounds() {
  const clickedSound = new Audio('./src/sounds/clickSound.mp3');
  const timeEnd = new Audio('./src/sounds/timeEnd.mp3');

  const forest = new Audio('./src/sounds/Floresta.wav');
  const rain = new Audio('./src/sounds/Chuva.wav');
  const fireplace = new Audio('./src/sounds/Lareira.wav');
  const coffeeShop = new Audio('./src/sounds/Cafeteria.wav');

  forest.loop = true;
  rain.loop = true;
  fireplace.loop = true;
  coffeeShop.loop = true;

  const buttonClickSound = () => {
    clickedSound.play();
  };

  const sessionCompleted = () => {
    timeEnd.play();
  };

  return {
    buttonClickSound,
    sessionCompleted,
    forest,
    rain,
    fireplace,
    coffeeShop,
  };
}
