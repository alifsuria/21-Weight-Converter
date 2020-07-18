const value = document.querySelector("#value");
const display = document.querySelector(".display");
const form = document.querySelector("form");
function calculation() {
  let amount = value.value;

  if (amount <= 0 || isNaN(amount)) {
    display.innerHTML = "Please enter a value";
    setTimeout(function() {
      display.innerHTML = "";
      value.value = ""
    }, 2000);
  } else {
    let calc = Number(amount) / 2.2;
    display.innerHTML = `${calc.toFixed(2)} Kilograms`;
    console.log(amount);
    setTimeout(function() {
      display.innerHTML = "";
      value.value = "";
    }, 10000);
  }
}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  calculation();
});
