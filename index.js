document
  .getElementById("tempForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var tempInput = parseFloat(document.getElementById("tempInput").value);
    var unitSelect = document.getElementById("unitSelect").value;
    var resultDisplay = document.getElementById("result");

    if (unitSelect === "celsius") {
      var result = (tempInput * 9) / 5 + 32;
      resultDisplay.textContent =
        tempInput + " Celsius is " + result.toFixed(2) + " Fahrenheit";
    } else {
      var result = ((tempInput - 32) * 5) / 9;
      resultDisplay.textContent =
        tempInput + " Fahrenheit is " + result.toFixed(2) + " Celsius";
    }
  });
