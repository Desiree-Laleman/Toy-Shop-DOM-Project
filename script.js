"use strict";

const purchasingArray = [];

const barbieProducts = [
  {
    src: "assets/jetski-barbie.jpg",
    alt: "Jetski Barbie",
    description: "Jetski Barbie",
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

const main = document.querySelector("main");
const barbieContainer = document.querySelector("#barbie-container");
const plushieContainer = document.querySelector("#plushie-container");
const hotWheelsContainer = document.querySelector("#hotWheels-container");
const actionFigureContainer = document.querySelector("#actionFigure-container");
const cartContainer = document.querySelector(".fa-cart-shopping");
const currentCart = document.querySelector("#currentCart");
const purchasingCart = document.querySelector("#purchasing-cart");
const cartDeleteButton = document.querySelector("#cartDeleteButton");
const buttonContainer = document.querySelector("#buttonContainer");
const cashButton = document.querySelector("#cashButton");
const creditButton = document.querySelector("#creditButton");
const cashCheckout = document.querySelector("#cashCheckout");
const creditCheckout = document.querySelector("#creditCheckout");

cartContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-cart-shopping")) {
    currentCart.classList.remove("hidden");
  }
});

cartDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cartDeleteButton") {
    currentCart.classList.add("hidden");
  }
});

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

const categoryFiller = (array, container, arrayName) => {
  array.forEach((item, index) => {
    const list = document.createElement("li"); // <li></li>
    const image = document.createElement("img"); // <img/>
    const descriptionP = document.createElement("p"); // <p></p>
    const priceP = document.createElement("p"); // <p></p>
    const addToCart = document.createElement("button");
    addToCart.setAttribute("data-index", index);
    addToCart.setAttribute("data-array", arrayName);
    addToCart.classList.add("cart-button");
    image.setAttribute("src", item.src); // <img src="blah"/>
    image.setAttribute("alt", item.alt); // <img src="blah" alt="blarg"/>
    descriptionP.textContent = item.description; // <p>[{description: "yarhar"}]</p>
    priceP.textContent = item.price; // <p>[{price: $$$}]</p>
    addToCart.textContent = "Add to Cart";
    list.append(image, descriptionP, addToCart, priceP); // <li><img/><p></p><p></p></li>
    container.append(list); // <ul><li></li></ul>
  });
};

categoryFiller(barbieProducts, barbieContainer, "barbieProducts");
categoryFiller(plushieProducts, plushieContainer, "plushieProducts");
categoryFiller(hotWheelsProducts, hotWheelsContainer, "hotWheelsProducts");
categoryFiller(
  actionFigureProducts,
  actionFigureContainer,
  "actionFigureProducts"
);

main.addEventListener("click", (event) => {
  if (event.target.classList.contains("cart-button")) {
    const index = event.target.getAttribute("data-index");
    const array = event.target.getAttribute("data-array");
    const listContainer = document.createElement("ul"); // <ul></ul>
    const list = document.createElement("li"); // <li></li>

    if (array === "barbieProducts") {
      console.log(barbieProducts[index]);
      purchasingArray.push(barbieProducts[index]);
      // purchasingArray.(purchasingCart);
    } else if (array === "plushieProducts") {
      console.log(plushieProducts[index]);
      purchasingArray.push(plushieProducts[index]);
    } else if (array === "hotWheelsProducts") {
      console.log(hotWheelsProducts[index]);
      purchasingArray.push(hotWheelsProducts[index]);
    } else if (array === "actionFigureProducts") {
      console.log(actionFigureProducts[index]);
      purchasingArray.push(actionFigureProducts[index]);
    }
    list.append(); // <li><STUFF></li>
    listContainer.append(list); // <ul><li></li></ul>
  }
});
