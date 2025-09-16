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
    // const wrapper = document.createElement("div");
    // wrapper.classList.add("home-page");
    // wrapper.appendChild(textWrapper, imageHolder);
    // return wrapper;
  }
}
