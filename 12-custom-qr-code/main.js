const qrcode = new QRCode(document.getElementById("qr-code"), {
	text: "https://github.com/dashboardt",
	width: 228,
	height: 228,
	correctLevel : QRCode.CorrectLevel.H
});