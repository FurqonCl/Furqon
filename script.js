// Respons untuk tombol "Iya"
document.getElementById("answerYes").addEventListener("click", function() {
    document.getElementById("response").innerText = "Yay! Aku senang kamu mau!";
});

// Menggerakkan tombol "Tidak"
const answerNo = document.getElementById("answerNo");
answerNo.addEventListener("mouseover", function() {
    answerNo.style.position = "absolute";
    answerNo.style.top = Math.random() * 400 + "px";
    answerNo.style.left = Math.random() * 400 + "px";
});

// Kirim pesan ke WhatsApp
document.getElementById("sendToWhatsApp").addEventListener("click", function() {
    const number = document.getElementById("whatsappNumber").value;
    const message = "Hai! Aku suka sama kamu, mau jadi pacarku?";
    if (number) {
        const whatsappUrl = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert("Masukkan nomor WhatsApp terlebih dahulu!");
    }
});
