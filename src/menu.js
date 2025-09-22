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

  createMenuUI() {
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
      return new MenuPageUI("img", {
        id: `food${index + 1}`,
        class: "img-menu-item",
        src: food.img,
      }).createElement();
    });

    const imgTrack = document.createElement("div");
    imgTrack.classList.add("img-track");
    imgTrack.append(...imgElements);

    const imageHolder = new MenuPageUI("div", {
      class: "image-holder-menu",
    }).createElement();
    imageHolder.append(imgTrack);

    const circleBtnHolder = new MenuPageUI("div", {
      class: "menu-btn-holder",
    }).createElement();

    foodData.forEach((_, i) => {
      const link = new MenuPageUI("a", {
        href: `#food${i + 1}`,
        class: "menu-circle-btn",
      }).createElement();

      link.addEventListener("click", () => {
        currentIndex = i;

        foodName.textContent = foodData[currentIndex].name;
        foodDescription.textContent = foodData[currentIndex].desc;
        priceTag.textContent = foodData[currentIndex].price;

        [...circleBtnHolder.children].forEach((dot, j) => {
          dot.style.backgroundColor = j === currentIndex ? "#00bcd4" : "white";
        });

        imgTrack.style.transition = "transform 0.9s ease-in-out";
        imgTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
      });
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

      imgTrack.style.transition = "transform 0.9s ease-in-out";
      imgTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 4000);

    return wrapper;
  }
}
