document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      var qrCodeDiv = document.getElementById('qrCode');
      qrCodeDiv.innerHTML = ''; // clear any existing QR code
  
      var qrCode = new QRCode(qrCodeDiv, {
        text: tabs[0].url,
        width: 256,
        height: 256,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H
      });
    });
  });
  