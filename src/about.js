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
    const resData = [
      {
        section: "Our Story",
        paragraph:
          "Hambal Restaurant was founded with a simple passion: to bring people together through food. Since our doors first opened, we’ve been dedicated to serving meals that feel both comforting and exciting — dishes that make you feel at home while surprising you with fresh flavors.",
      },
      {
        section: "Our Philosophy",
        paragraph:
          "We believe food is more than just a meal — it’s an experience. Every dish at Hambal Restaurant is crafted with:",
      },
      {
        section: "Meet the Chefs",
        paragraph:
          "At the heart of Hambal Restaurant is our chef and team, who pour their creativity and care into every plate. Inspired by family recipes and global flavors, our kitchen blends classic techniques with modern touches.",
      },
      {
        section: "The Experience",
        paragraph:
          "Whether you’re stopping by for a quick lunch, celebrating with friends, or enjoying a cozy dinner, Cooking Restaurant offers a warm and welcoming space for every occasion. From the inviting ambiance to the flavorful dishes, we want every visit to feel special.",
      },
      {
        section: "Join Us",
        paragraph:
          "We’d love to welcome you to Hambal Restaurant — where every dish tells a story.",
      },
      {
        section: "📍 Find Us",
        paragraph: "Hambal Restaurant 123 Food Street, Flavor Town",
      },
    ];

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

    const textHolder = new AboutPageUI("div", {
      class: "text-holder-about",
    }).createElement();

    const aboutTrack = document.createElement("div");
    aboutTrack.classList.add("about-track");

    resData.forEach((item, i) => {
      const sectionName = new AboutPageUI(
        "h3",
        {
          class: "section-name",
        },
        item.section
      ).createElement();

      const paragraph = new AboutPageUI(
        "p",
        { class: "paragraph" },
        item.paragraph
      ).createElement();

      const block = new AboutPageUI("div", {
        class: "about-block",
        "data-index": i,
      }).createElement();
      block.append(sectionName, paragraph);
      aboutTrack.append(block);
    });

    textHolder.append(aboutTrack);

    const wrapper = document.createElement("div");
    wrapper.classList.add("about-page");
    wrapper.append(imageHolder, textHolder);

    return wrapper;
  }
}

// TODO: Add scrolling animation for about info
