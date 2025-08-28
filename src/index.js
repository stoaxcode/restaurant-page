import "./styles.css";

const divContent = document.querySelector("#content");

const h3 = document.createElement("h3");
h3.textContent = "Hambal Restaurant";
h3.classList.add("h3");

const divisionLine = document.createElement("div");
divisionLine.classList.add("division-line");

const pElement = document.createElement("p");
pElement.textContent = "Deliciously bold flavors made with passion";
pElement.classList.add("p");

const textWrapper = document.createElement("div");
textWrapper.classList.add("text-wrapper");
textWrapper.appendChild(h3);
textWrapper.appendChild(divisionLine);
textWrapper.appendChild(pElement);

const img1 = document.createElement("div");
img1.setAttribute("id", "image-1");
const img2 = document.createElement("div");
img2.setAttribute("id", "image-2");
const img3 = document.createElement("div");
img3.setAttribute("id", "image-3");

const imageHolder = document.createElement("div");
imageHolder.classList.add("image-holder");
imageHolder.appendChild(img1);
imageHolder.appendChild(img2);
imageHolder.appendChild(img3);

const imageWrapper = document.createElement("div");
imageWrapper.classList.add("image-wrapper");
imageWrapper.appendChild(imageHolder);

divContent.appendChild(textWrapper);
divContent.appendChild(imageWrapper);
