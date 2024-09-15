// Sanftes Scrollen zu Ankern auf der Seite
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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
  
  window.addEventListener('resize', adjustBackgroundSize);
  window.addEventListener('load', adjustBackgroundSize);
  

  