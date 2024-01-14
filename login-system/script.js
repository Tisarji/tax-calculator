// const form = document.querySelector('form');
// const message = document.getElementById('message');
// const smallMessage = document.getElementById('smallMessage');
// const emailMessage = 'Type your email';
// const passwordMessage = 'Choose your password';
// const email = document.getElementById('email');
// const password = document.getElementById('password');
const submitBtn = document.getElementById('submit');

function formValidation() {
	submitBtn.addEventListener('click', function (event) {
		event.preventDefault();
		window.location.href = '../home.html';
	});
}

formValidation();
