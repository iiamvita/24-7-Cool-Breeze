document.addEventListener("DOMContentLoaded", () => {
    const pinBtn = document.getElementById("pin-location-btn");
    const statusDiv = document.getElementById("location-status");
    const form = document.getElementById("location-form");
    let googleMapsUrl = "";

    // Handle Google Maps Location Pining
    if (pinBtn) {
        pinBtn.addEventListener("click", () => {
            if ("geolocation" in navigator) {
                statusDiv.innerText = "Locating your position...";
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        googleMapsUrl = `https://www.google.com/maps?q=${lat},${lng}`;
                        statusDiv.innerText = "✓ Location captured! Ready to send.";
                    },
                    (error) => {
                        statusDiv.innerText = "Unable to retrieve location. Please check browser permissions.";
                    }
                );
            } else {
                statusDiv.innerText = "Geolocation is not supported by your browser.";
            }
        });
    }

    // Handle WhatsApp Submission
    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("client-name").value;
            const phone = document.getElementById("client-phone").value;

            let message = `Hello 24/7 Cool Breeze! My name is ${name}. Phone: ${phone}.`;
            if (googleMapsUrl) {
                message += ` Here is my Google Maps location pin: ${googleMapsUrl}`;
            } else {
                message += ` Please contact me to confirm my address.`;
            }

            const whatsappUrl = `https://wa.me/18687971041?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, "_blank");
        });
    }
});