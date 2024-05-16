const convertToCelsius = function (x) {
  //x °F ≘ (x − 32) × 5/9 °C
  answer = ((x - 32) * 0.5555)

  return parseFloat(answer.toFixed(1))
};

const convertToFahrenheit = function (x) {
  //x °C ≘ (x × 9/5 + 32) °F
  answer = (x * 1.8 + 32)
  return parseFloat(answer.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
