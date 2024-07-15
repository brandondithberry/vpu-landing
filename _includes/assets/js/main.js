document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const mobileMenu = document.getElementById("mobileMenu");

  menuToggle.addEventListener("click", function (e) {
    e.preventDefault();
    mobileMenu.classList.toggle("active");
  });
});
