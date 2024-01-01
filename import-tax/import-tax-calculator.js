// script.js

function formatNumberWithCommas(number) {
	return number.toLocaleString('en-US');
}

function setImportDutyRate(rate) {
	document.getElementById("importDutyRate").value = rate;
}

function calculateTax() {
	var cifPrice = parseFloat(document.getElementById("cifPrice").value.replace(/,/g, ''));
	var importDutyRate = parseFloat(document.getElementById("importDutyRate").value);

	var importDuty = cifPrice * (importDutyRate / 100);
	var vat = (cifPrice + importDuty) * 0.07;
	var totalTax = importDuty + vat;

	document.getElementById("importDuty").innerText = "อากรขาเข้า (บาท): " + formatNumberWithCommas(importDuty.toFixed(2));
	document.getElementById("vat").innerText = "ภาษีมูลค่าเพิ่ม (บาท): " + formatNumberWithCommas(vat.toFixed(2));
	document.getElementById("totalTax").innerText = "ยอดภาษีนำเข้า (บาท): " + formatNumberWithCommas(totalTax.toFixed(2));

	document.getElementById("result").scrollIntoView({ behavior: 'smooth' });
}

document.querySelectorAll('.button-category').forEach(button => {
	button.addEventListener('click', function () {
		var importDutyRate = parseFloat(this.getAttribute('data-import-duty-rate'));
		setImportDutyRate(importDutyRate);
	});
});
