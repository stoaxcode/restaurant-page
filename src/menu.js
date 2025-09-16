import "./styles.css";
import food1 from "./malai_paneer.jpg";
import food2 from "./kimchi.jpg";
import food3 from "./salmon_teriyaki.jpg";
import food4 from "./chinese_shrimp.jpg";

export default class MenuPageUI {
  constructor(tag, attributes = {}, textContent = "") {
    this.tag = tag;
    this.attributes = attributes;
    this.textContent = textContent;
  }

  createElement() {
    const element = document.createElement(this.tag);
    Object.entries(this.attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    if (this.textContent) element.textContent = this.textContent;
    return element;
  }

  createHomeUI() {
    const h3 = new MenuPageUI("h3", { class: "h3" }, `hehe`).createElement();

    const divisionLine = new MenuPageUI("div", {
      class: "division-line",
    }).createElement();

    const pElement = new MenuPageUI(
      "p",
      { class: "p" },
      `hehe`
    ).createElement();

    const textWrapper = new MenuPageUI("div", {
      class: "text-wrapper-menu",
    }).createElement();
    textWrapper.append(h3, divisionLine, pElement);

    const img1 = new MenuPageUI("img", {
      id: "food1",
      class: "img",
      src: `${food1}`,
    }).createElement();
    const img2 = new MenuPageUI("img", {
      id: "food2",
      class: "img",
      src: `${food2}`,
    }).createElement();
    const img3 = new MenuPageUI("img", {
      id: "food3",
      class: "img",
      src: `${food3}`,
    }).createElement();
    const img4 = new MenuPageUI("img", {
      id: "food4",
      class: "img",
      src: `${food4}`,
    }).createElement();

    const imageHolder = new MenuPageUI("div", {
      class: "image-holder-menu",
    }).createElement();
    imageHolder.append(img1, img2, img3, img4);

    const link1 = new MenuPageUI("a", {
      href: "#food1",
      class: "menu-circle-btn",
    });
    const link2 = new MenuPageUI("a", {
      href: "#food2",
      class: "menu-circle-btn",
    });
    const link3 = new MenuPageUI("a", {
      href: "#food3",
      class: "menu-circle-btn",
    });
    const link4 = new MenuPageUI("a", {
      href: "#food4",
      class: "menu-circle-btn",
    });

    const circleBtnHolder = new MenuPageUI("div", {
      class: "menu-btn-holder",
    }).createElement();
    circleBtnHolder.append(link1, link2, link3, link4);

    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-page");
    wrapper.appendChild(textWrapper, imageHolder, circleBtnHolder);
    return wrapper;
  }
}
