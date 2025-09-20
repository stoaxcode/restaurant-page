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
    const foodData = [
      {
        name: "Malai Paneer",
        desc: "Soft paneer cubes in a creamy sauce.",
        price: "$12.99",
        img: food1,
      },
      {
        name: "Kimchi",
        desc: "Spicy fermented Korean cabbage.",
        price: "$7.50",
        img: food2,
      },
      {
        name: "Salmon Teriyaki",
        desc: "Grilled salmon glazed with teriyaki sauce.",
        price: "$15.99",
        img: food3,
      },
      {
        name: "Chinese Shrimp",
        desc: "Stir-fried shrimp with savory garlic sauce.",
        price: "$18.25",
        img: food4,
      },
    ];

    const foodName = new MenuPageUI(
      "h3",
      { class: "h3" },
      foodData[0].name
    ).createElement();

    const divisionLine = new MenuPageUI("div", {
      class: "division-line",
    }).createElement();

    const foodDescription = new MenuPageUI(
      "p",
      { class: "p" },
      foodData[0].desc
    ).createElement();

    const priceTag = new MenuPageUI(
      "p",
      { class: "price-tag" },
      foodData[0].price
    ).createElement();

    const textWrapper = new MenuPageUI("div", {
      class: "text-wrapper-menu",
    }).createElement();
    textWrapper.append(foodName, divisionLine, foodDescription, priceTag);

    const imgElements = foodData.map((food, index) => {
      new MenuPageUI("img", {
        id: `food${index + 1}`,
        class: "img-menu",
        src: food.img,
      }).createElement();
    });

    const imageHolder = new MenuPageUI("div", {
      class: "image-holder-menu",
    }).createElement();
    imageHolder.append(...imgElements);

    // const link1 = new MenuPageUI("a", {
    //   href: "#food1",
    //   class: "menu-circle-btn",
    // }).createElement();
    // const link2 = new MenuPageUI("a", {
    //   href: "#food2",
    //   class: "menu-circle-btn",
    // }).createElement();
    // const link3 = new MenuPageUI("a", {
    //   href: "#food3",
    //   class: "menu-circle-btn",
    // }).createElement();
    // const link4 = new MenuPageUI("a", {
    //   href: "#food4",
    //   class: "menu-circle-btn",
    // }).createElement();

    const circleBtnHolder = new MenuPageUI("div", {
      class: "menu-btn-holder",
    }).createElement();
    foodData.forEach((_, i) => {
      const link = new MenuPageUI("a", {
        href: `food${i + 1}`,
        class: "menu-circle-btn",
      }).createElement();
      circleBtnHolder.append(link);
    });

    const wrapper = document.createElement("div");
    wrapper.classList.add("menu-page");
    wrapper.append(textWrapper, imageHolder, circleBtnHolder);

    let currentIndex = 0;
    setInterval(() => {
      currentIndex = (currentIndex + 1) % foodData.length;

      foodName.textContent = foodData[currentIndex].name;
      foodDescription.textContent = foodData[currentIndex].desc;
      priceTag.textContent = foodData[currentIndex].price;

      [...circleBtnHolder.children].forEach((dot, i) => {
        dot.style.backgroundColor = i === currentIndex ? "#00bcd4" : "white";
      });

      imageHolder.style.transition = "transform 0.6s ease-in-out";
      imageHolder.style.transform = `translateX(-${currentIndex * 100}%)`;
    }),
      4000;

    return wrapper;
  }
}

// TODO: add automatic/manual slider for food menu and food descriptions
