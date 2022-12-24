// Get the form element
const form = document.querySelector('form');

// Add a submit event listener to the form
form.addEventListener('submit', (event) => {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Send the form data to the server
  fetch('/send', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      // Display a success or error message
      alert(data.message);
    })
    .catch((error) => {
      console.error(error);
    });
});
