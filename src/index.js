// two clickable elements

// state variable
let currentTemperature = 72;

// get the existing span elements
const increaseTempControl = document.getElementById('increaseTempControl');
const decreaseTempControl = document.getElementById('decreaseTempControl');
const tempDisplay = document.getElementById('tempValue');
const landscape = document.getElementById("landscape");


//update display
function updateTemperatureDisplay() {
  tempDisplay.textContent = currentTemperature;
  updateTemperatureColor();
}

// Temperature color ranges
if (currentTemperature >= 80) {
    tempDisplay.style.color = "red";
  } else if (currentTemperature >= 70) {
    tempDisplay.style.color = "orange";
  } else if (currentTemperature >= 60) {
    tempDisplay.style.color = "goldenrod"; // yellow-ish
  } else if (currentTemperature >= 50) {
    tempDisplay.style.color = "green";
  } else {
    tempDisplay.style.color = "teal";
  }

// Landscape ranges

if (currentTemperature >= 80) {
    landscape.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
  } else if (currentTemperature >= 70) {
    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
  } else if (currentTemperature >= 60) {
    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
  } else {
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
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



// function to change both text and background of the temperature

// function updateTemperatureColor(){
//   const tempElement = document.getElementById('tempValue');

//   if (currentTemperature >= 80){
//     tempElement.style.color = 'red';
//   } else if (currentTemperature >= 70) {
//     tempElement.style.color = 'orange'
//   } else if (currentTemperature >= 60){
//     tempElement.style.color = 'yellow';
//   } else if (currentTemperature >= 50){
//     tempElement.style.color = 'green';
//   } else {
//     tempElement.style.color = 'teal';
//   }
// }


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