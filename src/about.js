import "./styles.css";
import chef1 from "./chef-1.png";
import chef2 from "./chef-2.jpg";
import chef3 from "./chef-3.jpg";
import chef4 from "./chef-4.jpg";

export default class AboutPageUI {
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

  createAboutUI() {
    const img1 = new AboutPageUI("img", {
      class: "img-chefs",
      src: `${chef1}`,
    }).createElement();
    const img2 = new AboutPageUI("img", {
      class: "img-chefs",
      src: `${chef2}`,
    }).createElement();
    const img3 = new AboutPageUI("img", {
      class: "img-chefs",
      src: `${chef3}`,
    }).createElement();
    const img4 = new AboutPageUI("img", {
      class: "img-chefs",
      src: `${chef4}`,
    }).createElement();

    const imageHolder = new AboutPageUI("div", {
      class: "image-holder-chefs",
    }).createElement();
    imageHolder.append(img1, img2, img3, img4);

    const wrapper = document.createElement("div");
    wrapper.classList.add("about-page");
    wrapper.append(imageHolder);

    return wrapper;
  }
}

// TODO: create AboutPage UI
