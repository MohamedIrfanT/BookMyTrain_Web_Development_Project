// Get the passenger form and passengers list elements
const passengerForm = document.querySelector('#passenger-form');
const passengersList = document.querySelector('#passengers-list');

// Add an event listener to the passenger form for the "submit" event
passengerForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the passenger name, age, gender, and seat preference values from the form
  const passengerName = document.querySelector('#passenger-name').value;
  const passengerAge = document.querySelector('#passenger-age').value;
  const passengerGender = document.querySelector('#passenger-gender').value;
  const passengerSeat = document.querySelector('#passenger-seat').value;

  // Create a new list item element and set its text content to the passenger details
  const passengerItem = document.createElement('li');
  passengerItem.textContent = `${passengerName}, ${passengerAge}, ${passengerGender}, ${passengerSeat}`;

  // Add the new list item element to the passengers list
  passengersList.appendChild(passengerItem);

  // Reset the passenger form
  passengerForm.reset();
});

// Get the payment form element
const paymentForm = document.querySelector('#payment-form');

// Add an event listener to the payment form for the "submit" event
paymentForm.addEventListener('submit', (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the card number, expiry, and CVV values from the form
  const cardNumber = document.querySelector('#card-number').value;
  const cardExpiry = document.querySelector('#card-expiry').value;
  const cardCVV = document.querySelector('#card-cvv').value;

  // Display the payment details
  alert(`Payment Details:\nCard Number: ${cardNumber}\nExpiry: ${cardExpiry}\nCVV: ${cardCVV}`);
  
  // Reset the payment form
  paymentForm.reset();
});

function f1() {
  window.alert("Cannot add more than 2 passengers. You can only book 2 tickets in a single transaction.");
}
