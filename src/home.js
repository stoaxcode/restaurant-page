import "./styles.css";
import chef1 from "./chef-1.png";
import food1 from "./food-1.jpg";
import food2 from "./food-2.jpg";
import kitchen from "./kitchen.png";

export default class HomePageUI {
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
    const h3 = new HomePageUI(
      "h3",
      { class: "h3" },
      "Hambal Restaurant"
    ).createElement();

    const divisionLine = new HomePageUI("div", {
      class: "division-line",
    }).createElement();

    const pElement = new HomePageUI(
      "p",
      { class: "p" },
      "Deliciously bold flavors made with passion"
    ).createElement();

    const textWrapper = new HomePageUI("div", {
      class: "text-wrapper",
    }).createElement();
    textWrapper.append(h3, divisionLine, pElement);

    const img1 = new HomePageUI("img", {
      class: "img",
      src: `${chef1}`,
    }).createElement();
    const img2 = new HomePageUI("img", {
      class: "img",
      src: `${food1}`,
    }).createElement();
    const img3 = new HomePageUI("img", {
      class: "img",
      src: `${food2}`,
    }).createElement();
    const img4 = new HomePageUI("img", {
      class: "img",
      src: `${kitchen}`,
    }).createElement();

    const imageHolder = new HomePageUI("div", {
      class: "image-holder",
    }).createElement();
    imageHolder.append(img1, img2, img3, img4);

    const wrapper = document.createElement("div");
    wrapper.classList.add("home-page");
    wrapper.appendChild(textWrapper, imageHolder);

    return wrapper;
  }
}
