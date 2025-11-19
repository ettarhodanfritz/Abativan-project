const vanContainer = document.getElementById("van-container");

// Get the van id from the URL
const vanId = new URLSearchParams(window.location.search).get("id");
const van = vans.find((v) => v.id == vanId);

if (van) {
  vanContainer.innerHTML = `
    <div class="van-details">
      <div class="van-image">
        <img src="${van.image}" alt="${van.name}" />
      </div>
      <div class="van-info">
        <h1>${van.name}</h1>
        <p>${van.year} | ${van.model} | ${van.features}</p>
        <p>Color: ${van.color}</p>
        <p>Mileage: ${van.mileage}</p>
        <p class="van-price">$${van.price.toLocaleString()}</p>
      </div>
    </div>
  `;
} else {
  vanContainer.innerHTML = "<p>Van not found.</p>";
}
