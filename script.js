"use strict";

const cartContainer = document.querySelector(".fa-cart-shopping");
const currentCart = document.querySelector("#currentCart");
cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-cart-shopping")) {
    currentCart.classList.remove("hidden");
  }
});

const cartDeleteButton = document.querySelector("#cartDeleteButton");
cartDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cartDeleteButton") {
    currentCart.classList.add("hidden");
  }
});

const buttonContainer = document.querySelector("#buttonContainer");
const cashButton = document.querySelector("#cashButton");
const creditButton = document.querySelector("#creditButton");
const cashCheckout = document.querySelector("#cashCheckout");
const creditCheckout = document.querySelector("#creditCheckout");
cashButton.addEventListener("click", (event) => {
  if (event.target.id === "cashButton") {
    cashCheckout.classList.remove("hidden");
  }
});

const cashDeleteButton = document.querySelector("#cashDeleteButton");
cashDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cashDeleteButton") {
    cashCheckout.classList.add("hidden");
  }
});

creditButton.addEventListener("click", (event) => {
  if (event.target.id === "creditButton") {
    creditCheckout.classList.remove("hidden");
  }
});

const creditDeleteButton = document.querySelector("#creditDeleteButton");
creditDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "creditDeleteButton") {
    creditCheckout.classList.add("hidden");
  }
});

const barbieProducts = [
  {
    src: "assets/jetski-barbie.jpg",
    alt: "Jetski Barbie",
    description: "Dancing Barbie",
    price: 50.99,
  },
  {
    src: "assets/tina-turner-barbie.jpeg",
    alt: "Tina Turner Barbie",
    description: "Tina Turner Barbie",
    price: 199.99,
  },
  {
    src: "assets/movement-barbie.jpeg",
    alt: "Movement Barbie",
    description: "La Croix Barbie",
    price: 45.99,
  },
  {
    src: "assets/vader-barbie.jpg",
    alt: "Darth Vader Barbie",
    description: "Darth Vader Barbie",
    price: 150.99,
  },
];

const barbieContainer = document.querySelector("#barbie-container");

barbieProducts.forEach((item) => {
  const barbieList = document.createElement("li"); // <li></li>
  const image = document.createElement("img"); // <img/>
  const descriptionP = document.createElement("p"); // <p></p>
  const priceP = document.createElement("p"); // <p></p>
  const addToCart = document.createElement("button");
  image.setAttribute("src", item.src);
  image.setAttribute("alt", item.alt);
  descriptionP.textContent = item.description;
  priceP.textContent = item.price;
  addToCart.textContent = "Add to Cart";
  barbieList.append(image, descriptionP, addToCart, priceP); //<li><img/><p></p></li>
  //   barbieList.append(altDescription);
  barbieContainer.append(barbieList);
  //   barbieContainer.append(barbieList);
});

const plushieProducts = [
  {
    src: "assets/Buff-Shark.jpeg",
    alt: "Buff Shark Plushie",
    description: "Buff Shark Plushie",
    price: 40.0,
  },
  {
    src: "assets/hamburger-plushie.jpeg",
    alt: "Hamburger Plushie",
    description: "Hamburger Plushie",
    price: 24.99,
  },
  {
    src: "assets/Pickle-Rick.jpeg",
    alt: "Pickle Rick Plushie",
    description: "Pickle Rick Plushie",
    price: 50.0,
  },
];

const plushieContainer = document.querySelector("#plushie-container");

plushieProducts.forEach((item) => {
  const plushieList = document.createElement("li"); // <li></li>
  const image = document.createElement("img"); // <img/>
  const descriptionP = document.createElement("p"); // <p></p>
  const priceP = document.createElement("p"); // <p></p>
  const addToCart = document.createElement("button");
  image.setAttribute("src", item.src);
  image.setAttribute("alt", item.alt);
  descriptionP.textContent = item.description;
  priceP.textContent = item.price;
  addToCart.textContent = "Add to Cart";
  plushieList.append(image, descriptionP, addToCart, priceP);
  plushieContainer.append(plushieList);
});

const hotWheelsContainer = document.querySelector("#hotWheels-container");

const hotWheelsProducts = [
  {
    src: "assets/yellow-hot-wheel.jpeg",
    alt: "Yellow Hot Wheel",
    description: "Yellow Hot Wheel",
    price: 7.0,
  },
  {
    src: "assets/van.png",
    alt: "Dodge Van Hot Wheel",
    description: "Dodge Van Hot Wheel",
    price: 13.99,
  },
  {
    src: "assets/bat-mobile.jpg",
    alt: "Bat Mobile Hot Wheel",
    description: "Bat Mobile Hot Wheel",
    price: 10.99,
  },
];

hotWheelsProducts.forEach((item) => {
  const hotWheelList = document.createElement("li"); // <li></li>
  const image = document.createElement("img"); // <img/>
  const descriptionP = document.createElement("p"); // <p></p>
  const priceP = document.createElement("p"); // <p></p>
  const addToCart = document.createElement("button");
  image.setAttribute("src", item.src); // <img src="blah"/>
  image.setAttribute("alt", item.alt); // <img src="blah" alt="blarg"/>
  descriptionP.textContent = item.description; // <p>[{description: "yarhar"}]</p>
  priceP.textContent = item.price; // <p>[{price: $$$}]</p>
  addToCart.textContent = "Add to Cart";
  hotWheelList.append(image, descriptionP, addToCart, priceP); // <li><img/><p></p><p></p></li>
  hotWheelsContainer.append(hotWheelList); // <ul><li></li></ul>
});

const actionFigureContainer = document.querySelector("#actionFigure-container");

const actionFigureProducts = [
  {
    src: "assets/He-Man.jpeg",
    alt: "He-Man",
    description: "He-Man Action Figure",
    price: 10.0,
  },
  {
    src: "assets/Macho-Man-Randy-Savage.jpeg",
    alt: "Macho Man Randy Savage",
    description: "Macho Man Randy Savage",
    price: 500.0,
  },
  {
    src: "assets/snake-eyes.png",
    alt: "Snake Eyes",
    description: "Snake Eyes Action Figure",
    price: 13.99,
  },
  {
    src: "assets/Chuck-Norris.jpeg",
    alt: "Chuck Norris",
    description: "Chuck Norris Action Figure",
    price: 1000.0,
  },
];

actionFigureProducts.forEach((item) => {
  const actionFigureList = document.createElement("li"); // <li></li>
  const image = document.createElement("img"); // <img/>
  const descriptionP = document.createElement("p"); // <p></p>
  const priceP = document.createElement("p"); // <p></p>
  const addToCart = document.createElement("button");
  image.setAttribute("src", item.src); // <img src="blah"/>
  image.setAttribute("alt", item.alt); // <img src="blah" alt="blarg"/>
  descriptionP.textContent = item.description; // <p>[{description: "yarhar"}]</p>
  priceP.textContent = item.price; // <p>[{price: $$$}]</p>
  addToCart.textContent = "Add to Cart";
  actionFigureList.append(image, descriptionP, addToCart, priceP); // <li><img/><p></p><p></p></li>
  actionFigureContainer.append(actionFigureList); // <ul><li></li></ul>
});
