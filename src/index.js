// two clickable elements

// state variable
let currentTemperature = 72;

// get the existing span elements
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const tempDisplay = document.getElementById('tempValue');

//update display
function updateTemperatureDisplay() {
  tempDisplay.textContent = currentTemperature;
}

//add click listeners to the spans
increaseTempControl.addEventListener('click' ,() => {
  currentTemperature += 1;
  updateTemperatureDisplay();
});

decreaseTempControl.addEventListener('click', () => {
  currentTemperature -= 1;
  updateTemperatureDisplay();
});

// Initialize
updateTemperatureDisplay();