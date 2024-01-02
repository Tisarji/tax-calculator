// import-tax-calculator.js

function formatNumberWithCommas(number) {
	return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

function parseFloatWithCommas(value) {
	return parseFloat(value.replace(/,/g, ''));
}

function setImportDutyRate(rate) {
	document.getElementById("importDutyRate").value = rate;
}

function formatInputWithCommas(event) {
	let inputValue = event.target.value;


	inputValue = inputValue.replace(/[^\d.]/g, ''); // Remove non-digit and non-decimal characters
	let parts = inputValue.split('.');

	if (parts.length > 1) {
		parts[1] = parts[1].substring(0, 2);
	}

	inputValue = parts.join('.');

	let formattedValue = parseFloatWithCommas(inputValue).toLocaleString('en-US', {
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	});

	if (event.target.value !== formattedValue) {
		event.target.value = formattedValue;
	}
}

function calculateTax() {
	var cifPrice = parseFloatWithCommas(document.getElementById("cifPrice").value);
	var importDutyRate = parseFloatWithCommas(document.getElementById("importDutyRate").value);

	var importDuty = cifPrice * (importDutyRate / 100);
	var vat = (cifPrice + importDuty) * 0.07;
	var totalTax = importDuty + vat;

	document.getElementById("importDutyAmount").value = formatNumberWithCommas(importDuty);
	document.getElementById("vatAmount").value = formatNumberWithCommas(vat);
	document.getElementById("totalTaxAmount").value = formatNumberWithCommas(totalTax);

	document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.button-category').forEach(button => {
	button.addEventListener('click', function () {
		var importDutyRate = parseFloat(this.getAttribute('data-import-duty-rate'));
		setImportDutyRate(importDutyRate);

		document.querySelectorAll('.button-category').forEach(btn => {
			btn.classList.remove('active');
		});
		this.classList.add('active');
	});
});
