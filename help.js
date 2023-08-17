// Selecting the form element
const form = document.querySelector('form');

// Adding event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Preventing default form submission

  // Getting the form input values
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const subject = document.querySelector('#subject').value;
  const message = document.querySelector('#message').value;

  // Logging the form input values
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Subject: ${subject}`);
  console.log(`Message: ${message}`);

  // Resetting the form after submission
  form.reset();

  // Displaying a success message to the user
  alert('Message sent successfully!');
});
