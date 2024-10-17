document.getElementById('vibrateBtn').addEventListener('click', function() {
  // Sprawdź, czy urządzenie obsługuje API Vibration
  if (navigator.vibrate) {
    // Wibracja na 200ms
    navigator.vibrate(200);
  } else {
    alert('Twoje urządzenie nie obsługuje wibracji.');
  }
});
