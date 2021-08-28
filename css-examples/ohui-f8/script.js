function changeToReaded() {
  var itemNoti = document.querySelector(".noti-list__item-link");
  itemNoti.classList.add("readed");
}
document.getElementById("register").addEventListener("click", function (event) {
  event.stopPropagation;
});
function openRegisterModal() {
  var modal = document.querySelector(".modal");
  modal.style.display = "flex";
}
function closeModal() {
  var modal = document.querySelector(".modal");
  modal.style.display = "none";
}
