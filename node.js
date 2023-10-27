document.getElementById("year").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const menu = document.querySelector(".menu");

  mobileMenuToggle.addEventListener("click", function () {
    menu.classList.toggle("active");
  });
});

function goUp() {
  window.scrollTo(0, 0);
}
