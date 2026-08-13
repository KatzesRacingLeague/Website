// Slideshow 1
const imagePaths = [
  "F1Logos/16.png",
  "F1Logos/17.png",
  "F1Logos/18.png",
  "F1Logos/19.png",
  "F1Logos/20.png",
  "F1Logos/21.png",
  "F1Logos/22.png",
  "F1Logos/23.png",
  "F1Logos/24.png",
  "F1Logos/25.png",
];
const track = document.getElementById("slider-track");
const allImages = imagePaths.concat(imagePaths); // Duplizieren für Endlosschleife

allImages.forEach((src) => {
  const img = document.createElement("img");
  img.src = src;
  img.alt = "Slideshow Bild";
  track.appendChild(img);
});

const textItems = [
  "1. Bahrain",
  "2. Australien",
  "3. Ungarn",
  "4. USA (Texas)",
  "5. Miami",
  "6. Madrid",
  "7. Italien",
  "8. Imola",
  "9. Brasilien",
  "10. Spanien",
  "11. Österreich",
  "12. Belgien",
  "13. Niederlande",
  "14. Abu Dhabi",
  "15. Saudi Arabien",
  "16. China",
  "17. Großbritannien",
  "18. Aserbaidschan",
  "19. Japan",
];
const track2 = document.getElementById("slider-track2");
const allTextItems = textItems.concat(textItems); // doppeln für Endlosschleife

allTextItems.forEach((text, index) => {
  const div = document.createElement("div");
  div.classList.add("text-slide");
  div.textContent = text;

  if (index < 4) {
    div.style.color = "var(--sundaysplit)";
  }

  track2.appendChild(div);
});

//Counter
window.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter-number");

  const startCounting = (counter) => {
    const target = +counter.getAttribute("data-target");
    const duration = 1000;
    const steps = 100;
    const increment = target / steps;
    const delay = duration / steps;

    const updateCount = () => {
      const current = +counter.innerText;

      if (current < target) {
        counter.innerText = Math.ceil(current + increment);
        setTimeout(updateCount, delay);
      } else {
        counter.innerText = target;
        counter.classList.add("highlight");

        if (target === 10) {
          counter.classList.add("gold-highlight");
        }
      }
    };

    updateCount();
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (
          entry.isIntersecting &&
          !entry.target.classList.contains("counted")
        ) {
          entry.target.classList.add("counted");
          entry.target.classList.add("fade-in"); // Optional: reinfliegen lassen
          startCounting(entry.target);
        }
      });
    },
    {
      threshold: 0.5,
    },
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});
