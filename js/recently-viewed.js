// Simulated recently viewed vehicles
const recentVehicles = [
  {
    name: "2024 Ford Transit 150",
    price: "$70,999",
    color: "White",
    miles: "5,950 miles",
    entry: "Side Entry Lift",
    conversion: "Braun Lift",
    image: "images/car 1.jpg",
  },
  {
    name: "2024 Toyota Sienna FWD LE ST",
    price: "$61,999",
    color: "Ruby Flare Pearl",
    miles: "1,789 miles",
    entry: "Rear Entry Long",
    conversion: "VMI Rear Entry",
    image: "images/car 2.jpg",
  },
  {
    name: "2020 Chrysler Pacifica Touring L",
    price: "$49,999",
    color: "Silver",
    miles: "65,165 miles",
    entry: "Side Entry Bi-Fold Pwr",
    conversion: "AMS Vans Legend IIP",
    image: "images/car 3.jpg",
  },
  {
    name: "2019 Ford Transit 350 XLT",
    price: "$59,999",
    color: "White",
    miles: "60,692 miles",
    entry: "Rear Entry Lift",
    conversion: "Braun Lift",
    image: "images/car 4.jpg",
  },
];

// Get container
const container = document.getElementById("recentCards");

// Render all vehicles
recentVehicles.forEach((v) => {
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
