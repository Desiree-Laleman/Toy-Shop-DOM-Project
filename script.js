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
  const newBarbie = document.createElement("li");
  const image = document.createElement("img");
  const description = document.createElement("p");
  //   const altDescription = document.createElement("alt");
  image.setAttribute("src", item.src);
  //   altDescription.setAttribute("alt", item.alt);
  newBarbie.append(image);
  //   newBarbie.append(altDescription);
  barbieContainer.append(newBarbie);
  //   barbieContainer.append(newBarbie);
});
