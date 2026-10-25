console.log("JS is connected");

const menu = document.querySelector("#menu-toggle");
const links = document.querySelectorAll("#burger-menu a");

links.forEach(function (link) {
  link.onclick = function () {
    menu.checked = false;
  };
});
