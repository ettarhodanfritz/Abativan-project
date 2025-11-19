const vans = [
  {
    id: 1,
    name: "2024 Ford Transit 150",
    price: 70999,
    mileage: "5,950 miles",
    color: "White",
    year: 2024,
    model: "Transit",
    features: "Side Entry Lift | Braun Lift",
    image: "images/car 1.jpg",
  },
  {
    id: 2,
    name: "2024 Toyota Sienna FWD LE ST",
    price: 61999,
    mileage: "1,789 miles",
    color: "Ruby Flare Pearl",
    year: 2024,
    model: "Sienna",
    features: "Rear Entry Long | VMI Rear Entry",
    image: "images/car 2.jpg",
  },
  {
    id: 3,
    name: "2020 Chrysler Pacifica Touring L",
    price: 49999,
    mileage: "65,165 miles",
    color: "Silver",
    year: 2020,
    model: "Pacifica",
    features: "Side Entry Bi-Fold Pwr | AMS Vans Legend IIP",
    image: "images/car 3.jpg",
  },
  {
    id: 4,
    name: "2019 Ford Transit 350 XLT",
    price: 59999,
    mileage: "60,692 miles",
    color: "White",
    year: 2019,
    model: "Transit",
    features: "Rear Entry Lift | Braun Lift",
    image: "images/car 4.jpg",
  },
  {
    id: 5,
    name: "2023 Ram ProMaster 2500 159 WB",
    price: 99999,
    mileage: "12,300 miles",
    color: "Patriot Blue Pearl",
    year: 2023,
    model: "ProMaster",
    features: "Rear Entry Lift | VMI Northstar",
    image: "images/car 5.jpg",
  },
  {
    id: 6,
    name: "2018 Dodge Grand Caravan SXT",
    price: 34999,
    mileage: "23,450 miles",
    color: "Black",
    year: 2018,
    model: "Grand Caravan",
    features: "Side Entry | BraunAbility",
    image: "images/car 6.jpg",
  },
  {
    id: 7,
    name: "2021 Toyota Sienna XLE",
    price: 53999,
    mileage: "18,900 miles",
    color: "Blue",
    year: 2021,
    model: "Sienna",
    features: "Rear Entry Lift | VMI",
    image: "images/car 7.jpg",
  },
  {
    id: 8,
    name: "2020 Honda Odyssey EX-L",
    price: 50999,
    mileage: "20,450 miles",
    color: "Grey",
    year: 2020,
    model: "Odyssey",
    features: "Side Entry Lift | Braun Lift",
    image: "images/car 8.jpg",
  },

  {
    id: 9,
    name: "2024 Toyota Sienna XLE AWD",
    price: 79999,
    color: "Midnight Black",
    year: 2024,
    mileage: "11925 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 9.jpg",
  },
  {
    id: 10,
    name: "2022 Chrysler Pacifica Touring L",
    price: 59999,
    color: "Silver",
    year: 2022,
    mileage: "15,382 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Pacifica",
    image: "images/car 10.jpg",
  },
  {
    id: 11,
    name: "2020 Honda Odyssey EX-L",
    price: 62999,
    color: "White",
    year: 2020,
    mileage: "16,971 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Odyssey",
    image: "images/car 11.jpg",
  },
  {
    id: 12,
    name: "2017 Ford Transit 350 XLT",
    price: 44999,
    color: "Black",
    year: 2017,
    mileage: "55,274 miles",
    features: "Rear Entry Lift",
    model: "Transit",
    image: "images/car 12.jpg",
  },
  {
    id: 13,
    name: "2015 Dodge Grand Caravan SE",
    price: 27999,
    color: "Red",
    year: 2015,
    mileage: "81,685 miles",
    features: "Rear Entry Short",
    model: "Grand Caravan",
    image: "images/car 13.jpg",
  },
  {
    id: 14,
    name: "2021 Toyota Sienna AWD Limited",
    price: 76999,
    color: "Gray",
    year: 2021,
    mileage: "8,853 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 14.jpg",
  },
  {
    id: 15,
    name: "2019 Honda Odyssey EX-L",
    price: 66470,
    color: "WHITE",
    year: 2019,
    mileage: "32,128 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Odyssey",
    image: "images/car 15.jpg",
  },
  {
    id: 16,
    name: "2017 Ford Transit 150 XL",
    price: 41999,
    color: "White",
    year: 2017,
    mileage: "64,286 miles",
    features: "Side Entry Lift",
    model: "Transit",
    image: "images/car 16.jpg",
  },
  {
    id: 17,
    name: "2022 Chrysler Pacifica Touring L",
    price: 60999,
    color: "Silver",
    year: 2022,
    mileage: "2,358 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Pacifica",
    image: "images/car 17.jpg",
  },
  {
    id: 18,
    name: "2021 Toyota Sienna AWD Limited",
    price: 76999,
    color: " Gray",
    year: 2021,
    mileage: "8,853 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 18.jpg",
  },
  {
    id: 19,
    name: "2023 Toyota Sienna AWD XSE Plus",
    price: 73999,
    color: "Blueprint",
    year: 2023,
    mileage: "35,925 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 19.jpg",
  },
  {
    id: 20,
    name: "2024 Chrysler Pacifica Touring-L DVD-S",
    price: 81832,
    color: "Silver Mist",
    year: 2024,
    mileage: "42 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Pacifica",
    image: "images/car 20.jpg",
  },
  {
    id: 21,
    name: "2023 Toyota Sienna FWD LE",
    price: 82999,
    color: "Predawn Gray Mica",
    year: 2023,
    mileage: "26,221 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 21.jpg",
  },
  {
    id: 22,
    name: "2024 Honda Odyssey EX",
    price: 81590,
    color: "Radiant Red Metallic",
    year: 2024,
    mileage: "93 miles",
    features: "Side Entry In-Floor Pwr",
    model: "Odyssey",
    image: "images/car 22.jpg",
  },
  {
    id: 23,
    name: "2020 Chrysler Pacifica Limited",
    price: 54999,
    color: "White",
    year: 2020,
    mileage: "63,159 miles",
    features: "Side Entry Bi-Fold Pwr",
    model: "Pacifica",
    image: "images/car 23.jpg",
  },

  {
    id: 24,
    name: "2014 Toyota Sienna XLE",
    price: 36999,
    mileage: "41,886 miles",
    color: "White",
    year: 2014,
    features: "Side Entry Bi-Fold Pwr",
    model: "Sienna",
    image: "images/car 24.jpg",
  },
  {
    id: 25,
    name: "2014 Chrysler Town and Country Touring L",
    price: 28999,
    mileage: "107,557 miles",
    color: "Black",
    year: 2014,
    features: "Rear Entry Long",
    model: "Pacifica",
    image: "images/car 25.jpg",
  },
  {
    id: 26,
    name: "2015 Honda Odyssey Touring",
    price: 32999,
    mileage: "107,408 miles",
    year: 2015,
    color: "Gray",
    features: "Side Entry Bi-Fold Pwr",
    model: "Odyssey",
    image: "images/car 26.jpg",
  },
  {
    id: 27,
    name: "2023 Toyota Sienna LE 8-Passenger",
    price: 58999,
    mileage: "26,268 miles",
    color: "Predawn Gray",
    year: 2023,
    features: "Rear Entry Long",
    model: "Sienna",
    image: "images/car 27.jpg",
  },
  {
    id: 28,
    name: "2020 Chrysler Voyager LXi",
    price: 49999,
    mileage: "75,701 miles",
    year: 2020,
    color: "Gray",
    features: "Rear Entry Long",
    model: "Pacifica",
    image: "images/car 28.jpg",
  },
  {
    id: 29,
    name: "2019 Toyota Sienna Limited Premium",
    price: 61999,
    mileage: "25,184 miles",
    color: "Silver",
    year: 2019,
    features: "Side Entry In-Floor Power",
    model: "Sienna",
    image: "images/car 29.jpg",
  },
  {
    id: 30,
    name: "2016 Honda Odyssey EX-L",
    price: 34999,
    mileage: "129,616 miles",
    color: "Gray",
    year: 2016,
    features: "Side Entry in Floor Pwr",
    model: "Odyssey",
    image: "images/car 30.jpg",
  },
  {
    id: 31,
    name: "2021 Toyota Sienna AWD Limited",
    price: 77999,
    mileage: "20,907 miles",
    color: "Red",
    year: 2021,
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 31.jpg",
  },
  {
    id: 32,
    name: "2025 Toyota Sienna AWD XLE Plus",
    price: 94130,
    mileage: "21 miles",
    color: "Blueprint",
    year: 2025,
    features: "Side Entry Power",
    model: "Sienna",
    image: "images/car 32.jpg",
  },
  {
    id: 33,
    name: "2024 Chrysler Voyager LX",
    price: 65154,
    mileage: "112 miles",
    year: 2024,
    color: "Diamond Black Crystal",
    features: "Side Entry Bi-Fold Pwr",
    model: "Pacifica",
    image: "images/car 33.jpg",
  },
  {
    id: 34,
    name: "2024 Toyota Sienna AWD XLE Plus",
    price: 79999,
    mileage: "11,925 miles",
    color: "Midnight Black Metallic",
    year: 2024,
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 34.jpg",
  },
  {
    id: 35,
    name: "2023 Ford Transit Connect XLT",
    price: 49999,
    mileage: "21,446 miles",
    color: "White",
    year: 2023,
    features: "Rear Entry Short",
    model: "Transit",
    image: "images/car 35.jpg",
  },
  {
    id: 36,
    name: "2025 Toyota Sienna AWD LE",
    price: 79980,
    mileage: "1,415 miles",
    color: "Midnight Black Metallic",
    year: 2025,
    features: "Side Entry In-Floor",
    model: "Sienna",
    image: "images/car 36.jpg",
  },
  {
    id: 37,
    name: "2024 Chrysler Voyager LX",
    price: 65654,
    mileage: "55 miles",
    color: "Diamond Black Crystal",
    year: 2024,
    features: "Side Entry Bi-Fold Pwr",
    model: "Pacifica",
    image: "images/car 37.jpg",
  },
  {
    id: 38,
    name: "2014 Honda Odyssey EX-L",
    price: 37999,
    mileage: "66,418 miles",
    color: "Blue",
    year: 2014,
    features: "Side Entry Bi-Fold Pwr",
    model: "Odyssey",
    image: "images/car 38.jpg",
  },
  {
    id: 39,
    name: "2024 Toyota Sienna AWD XLE Plus",
    price: 81999,
    mileage: "8,417 miles",
    color: "Celestial Silver Metallic",
    year: 2024,
    features: "Side Entry In-Floor Power",
    model: "Sienna",
    image: "images/car 39.jpg",
  },
  {
    id: 40,
    name: "2019 Toyota Sienna Limited Premium",
    price: 61999,
    mileage: "25,185 miles",
    color: "Silver",
    year: 2019,
    features: "Side Entry In-Floor Pwr",
    model: "Sienna",
    image: "images/car 40.jpg",
  },
];

/* ======= Populate filters based on your array ======= */
function populateFiltersFromData(vansArray) {
  if (!Array.isArray(vansArray)) return;

  // ===== Years from 2014 to 2025 =====
  const years = [];
  for (let y = 2014; y <= 2025; y++) years.push(y);

  // ===== Colors from your array =====
  const colorSet = new Set();
  vansArray.forEach((v) => {
    if (v.color) colorSet.add(v.color.trim());
  });
  const colors = Array.from(colorSet).sort();

  // ===== Models from your array =====
  const modelSet = new Set();
  vansArray.forEach((v) => {
    if (v.model) modelSet.add(v.model.trim());
  });
  const models = Array.from(modelSet).sort();

  function populateSelect(id, items) {
    const sel = document.getElementById(id);
    if (!sel) return;
    sel.innerHTML = "<option value='all'>All</option>";
    items.forEach((it) => {
      const opt = document.createElement("option");
      opt.value = it;
      opt.textContent = it;
      sel.appendChild(opt);
    });
  }

  populateSelect("yearFilter", years);
  populateSelect("colorFilter", colors);
  populateSelect("modelFilter", models);
}

// Call this after your vans array is defined
populateFiltersFromData(vans);

/* ======= APPLY FILTER FUNCTION (only one!) ======= */
function applyFilters() {
  const color = document
    .getElementById("colorFilter")
    .value.trim()
    .toLowerCase();
  const year = document.getElementById("yearFilter").value.trim();
  const model = document
    .getElementById("modelFilter")
    .value.trim()
    .toLowerCase();
  const maxPriceVal = document.getElementById("maxPrice").value.trim();
  const maxPrice = maxPriceVal ? parseInt(maxPriceVal) : Infinity;

  filteredVans = vans.filter((v) => {
    const colorMatch =
      color === "all" || (v.color && v.color.trim().toLowerCase() === color);
    const yearMatch = year === "all" || Number(v.year) === Number(year);
    const modelMatch =
      model === "all" || (v.model && v.model.trim().toLowerCase() === model);
    const priceMatch = v.price <= maxPrice;

    return colorMatch && yearMatch && modelMatch && priceMatch;
  });

  currentPage = 1; // reset to first page
  renderVans(filteredVans, currentPage); // keeps your existing pagination
}

/* ===== PAGINATION VARIABLES ===== */
let itemsPerPage = 4; // number of vans per page
let currentPage = 1; // current page
let filteredVans = vans; // filtered array

function renderVans(vanArray, page = 1) {
  const container = document.getElementById("inventory-container");
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedVans = vanArray.slice(start, end);

  if (paginatedVans.length === 0) {
    container.innerHTML =
      "<p style='text-align:center; width:100%; font-size:18px;'>No vans match that filter.</p>";
    document.getElementById("pagination").innerHTML = "";
    return;
  }

  paginatedVans.forEach((van) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
  <img src="${van.image}" alt="${van.name}" />
  <div class="card-info">
    <h3>${van.name}</h3>
    <p class="price">$${van.price.toLocaleString()}</p>
    <p>${van.color} | ${van.mileage} | ${van.features}</p>
    <a href="request-info.html" class="btn-primary">Request Info</a>
  </div>
`;

    // ✅ Make the entire card clickable
    card.addEventListener("click", () => {
      window.location.href = `van-details.html?id=${van.id}`;
    });

    container.appendChild(card);
  });

  renderPagination(vanArray);
}

/* ===== RENDER PAGINATION BUTTONS ===== */
function renderPagination(vanArray) {
  const paginationContainer = document.getElementById("pagination");
  paginationContainer.innerHTML = "";

  const totalPages = Math.ceil(vanArray.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const btn = document.createElement("button");
    btn.textContent = i;
    if (i === currentPage) btn.classList.add("active");

    btn.addEventListener("click", () => {
      currentPage = i;
      renderVans(vanArray, currentPage);
    });

    paginationContainer.appendChild(btn);
  }
}

/* ===== EVENT LISTENERS ===== */
document.getElementById("applyFilter").addEventListener("click", applyFilters);

/* ===== INITIAL RENDER ===== */
renderVans(vans, currentPage);
