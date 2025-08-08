// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.getElementById("mainNav");
  const btn = document.querySelector(".mobile-menu-btn i");

  nav.classList.toggle("mobile-open");

  if (nav.classList.contains("mobile-open")) {
    btn.classList.remove("fa-bars");
    btn.classList.add("fa-times");
  } else {
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  }
}

// Close mobile menu when clicking on links
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.getElementById("mainNav");
    const btn = document.querySelector(".mobile-menu-btn i");

    nav.classList.remove("mobile-open");
    btn.classList.remove("fa-times");
    btn.classList.add("fa-bars");
  });
});

// Create floating particles
function createParticles() {
  const particlesContainer = document.querySelector(".particles");
  const particleCount = window.innerWidth < 768 ? 20 : 50;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    // Random positioning
    particle.style.left = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 20 + "s";
    particle.style.animationDuration = Math.random() * 10 + 15 + "s";

    // Random size
    const size = Math.random() * 4 + 2;
    particle.style.width = size + "px";
    particle.style.height = size + "px";

    particlesContainer.appendChild(particle);
  }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Add scroll-based animations
function handleScrollAnimations() {
  const elements = document.querySelectorAll(
    ".circle-item, .steps div, .success-card",
  );

  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;

    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }
  });
}

// Initialize animations
window.addEventListener("scroll", handleScrollAnimations);

// Initialize everything when page loads
document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  handleScrollAnimations();

  // Set initial state for animated elements
  document
    .querySelectorAll(".circle-item, .steps div, .success-card")
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(50px)";
      element.style.transition = "all 0.6s ease";
    });

  // Trigger animations after a short delay
  setTimeout(handleScrollAnimations, 100);
});

// Add resize handler for particles
window.addEventListener("resize", function () {
  const particlesContainer = document.querySelector(".particles");
  particlesContainer.innerHTML = "";
  createParticles();
});
