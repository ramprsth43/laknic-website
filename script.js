const mobileMenu = document.getElementById("mobileMenu");
const nav = document.getElementById("nav");

if (mobileMenu && nav) {
  mobileMenu.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.14 }
);

reveals.forEach(item => observer.observe(item));

document.querySelectorAll(".capability-card, .price-card, .process-card, .detail-card").forEach(card => {
  card.addEventListener("mousemove", event => {
    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    card.style.background = `
      radial-gradient(circle at ${x}px ${y}px, rgba(56,189,248,0.14), transparent 34%),
      linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025)),
      rgba(15, 23, 42, 0.72)
    `;
  });

  card.addEventListener("mouseleave", () => {
    card.style.background = "";
  });
});
