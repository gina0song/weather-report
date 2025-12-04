// two clickable elements

// state variable
let currentTemperature = 72;

// get the existing span elements
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const tempDisplay = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');


//update display
function updateTemperatureDisplay() {
  tempDisplay.textContent = currentTemperature;
}

// Temperature color ranges
if (currentTemperature >= 80) {
  tempDisplay.style.color = 'red';
} else if (currentTemperature >= 70) {
  tempDisplay.style.color = 'orange';
} else if (currentTemperature >= 60) {
  tempDisplay.style.color = 'goldenrod';
} else if (currentTemperature >= 50) {
  tempDisplay.style.color = 'green';
} else {
  tempDisplay.style.color = 'teal';
}

// Landscape ranges
if (currentTemperature >= 80) {
  landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
} else if (currentTemperature >= 70) {
  landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
} else if (currentTemperature >= 60) {
  landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
} else {
  landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
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

// Wave 3: Naming the City

const cityNameInput = document.getElementById('cityNameInput');
const headerCityName = document.getElementById('headerCityName');
const cityNameReset = document.getElementById('cityNameReset');

// Update the city name live as the user types
const updateCityName = () => {
  headerCityName.textContent = cityNameInput.value;
};

// Reset city name back to "Seattle"
const resetCityName = () => {
  cityNameInput.value = 'Seattle';
  updateCityName();
};

// Event listeners
cityNameInput.addEventListener('input', updateCityName);
cityNameReset.addEventListener('click', resetCityName);

// Initialize
updateCityName();
