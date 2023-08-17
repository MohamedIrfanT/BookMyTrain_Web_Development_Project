// Get references to the input elements and button
const fromInput = document.getElementById("from");
const toInput = document.getElementById("to");
const dateInput = document.getElementById("date");
const classSelect = document.getElementById("class");
const searchButton = document.querySelector("button[type='submit']");

// Attach a click event listener to the search button
searchButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the input values and redirect to train.html
  const fromValue = fromInput.value;
  const toValue = toInput.value;
  const dateValue = dateInput.value;
  const classValue = classSelect.value;

  const queryString = `?from=${fromValue}&to=${toValue}&date=${dateValue}&class=${classValue}`;
  window.location.href = `train.html${queryString}`;
});

function searchTrains() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const classValue = document.getElementById("class").value;

  // Construct the query string using the input values
  const queryString = `?from=${from}&to=${to}&date=${date}&class=${classValue}`;

  // Redirect to train.html with the query string
  window.location.href = `help.html`;
}
