// Array of best-selling vehicles
const bestSellingVehicles = [
  {
    name: "2024 Ford Transit 150",
    price: "$70,999",
    details: "White | 5,950 miles | Side Entry Lift | Braun Lift",
    img: "images/car 1.jpg",
  },
  {
    name: "2024 Toyota Sienna FWD LE ST",
    price: "$61,999",
    details:
      "Ruby Flare Pearl | 1,789 miles | Rear Entry Long | VMI Rear Entry",
    img: "images/car 2.jpg",
  },
  {
    name: "2020 Chrysler Pacifica Touring L",
    price: "$49,999",
    details:
      "Silver | 65,165 miles | Side Entry Bi-Fold Pwr | AMS Vans Legend IIP",
    img: "images/car 3.jpg",
  },
  {
    name: "2019 Ford Transit 350 XLT",
    price: "$59,999",
    details: "White | 60,692 miles | Rear Entry Lift | Braun Lift",
    img: "images/car 4.jpg",
  },
];

// Render cards
const container = document.getElementById("best-selling-cards");

bestSellingVehicles.forEach((vehicle) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${vehicle.img}" alt="${vehicle.name}" />
    <div class="card-info">
      <h3>${vehicle.name}</h3>
      <p class="price">${vehicle.price}</p>
      <p>${vehicle.details}</p>
      <a href="request-info.html" class="btn-info">Request Info</a>
    </div>
  `;

  container.appendChild(card);
});
