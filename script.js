// garis 3 aktif
const navbarNav = document.querySelector(".navbar-nav");

// klik menu
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// hilangkan nav
const menu = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
