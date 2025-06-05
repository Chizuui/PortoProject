  document.addEventListener('DOMContentLoaded', function() {
    // Dapatkan semua section yang ingin dipantau (sesuaikan selector-nya jika perlu)
    const sections = document.querySelectorAll('section');
    // Dapatkan semua link navbar
    const navLinks = document.querySelectorAll('.navbar a');

    // Konfigurasi Intersection Observer
    const observerOptions = {
      root: null,            // Menggunakan viewport sebagai root
      threshold: 0.5         // Setengah area section harus terlihat agar dianggap aktif
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Hapus kelas 'active' dari semua link
          navLinks.forEach(link => link.classList.remove('active'));

          // Dapatkan ID section yang aktif (misalnya "works", "contact", atau "home")
          const id = entry.target.getAttribute('id');
          // Cari link yang mengarah ke section itu
          const activeLink = document.querySelector('.navbar a[href="#' + id + '"]');
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    }, observerOptions);

    // Observasi setiap section
    sections.forEach(section => observer.observe(section));

    // This script disables the right-click (context menu)
    document.addEventListener('contextmenu', function (e) {
      e.preventDefault();
    });
  });
