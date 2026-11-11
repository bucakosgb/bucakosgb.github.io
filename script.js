const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector("#main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const expanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!expanded));
    menuToggle.setAttribute("aria-label", expanded ? "Menüyü aç" : "Menüyü kapat");
    mainNav.classList.toggle("is-open", !expanded);
  });

  mainNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Menüyü aç");
      mainNav.classList.remove("is-open");
    }
  });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());
