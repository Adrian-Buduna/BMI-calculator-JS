// ------------------------------ Change measurement system ------------------------------
let btnSystem = document.getElementById("btnSystem");
btnSystem.innerText = "Change to Imperial system";
let metricSystem = true;
const weightType = ["kg", "lbs"];
const heightType = ["cm", "inch"];

let weightSpan = document.getElementById("weightSpan");
let heightSpan = document.getElementById("heightSpan");
weightSpan.innerText = weightType[0];
heightSpan.innerText = heightType[0];

const addMetric = () => {
  metricSystem = true;
  btnSystem.innerText = "Change to Imperial system";
  weightSpan.innerText = weightType[0];
  heightSpan.innerText = heightType[0];
};
const addImperial = () => {
  metricSystem = false;
  btnSystem.innerText = "Change to Metric system";
  weightSpan.innerText = weightType[1];
  heightSpan.innerText = heightType[1];
};

const changeMeasurementSystem = () => {
  metricSystem ? addImperial() : addMetric();
};
// event button change system;
btnSystem.addEventListener("click", function (e) {
  e.preventDefault();
  changeMeasurementSystem();
});
// ------------------------------ Calculate BMI ------------------------------
let submit = document.getElementById("submit");
let heightInput = document.getElementById("heightInput");
let weightInput = document.getElementById("weightInput");
let examples = document.getElementById("examples");
let resultMessage = document.getElementById("resultMessage");

const reusebelInsertAdjacentHTML = (color, result) => {
  return resultMessage.insertAdjacentHTML(
    "afterend",
    ` <div class="pad ${color} message" style="width:100%; ">Your BMI is ${result}</div>`
  );
};

const displayResultMessage = (result) => {
  var result = Math.round(result * 10) / 10;
  if (result) {
    examples.classList.add("invisible");
  }
  if (result < 18.5) {
    reusebelInsertAdjacentHTML("gray", result);
  } else if (result >= 18.8 && result <= 24.9) {
    reusebelInsertAdjacentHTML("green", result);
  } else if (result >= 25 && result <= 29.9) {
    reusebelInsertAdjacentHTML("yellow", result);
  } else if (result >= 30 && result <= 39.9) {
    reusebelInsertAdjacentHTML("orange", result);
  } else if (result > 40) {
    reusebelInsertAdjacentHTML("red", result);
  }
};

const calculateBMI = () => {
  let result = 0;
  let weight = Number(weightInput.value);
  if (metricSystem) {
    let height = Number(heightInput.value) / 100;
    result = weight / height ** 2;
    displayResultMessage(result);
  } else {
    let height = Number(heightInput.value);
    result = (weight / height ** 2) * 703;
    displayResultMessage(result);
  }
};

const checkIfNotEmpty = () => {
  return heightInput.value != "" && weightInput.value != "" ? true : false;
};
console.log(weightInput.value);
const setInputEmpty = () => {
  weightInput.value = "";
  heightInput.value = "";
};
// event button for BMI;
submit.addEventListener("click", function (e) {
  e.preventDefault();
  if (checkIfNotEmpty()) {
    calculateBMI();
    setInputEmpty();
  }
});