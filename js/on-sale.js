// Array of vehicles
const vehicles = [
  {
    name: "2023 Ram ProMaster 2500 159 WB",
    price: "$99,999",
    color: "Patriot Blue Pearl",
    miles: "12,300 miles",
    entry: "Rear Entry Lift",
    conversion: "VMI Northstar",
    image: "images/car 5.jpg",
    onSale: true,
  },
  {
    name: "2018 Dodge Grand Caravan SXT",
    price: "$34,999",
    color: "Black",
    miles: "23,450 miles",
    entry: "Side Entry",
    conversion: "BraunAbility",
    image: "images/car 6.jpg",
    onSale: true,
  },
  {
    name: "2021 Toyota Sienna XLE",
    price: "$53,999",
    color: "Blue",
    miles: "18,900 miles",
    entry: "Rear Entry Lift",
    conversion: "VMI",
    image: "images/car 7.jpg",
    onSale: true,
  },
  {
    name: "2020 Honda Odyssey EX-L",
    price: "$50,999",
    color: "Grey",
    miles: "20,450 miles",
    entry: "Side Entry Lift",
    conversion: "Braun Lift",
    image: "images/car 8.jpg",
    onSale: true,
  },
];

// Get container
const container = document.getElementById("onSaleCards");

// Render only vehicles with onSale = true
vehicles
  .filter((v) => v.onSale)
  .forEach((v) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
    <img src="${v.image}" alt="${v.name}" />
    <div class="card-info">
      <h3>${v.name}</h3>
      <p class="price">${v.price}</p>
      <p>${v.color} | ${v.miles} | ${v.entry} | ${v.conversion}</p>
      <a href="request-info.html" class="btn-info">Request Info</a>
    </div>
  `;
    container.appendChild(card);
  });
