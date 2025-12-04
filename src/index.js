// Wave 2: Increase and Decrease Temperature
// state variable
let currentTemperature = 72;


// get the existing span elements
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const tempDisplay = document.getElementById('tempValue');
const landscape = document.getElementById('landscape');


// Temperature color ranges--change both text and background of the temperature
const updateTemperatureColor = () => {
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
};


// Landscape ranges--change the landscape emojis based on temperature
const updateLandscape = () => {
  if (currentTemperature >= 80) {
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (currentTemperature >= 70) {
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (currentTemperature >= 60) {
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else {
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};


//update display based on current temperature
const updateTemperatureDisplay = () => {
  tempDisplay.textContent = currentTemperature;
  updateTemperatureColor();
  updateLandscape();
};


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
  headerCityName.textContent = cityNameInput.value; // updates the displayed name
};

// Wave 6, Reset city name back to "Seattle"
const resetCityName = () => {
  cityNameInput.value = 'Seattle'; // Sets the input back to default
  updateCityName();
};

// Event listeners
cityNameInput.addEventListener('input', updateCityName);
cityNameReset.addEventListener('click', resetCityName);

// Initialize
updateCityName();




// Wave 4: Calling APIs
const currentTempButton = document.getElementById('currentTempButton');

// Function to fetch and update temperature based on city name
const getCoordinates = async (cityName) => {
  try {
    const response = await axios.get('http://localhost:5000/location',{
      params:{
        q: cityName
      }
    });

    const lat = response.data[0].lat;
    const lon = response.data[0].lon;

    return {lat,lon};
  } catch (error){
    console.error('Error getting coordinates:', error);
    return null;
  }
};


//Function to get weather from coordinates
const getWeather = async(lat, lon) =>{
  try {
    const response = await axios.get('http://localhost:5000/weather',{
      params:{
        lat: lat,
        lon: lon
      }
    });

    // Temp is in Kelvin, convert to Fahrenheit
    const convertKelvinToFahrenheit = (temp) => {
      return ((temp - 273.15) * (9 / 5) + 32);
    };

    const kelvinTemp = response.data.main.temp;
    const fahrenheitTemp = Math.round(convertKelvinToFahrenheit(kelvinTemp));

    return fahrenheitTemp;

  } catch (error) {
    console.error('Error getting weather:', error);
    return null;
  }
};


// Function to get realtime temp
//listener for the button
const getRealtimeTemperature = async () => {
  const cityName = cityNameInput.value;

  getCoordinates(cityName)
    .then((coords) => {
      if (!coords) return;

      return getWeather(coords.lat, coords.lon);
    })
    .then((temp) => {
      if (!temp) return;

      currentTemperature = temp;
      updateTemperatureDisplay();
      return temp;
    })
    .catch((error) =>{
      console.log('error in getRealtimeTemperature!', error);
    });
};

// Event listener for the button
currentTempButton.addEventListener('click', getRealtimeTemperature);


// Wave 5: Sky selection

const skySelect = document.getElementById('skySelect');
const sky = document.getElementById('sky');

const skyColorsAndValue = {
  sunny: '☁️ ☁️ ☁️ ☀️ ☁️ ☁️',
  cloudy: '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️',
  rainy: '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧',
  snowy: '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨'
};

const updateSky = () => {
  const selected = skySelect.value.toLowerCase();
  sky.textContent = skyColorsAndValue[selected];

};

skySelect.addEventListener('change', updateSky);

// Inicialize on page load

updateSky();
