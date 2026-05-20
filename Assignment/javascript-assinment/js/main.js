/*
    CS5610
    Javascript and DOM Self Assessment
    Summer 2026
    Wu-Hung Hsiao
*/

function MainModule(listingsID = "#listings") {
  const me = {};

  const listingsElement = document.querySelector(listingsID);

  function getListingCode(listing) {
    return `<div class="col-4">
  <div class="listing card">
    <img
      src="${listing.picture_url}"
      class="card-img-top"
      alt="AirBNB Listing"
    />
    <div class="card-body">
      <h5 class="card-title">${listing.name}</h5>
      <p><strong>Price:</strong> ${listing.price} per night</p>
      <p>${listing.description.replace(/<[^>]*>/g, " ").slice(0, 200)}...</p>
      <p><strong>Amenities:</strong> ${JSON.parse(listing.amenities).slice(0, 5).join(", ")}</p>
      <p>
        <img src="${listing.host_thumbnail_url}" width="40" height="40" style="border-radius: 50%;" />
        <strong>Host:</strong> ${listing.host_name}
      </p>
      ${listing.host_is_superhost === "t" ? "<span style='background: gold; padding: 3px 8px; border-radius: 4px;'>⭐ Superhost</span>" : ""}
    </div>
  </div>
  <!-- /card -->
</div>

  `;
  }

  function redraw(listings) {
    listingsElement.innerHTML = "";
    listingsElement.innerHTML = listings.map(getListingCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./airbnb_sf_listings_500.json");
    const listings = await res.json();
    me.redraw(listings.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();
main.loadData();
