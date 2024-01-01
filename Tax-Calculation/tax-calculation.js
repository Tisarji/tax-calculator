function calculateTax() {
	var income = parseFloat(document.getElementById("income").value);
	var deductions = parseFloat(document.getElementById("deductions").value);

	if (isNaN(income) || isNaN(deductions)) {
		alert("กรุณากรอกข้อมูลให้ถูกต้อง");
		return;
	}

	var taxableIncome = income - deductions;
	var taxAmount = calculateTaxAmount(taxableIncome);

	displayResult(taxAmount);
}

function calculateTaxAmount(income) {
	if (income <= 150000) {
		return 0;
	} else if (income <= 300000) {
		return (income - 150000) * 0.05;
	} else if (income <= 500000) {
		return (income - 300000) * 0.1 + 7500;
	} else if (income <= 750000) {
		return (income - 500000) * 0.15 + 27500;
	} else if (income <= 1000000) {
		return (income - 750000) * 0.2 + 65000;
	} else if (income <= 2000000) {
		return (income - 1000000) * 0.25 + 115000;
	} else if (income <= 5000000) {
		return (income - 2000000) * 0.3 + 365000;
	} else {
		return (income - 5000000) * 0.35 + 1265000;
	}
}

function displayResult(taxAmount) {
	var resultElement = document.getElementById("result");
	resultElement.innerHTML = "<h3>ภาษีที่ต้องจ่าย: " + taxAmount.toFixed(2) + " บาท</h3>";
}
