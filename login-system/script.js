const form = document.querySelector('form');
const submitBtn = document.getElementById('register'); // Assuming your button has the id 'register'

function formValidation() {
	form.addEventListener('submit', function (event) {
		event.preventDefault();
		// Assuming you have a registerUser function to handle form submission
		registerUser();

		// Redirect to the next page after successful registration
		window.location.href = '../home.html';
	});
}

formValidation();

function registerUser() {
	// Handle form submission logic here
	// This function may include validation and other tasks
	// Example: alert('Registration successful!');
}
