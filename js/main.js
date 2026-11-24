console.log("JS is connected");

// Burger menu section

const menu = document.querySelector("#menu-toggle");
const links = document.querySelectorAll("#burger-menu a");

function closeMenu() {
  menu.checked = false;
}

for (const link of links) {
  link.addEventListener("click", closeMenu);
}
