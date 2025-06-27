let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  console.log('📢 beforeinstallprompt fired');
  e.preventDefault();
  deferredPrompt = e;

  // Tampilkan tombol install
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    console.log('🖱️ Tombol install diklik');
    installBtn.style.display = 'none'; // Hide biar gak diklik berkali-kali

    // Tampilkan prompt install
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('✅ User accepted install');
      } else {
        console.log('❌ User dismissed install');
      }
      deferredPrompt = null;
    });
  });
});
