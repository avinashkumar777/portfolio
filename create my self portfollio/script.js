// Mobile Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
<button class="btn primary" onclick="document.getElementById('projects').scrollIntoView({behavior: 'smooth'});">
  View My Work
</button>
