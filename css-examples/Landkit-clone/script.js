var dropdownList = document.querySelectorAll(".dropdown");
dropdownList.forEach((dropdown) => {
  dropdown.addEventListener("mouseover", function () {
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("show");
  });
  dropdown.addEventListener("mouseout", function () {
    var dropdownMenu = dropdown.querySelector(".dropdown-menu");
    dropdownMenu.classList.remove("show");
  });
});
var droprightList = document.querySelectorAll(".dropright");
droprightList.forEach((dropright) => {
  dropright.addEventListener("mouseover", function () {
    var dropdownMenu = dropright.querySelector(".dropdown-menu");
    dropdownMenu.classList.add("show");
  });
  dropright.addEventListener("mouseout", function () {
    var dropdownMenu = dropright.querySelector(".dropdown-menu");
    dropdownMenu.classList.remove("show");
  });
});
