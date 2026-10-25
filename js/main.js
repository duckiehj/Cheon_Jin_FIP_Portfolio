(() => {
  console.log("JS is connected");

  const menuToggle = document.querySelector("#menu-toggle");
  const navLinks = document.querySelectorAll("#burger-menu a");

  function closeMenu() {
    menuToggle.checked = false;
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
})();
