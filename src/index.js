// Wave 2: Increase and Decrease Temperature
// state variable
let currentTemperature = 72;


// get the existing span elements
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const tempDisplay = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');


//update display based on current temperature
function updateTemperatureDisplay() {
  tempDisplay.textContent = currentTemperature;
  updateTemperatureColor();
  updateLandscape(); 
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


// Temperature color ranges--change both text and background of the temperature
function updateTemperatureColor() {
  if (currentTemperature >= 80) {
    tempDisplay.style.backgroundColor = 'red';
    tempDisplay.style.color = 'white'; 
  } else if (currentTemperature >= 70) {
    tempDisplay.style.backgroundColor = 'orange';
    tempDisplay.style.color = 'white';
  } else if (currentTemperature >= 60) {
    tempDisplay.style.backgroundColor = 'yellow';
    tempDisplay.style.color = 'black';
  } else if (currentTemperature >= 50) {
    tempDisplay.style.backgroundColor = 'green';
    tempDisplay.style.color = 'white';
  } else {
    tempDisplay.style.backgroundColor = 'teal';
    tempDisplay.style.color = 'white';
  }
}


// Landscape ranges
function updateLandscape() {
  if (currentTemperature >= 80) {
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (currentTemperature >= 70) {
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (currentTemperature >= 60) {
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
}

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
