// Get the radio buttons and bank info div
const radio1 = document.getElementById("radio1");
const radio2 = document.getElementById("radio2");
const radio3 = document.getElementById("radio3");
const bankInfo = document.getElementById("bank-info");

// Add a click event listener to the radio buttons
radio1.addEventListener("click", () => {
  bankInfo.style.display = "none";
});
radio2.addEventListener("click", () => {
  bankInfo.style.display = "block";
});
radio3.addEventListener("click", () => {
  bankInfo.style.display = "none";
});

function f1() {
  window.alert("Payment Successful!");
}
