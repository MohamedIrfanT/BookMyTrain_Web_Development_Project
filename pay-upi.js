// Get the radio buttons
const cardRadio = document.getElementById("radio1");
const bankRadio = document.getElementById("radio2");
const upiRadio = document.getElementById("radio3");

// Get the divs for the different payment methods
const bankInfoDiv = document.getElementById("bank-info");
const upiInfoDiv = document.getElementById("upi-info");

// Add event listeners to the radio buttons to show/hide the appropriate divs
cardRadio.addEventListener("click", () => {
  bankInfoDiv.style.display = "none";
  upiInfoDiv.style.display = "none";
});

bankRadio.addEventListener("click", () => {
  bankInfoDiv.style.display = "block";
  upiInfoDiv.style.display = "none";
});

upiRadio.addEventListener("click", () => {
  bankInfoDiv.style.display = "none";
  upiInfoDiv.style.display = "block";
});

function f1() {
  window.alert("Payment Successful!");
}