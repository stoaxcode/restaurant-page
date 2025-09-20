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
    const foodDate = [
      {
        name: "Malai Paneer",
        desc: "Soft paneer cubes in a creamy sauce.",
        price: "$12.99",
        img: food1,
      },
    ];

    const foodName = new MenuPageUI(
      "h3",
      { class: "h3" },
      `hehe`
    ).createElement();

    const divisionLine = new MenuPageUI("div", {
      class: "division-line",
    }).createElement();

    const foodDescription = new MenuPageUI(
      "p",
      { class: "p" },
      `hehe`
    ).createElement();

    const priceTag = new MenuPageUI(
      "p",
      { class: "price-tag" },
      `none`
    ).createElement();

    const textWrapper = new MenuPageUI("div", {
      class: "text-wrapper-menu",
    }).createElement();
    textWrapper.append(foodName, divisionLine, foodDescription, priceTag);

    const img1 = new MenuPageUI("img", {
      id: "food1",
      class: "img-menu",
      src: `${food1}`,
    }).createElement();
    const img2 = new MenuPageUI("img", {
      id: "food2",
      class: "img-menu",
      src: `${food2}`,
    }).createElement();
    const img3 = new MenuPageUI("img", {
      id: "food3",
      class: "img-menu",
      src: `${food3}`,
    }).createElement();
    const img4 = new MenuPageUI("img", {
      id: "food4",
      class: "img-menu",
      src: `${food4}`,
    }).createElement();

    const imageHolder = new MenuPageUI("div", {
      class: "image-holder-menu",
    }).createElement();
    imageHolder.append(img1, img2, img3, img4);

    const link1 = new MenuPageUI("a", {
      href: "#food1",
      class: "menu-circle-btn",
    }).createElement();
    const link2 = new MenuPageUI("a", {
      href: "#food2",
      class: "menu-circle-btn",
    }).createElement();
    const link3 = new MenuPageUI("a", {
      href: "#food3",
      class: "menu-circle-btn",
    }).createElement();
    const link4 = new MenuPageUI("a", {
      href: "#food4",
      class: "menu-circle-btn",
    }).createElement();

    const circleBtnHolder = new MenuPageUI("div", {
      class: "menu-btn-holder",
    }).createElement();
    circleBtnHolder.append(link1, link2, link3, link4);

    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-page");
    wrapper.append(textWrapper, imageHolder, circleBtnHolder);
    return wrapper;
  }
}

// TODO: add automatic/manual slider for food menu and food descriptions
