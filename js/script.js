// Sanftes Scrollen zu Ankern auf der Seite
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Dynamische Anpassung der Hintergrundgröße
function adjustBackgroundSize() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  document.body.style.backgroundSize = `${width}px ${height}px`;
}

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  const dropdowns = document.querySelectorAll('.dropdown');

  menuToggle.addEventListener('click', function () {
    navLinks.classList.toggle('active');
  });

  dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function () {
      this.querySelector('.dropdown-content').classList.toggle('show');
    });
  });
});