function sendSMS() {
    const fromLocation = document.getElementById('from-location').value;
    const toLocation = document.getElementById('to-location').value;
    const travelDate = document.getElementById('travel-date').value;
    const departureTime = document.getElementById('departure-time').value;
    const name = document.getElementById('name').value;

    const selectedSeats = Array.from(document.querySelectorAll('.selected-seat')).map(seat => seat.innerText).join(', ');

    if (selectedSeats.length === 0) {
        alert('Please select at least one seat.');
        return;
    }

    // Predefined phone number to send the SMS to
    const phoneNumber = '0704415283';

    const message = `Booking Details:\nFrom: ${fromLocation}\nTo: ${toLocation}\nDate: ${travelDate}\nTime: ${departureTime}\nSeats: ${selectedSeats}\nName: ${name}\nPhone: ${phoneNumber}`;

    // For mobile devices, open the SMS app with the predefined phone number
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        const smsLink = `sms:${phoneNumber}?body=${encodeURIComponent(message)}`;
        window.location.href = smsLink;
    } else {
        // On desktop, don't show an alert, as SMS cannot be sent
        console.log('Booking Details (Desktop):', message);  // You can log to console for PC or handle differently
    }
}
