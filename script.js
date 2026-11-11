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

const interactiveExpert = document.querySelector("[data-interactive-expert]");
if (
  interactiveExpert &&
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  const resetExpert = () => {
    interactiveExpert.style.setProperty("--look-x", "0px");
    interactiveExpert.style.setProperty("--look-y", "0px");
    interactiveExpert.style.setProperty("--head-tilt", "0deg");
  };

  interactiveExpert.addEventListener("pointermove", (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = interactiveExpert.getBoundingClientRect();
    const horizontal = Math.max(-1, Math.min(1, (event.clientX - bounds.left - bounds.width / 2) / (bounds.width / 2)));
    const vertical = Math.max(-1, Math.min(1, (event.clientY - bounds.top - bounds.height / 2) / (bounds.height / 2)));

    interactiveExpert.style.setProperty("--look-x", `${(horizontal * 5).toFixed(1)}px`);
    interactiveExpert.style.setProperty("--look-y", `${(vertical * 3).toFixed(1)}px`);
    interactiveExpert.style.setProperty("--head-tilt", `${(horizontal * 5).toFixed(1)}deg`);
  });
  interactiveExpert.addEventListener("pointerleave", resetExpert);
}
