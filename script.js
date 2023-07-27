"use strict";

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
    description: "Movement Barbie",
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
  image.setAttribute("src", item.src);
  image.setAttribute("alt", item.alt);
  descriptionP.textContent = item.description;
  priceP.textContent = item.price;
  barbieList.append(image, descriptionP, priceP); //<li><img/><p></p></li>
  //   barbieList.append(altDescription);
  barbieContainer.append(barbieList);
  //   barbieContainer.append(barbieList);
});

const plushieProducts = [
  {
    src: "assets/Buff-Shark.jpeg",
    alt: "Buff Shark Plushie",
    description: "Buff Shark",
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
  image.setAttribute("src", item.src);
  image.setAttribute("alt", item.alt);
  descriptionP.textContent = item.description;
  priceP.textContent = item.price;
  plushieList.append(image, descriptionP, priceP);
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
  image.setAttribute("src", item.src); // <img src="blah"/>
  image.setAttribute("alt", item.alt); // <img src="blah" alt="blarg"/>
  descriptionP.textContent = item.description; // <p>[{description: "yarhar"}]</p>
  priceP.textContent = item.price; // <p>[{price: $$$}]</p>
  hotWheelList.append(image, descriptionP, priceP); // <li><img/><p></p><p></p></li>
  hotWheelsContainer.append(hotWheelList); // <ul><li></li></ul>
});
