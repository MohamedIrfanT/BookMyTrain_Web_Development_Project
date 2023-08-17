const paymentForm = document.querySelector('form');
const paymentButton = document.querySelector('input[type="submit"]');

paymentButton.addEventListener('click', (event) => {
  event.preventDefault();

  const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
  console.log(`Selected payment method: ${paymentMethod}`);

  if (paymentMethod === 'card') {
    const cardNumber = document.querySelector('#cardnumber').value;
    const cardName = document.querySelector('#cardname').value;
    const expiryDate = document.querySelector('#expirydate').value;
    const cvv = document.querySelector('#cvv').value;

    console.log(`Card number: ${cardNumber}`);
    console.log(`Name on card: ${cardName}`);
    console.log(`Expiry date: ${expiryDate}`);
    console.log(`CVV: ${cvv}`);
  }
});

function f1() {
  window.alert("Payment Successful!");
}