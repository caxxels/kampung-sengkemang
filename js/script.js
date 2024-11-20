function whatsapp() {
	const name = document.getElementById("name").value;
	const phone = document.getElementById("phone").value;
	const message = document.getElementById("message").value;
	const submit = document.getElementById("submit");

	if (!name || !phone || !message) {
		submit.disabled = true;
	} else {
		const url = `https://wa.me/6281364496579?text=*Kritik atau Saran pada Website Resmi Kampung SENGKEMANG*%0a%0a*Nama Pengirim:* ${name}%0a*No. Telepon/WhatsApp Pengirim:* ${phone}%0a*Kritik atau Saran Pengirim:* ${message}`;

		window.open(url, "_blank").focus();
	}
	submit.disabled = false;
	return;
}

function updateDomToCurrentYear() {
	const currentYear = new Date().getFullYear();
	document.getElementById("dynamic-year").innerHTML = currentYear;
}

window.onload = () => {
	updateDomToCurrentYear();
};
