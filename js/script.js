let kitchenProducts = [
  {
    type: "grater",
    price: 10,
  },
  {
    type: "pastry-bag",
    price: 25,
  },
  {
    type: "scale",
    price: 5,
  },
  {
    type: "whisk",
    price: 15,
  },
];

let devicesProducts = [
  {
    type: "desktop",
    price: [100, 1000],
  },
  {
    type: "laptop",
    price: [50, 1500],
  },
  {
    type: "smartphone",
    price: [80, 2000],
  },
  {
    type: "tablet",
    price: [20, 1300],
  },
];

let cosmeticsProducts = [
  {
    type: "blush",
    price: 100,
  },
  {
    type: "eyeshadow",
    price: 50,
  },
  {
    type: "lipstick",
    price: 80,
  },
  {
    type: "nail-polish",
    price: 200,
  },
  {
    type: "perfume",
    price: 300,
  },
];

let Kitchen = { category: "kitchen" };
let Devices = { category: "devices" };
let Cosmetics = { category: "cosmetics" };

let modProducts = [];

function getProto(arr, proto) {
  modProducts = arr.map((products) => {
    let newProducts = Object.create(proto);
    for (let key in products) {
      newProducts[key] = products[key];
    }
    return newProducts;
  });
  return modProducts;
}

const arr = [
  getProto(kitchenProducts, Kitchen),
  getProto(devicesProducts, Devices),
  getProto(cosmeticsProducts, Cosmetics),
];

console.log(arr);

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
}

let renderArr = [];

arr.forEach((element) => {
  renderArr.push(`
    <h2 class ="category__heading">Category: ${element[0].category}</h2>
    <div class ="category__row">
    `);
  element.map((obj) => {
    renderArr.push(
      `
      <div class ="category__box"> 
        <div class ="category__image">
          <img src ="images/${obj.type}.svg" alt ="${obj.type}">
        </div>
        <p class ="category__title">Name: <span>${capitalize(
          String(obj.type)
        )}</span></p>
        <p class ="category__price">Price: <span>$${capitalize(
          String(
            Array.isArray(obj.price) === true
              ? String(obj.price[0]) + "-" + String(obj.price[1])
              : obj.price
          )
        )}</span></p>
      </div>
      `
    );
  });
  renderArr.push(`</div>`);
});

document.write(`<div class ="category">${renderArr.join(" ")}</div>`);
