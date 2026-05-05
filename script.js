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
  { threshold: 0.12 }
);

reveals.forEach(item => observer.observe(item));
