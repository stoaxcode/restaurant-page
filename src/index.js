import "./styles.css";
import HomePageUI from "./home.js";
import MenuPageUI from "./menu.js";
import AboutPageUI from "./about.js";

const divContent = document.querySelector("#content");

function render(page) {
  divContent.innerHTML = "";
  divContent.append(
    page.createHomeUI?.() || page.createMenuUI?.() || page.createAboutUI?.()
  );
}

document
  .querySelector("#home-btn")
  .addEventListener("click", () => render(new HomePageUI()));
document
  .querySelector("#menu-btn")
  .addEventListener("click", () => render(new MenuPageUI()));
document
  .querySelector("#about-btn")
  .addEventListener("click", () => render(new AboutPageUI()));

render(new HomePageUI());
