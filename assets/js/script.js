window.addEventListener('load', () => {
  const screen = document.getElementById('loading-screen');
  const spinner = screen.querySelector('.loader');

  // Tunda 5 detik sebelum animasi hilang
  setTimeout(() => {
    // Scale down spinner
    spinner.style.transform = 'scale(0.5)';

    // Fade out screen
    screen.style.opacity = '0';

    // Hapus dari DOM setelah animasi
    setTimeout(() => screen.remove(), 500);
  }, 5000); // 5000ms = 5 detik
});
