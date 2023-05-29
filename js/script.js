// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");

// kerika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika shopping cart di klik
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.priventDefault();
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");

const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Klik di luar side bar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");
const searchButton = document.querySelector("#search-button");
const shoppingButton = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  if (!shoppingButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// modal box
const itemModalDetail = document.querySelector("#item-detail-modal");
const itemDetailButton = document.querySelectorAll(".item-detail-button");

itemDetailButton.forEach(btn);
{
  // Klik tombol close
  btn.onclick = (e) => {
    itemModalDetail.style.display = "flex";
    e.preventDefault();
  };
}

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemModalDetail) {
    itemModalDetail.style.display = "none";
  }
};
