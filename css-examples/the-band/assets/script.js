var isClick = false;
function toggleNav() {
  isClick = !isClick;
  var navSmall = document.querySelector(".nav-small");
  if (isClick) {
    navSmall.classList.add("active");
  } else navSmall.classList.remove("active");
}
var slideIndex = 0;
showSlides();
function showSlides() {
  var slides = document.querySelectorAll(".slide");
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
function scrollView(id) {
  var elm = document.getElementById(`${id}`);
  elm.scrollIntoView({ behavior: "smooth" });
}
function showModal() {
  var modalTicket = document.querySelector(".tickets-modal");
  modalTicket.style.display = "block";
}
function closeModal() {
  var modalTicket = document.querySelector(".tickets-modal");
  modalTicket.style.display = "none";
}
var modal = document.querySelector(".modal");
modal.addEventListener("click", function (event) {
  event.stopPropagation();
  // tránh event của thẻ cha
});
