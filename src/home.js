import chef1 from "./chef-1.png";
import food1 from "./food-1.jpg";
import food2 from "./food-2.jpg";
import kitchen from "./kitchen.png";

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

const img1 = document.createElement("img");
img1.classList.add("img");
img1.src = chef1;
const img2 = document.createElement("img");
img2.classList.add("img");
img2.src = food1;
const img3 = document.createElement("img");
img3.classList.add("img");
img3.src = food2;
const img4 = document.createElement("img");
img4.classList.add("img");
img4.src = kitchen;
const imageHolder = document.createElement("div");
imageHolder.classList.add("image-holder");
imageHolder.appendChild(img1);
imageHolder.appendChild(img2);
imageHolder.appendChild(img3);
imageHolder.appendChild(img4);

divContent.appendChild(textWrapper);
divContent.appendChild(imageHolder);

// TODO: Create a code for dry principle
// Choose coding logic a simple function, class, or object constructor
