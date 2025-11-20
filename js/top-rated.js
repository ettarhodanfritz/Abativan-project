// Array of top-rated vehicles
const topRatedVehicles = [
  {
    name: "2023 Toyota Sienna XLE",
    price: "$53,999",
    details: "Blue | 18,900 miles | Rear Entry Lift | VMI",
    img: "images/car 7.jpg",
  },
  {
    name: "2020 Honda Odyssey EX-L",
    price: "$50,999",
    details: "Grey | 20,450 miles | Side Entry Lift | Braun Lift",
    img: "images/car 8.jpg",
  },
  {
    name: "2024 Ford Transit 150",
    price: "$70,999",
    details: "White | 5,950 miles | Side Entry Lift | Braun Lift",
    img: "images/car 1.jpg",
  },
  {
    name: "2019 Ford Transit 350 XLT",
    price: "$59,999",
    details: "White | 60,692 miles | Rear Entry Lift | Braun Lift",
    img: "images/car 4.jpg",
  },
];

const container = document.getElementById("top-rated-cards");

topRatedVehicles.forEach((vehicle) => {
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
