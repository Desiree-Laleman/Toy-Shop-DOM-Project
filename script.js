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
    description: "Yellow Flame Hot Wheels",
    price: 99.99,
  },
  {
    src: "assets/van.png",
    alt: "Dodge Van Hot Wheel",
    description: "70s Dodge Van Hot Wheels",
    price: 150,
  },
  {
    src: "assets/bat-mobile.jpg",
    alt: "Bat Mobile Hot Wheel",
    description: "Bat Mobile Hot Wheels",
    price: 85,
  },
];
const actionFigureProducts = [
  {
    src: "assets/He-Man.jpeg",
    alt: "He-Man",
    description: "He-Man",
    price: 45.99,
  },
  {
    src: "assets/Macho-Man-Randy-Savage.jpeg",
    alt: "Macho Man Randy Savage",
    description: "Macho Man Randy Savage",
    price: 750,
  },
  {
    src: "assets/snake-eyes.png",
    alt: "Snake Eyes",
    description: "Snake Eyes",
    price: 75.99,
  },
  {
    src: "assets/Chuck-Norris.jpeg",
    alt: "Chuck Norris",
    description: "Chuck Norris",
    price: 1000.0,
  },
];
const main = document.querySelector("main");
const barbieContainer = document.querySelector("#barbie-container");
const plushieContainer = document.querySelector("#plushie-container");
const hotWheelsContainer = document.querySelector("#hot-wheels-container");
const actionFigureContainer = document.querySelector(
  "#action-figure-container"
);
const cartContainer = document.querySelector(".fa-cart-shopping");
const cartCounter = document.querySelector("#cart-counter");
const currentCart = document.querySelector("#current-cart");
const purchasingCart = document.querySelector("#purchasing-cart");
const cartDeleteButton = document.querySelector("#cart-delete-button");
const subtotalTaxTotalField = document.querySelector(
  "#subtotal-tax-total-field"
);
const buttonContainer = document.querySelector("#button-container");
const cashButton = document.querySelector("#cash-button");
const creditButton = document.querySelector("#credit-button");
const cashCheckout = document.querySelector("#cash-checkout");
const creditCheckout = document.querySelector("#credit-checkout");
const cashSubmitButton = document.querySelector("#cash-submit");
const cashOnHand = document.querySelector("#cash-on-hand");
const cashChangeTotal = document.querySelector("#cash-checkout-change-total");
const itemContainer = document.querySelector("#item-container");
const subtotalContainer = document.querySelector(".subtotal");
const taxContainer = document.querySelector(".tax");
const totalContainer = document.querySelector(".total");
const cashContainerTotal = document.querySelector("#cash-container-total");
const receiptContainer = document.querySelector("#receipt-container");
const itemReceiptContainer = document.querySelector("#item-receipt-container");
const submitButtonCredit = document.querySelector("#submit-button-credit");
const cashCheckoutFormContainer = document.querySelector(
  "#cash-checkout-form-container"
);
const creditCardForm = document.querySelector("#credit-card-form");
const receiptHeader = document.querySelector("#receipt-header");
const itemReceiptTotal = document.querySelector("#item-receipt-total");
const orderConfirmation = document.querySelector("#order-confirmation");
let total = null;
let tax = null;
let subtotal = null;
cartContainer.addEventListener("click", (event) => {
  itemContainer.innerHTML = ""; // gets rid of Cart Array Duplication!!!
  if (event.target.classList.contains("fa-cart-shopping")) {
    currentCart.classList.remove("hidden");
    subtotalTaxTotalField.classList.remove("hidden");
    buttonContainer.classList.remove("hidden");
    // receiptContainer.classList.remove("hidden");
    // receiptHeader.classList.add("hidden");
    purchasingArray.forEach((item) => {
      const newLi = document.createElement("li");
      const image = document.createElement("img");
      const descriptionP = document.createElement("p");
      const priceP = document.createElement("p");
      image.setAttribute("src", item.src);
      image.setAttribute("alt", item.alt);
      descriptionP.textContent = item.description;
      priceP.textContent = item.price;
      newLi.append(image, descriptionP, priceP);
      itemContainer.append(newLi);
    });
    subtotal = purchasingArray.reduce((ac, cv) => ac + cv.price, 0);
    tax = subtotal * 0.06;
    total = subtotal + tax;
    subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
    taxContainer.textContent = `Tax: $${tax.toFixed(2)}`;
    totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  }
});
cartDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cart-delete-button") {
    currentCart.classList.add("hidden");
  }
});
cashButton.addEventListener("click", (event) => {
  cashContainerTotal.innerHTML = "";
  if (event.target.id === "cash-button") {
    cashCheckout.classList.remove("hidden");
    purchasingCart.classList.add("hidden");
    cashContainerTotal.append(`Cart Total: $${total.toFixed(2)}`);
  }
});
const cashDeleteButton = document.querySelector("#cash-delete-button");
cashDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "cash-delete-button") {
    cashCheckout.classList.add("hidden");
    purchasingCart.classList.remove("hidden");
  }
});
creditButton.addEventListener("click", (event) => {
  if (event.target.id === "credit-button") {
    creditCheckout.classList.remove("hidden");
    purchasingCart.classList.add("hidden");
  }
});
const creditDeleteButton = document.querySelector("#credit-delete-button");
creditDeleteButton.addEventListener("click", (event) => {
  if (event.target.id === "credit-delete-button") {
    creditCheckout.classList.add("hidden");
    purchasingCart.classList.remove("hidden");
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
    priceP.textContent = `$${item.price}`; // <p>[{price: $$$}]</p>
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
  // purchasingArray.innerHTML = "";
  // currentCart.innerHTML = "";
  if (event.target.classList.contains("cart-button")) {
    const index = event.target.getAttribute("data-index");
    const array = event.target.getAttribute("data-array");
    if (array === "barbieProducts") {
      purchasingArray.push(barbieProducts[index]);
    } else if (array === "plushieProducts") {
      purchasingArray.push(plushieProducts[index]);
    } else if (array === "hotWheelsProducts") {
      purchasingArray.push(hotWheelsProducts[index]);
    } else if (array === "actionFigureProducts") {
      purchasingArray.push(actionFigureProducts[index]);
    }
    let counter = purchasingArray.length;
    cartCounter.textContent = counter;
  }
});
cashCheckoutFormContainer.addEventListener("submit", (event) => {
  itemReceiptContainer.innerHTML = "";
  subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  taxContainer.textContent = `Tax: $${tax.toFixed(2)}`;
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  const change = cashOnHand.value - total;
  cashChangeTotal.textContent = `Change: $${change.toFixed(2)}`;
  event.preventDefault();
  receiptContainer.classList.remove("hidden");
  orderConfirmation.classList.remove("hidden");
  // currentCart.classList.add("hidden");
  subtotalTaxTotalField.classList.add("hidden");
  // receiptHeader.classList.remove("hidden");
  buttonContainer.classList.add("hidden");
  // cashCheckout.classList.add("hidden");
  purchasingArray.forEach((item) => {
    const newLi = document.createElement("li");
    const image = document.createElement("img");
    const descriptionP = document.createElement("p");
    const priceP = document.createElement("p");
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    descriptionP.textContent = item.description;
    priceP.textContent = item.price;
    newLi.append(image, descriptionP, priceP);
    itemReceiptContainer.append(
      newLi,
      subtotalContainer,
      taxContainer,
      totalContainer
    );
  });
});
creditCardForm.addEventListener("submit", (event) => {
  itemReceiptContainer.innerHTML = "";
  subtotalContainer.textContent = `Subtotal: $${subtotal.toFixed(2)}`;
  taxContainer.textContent = `Tax: $${tax.toFixed(2)}`;
  totalContainer.textContent = `Total: $${total.toFixed(2)}`;
  event.preventDefault();
  receiptContainer.classList.remove("hidden");
  orderConfirmation.classList.remove("hidden");
  // currentCart.classList.add("hidden");
  subtotalTaxTotalField.classList.add("hidden");
  buttonContainer.classList.add("hidden");
  // cashCheckout.classList.add("hidden");
  purchasingArray.forEach((item) => {
    const newLi = document.createElement("li");
    const image = document.createElement("img");
    const descriptionP = document.createElement("p");
    const priceP = document.createElement("p");
    image.setAttribute("src", item.src);
    image.setAttribute("alt", item.alt);
    descriptionP.textContent = item.description;
    priceP.textContent = item.price;
    newLi.append(image, descriptionP, priceP);
    itemReceiptContainer.append(
      newLi,
      subtotalContainer,
      taxContainer,
      totalContainer
    );
    // itemReceiptTotal.append(subtotalTaxTotalField);
  });
});
