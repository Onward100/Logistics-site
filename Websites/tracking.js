const form = document.querySelector('form');
const results = document.querySelector('#tracking-results');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Code to process tracking information and display results
  // Example:
  const orderId = document.querySelector('#order-id').value;
  const orderStatus = document.querySelector('#order-status').value;
  results.innerHTML = `Order ${orderId} is currently ${orderStatus}.`;
});
