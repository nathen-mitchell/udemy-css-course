var backdrop = document.querySelector(".backdrop");
var modal = document.querySelector(".modal");
var modalnobutton = document.querySelector(".modal__action--negative");
var selectplanbuttons = document.querySelectorAll(".plan button");
var togglebutton = document.querySelector(".toggle-button");
var mobile = document.querySelector(".mobile-nav");

//console.dir(backdrop)
for (var i = 0; i < selectplanbuttons.length; i++) {
  selectplanbuttons[i].addEventListener("click", function () {
    // modal.style.display = "block";
    // backdrop.style.display = "block";
    // modal.className = "open"; this will actually overide the complete class list
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

// for (var selectPlanButton of selectplanbuttons) {
//   selectPlanButton.addEventListener("click", function () {
//     modal.classList.add("open");
//     backdrop.classList.add("open");
//   });
// }

// selectplanbuttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     modal.classList.add("open");
//     backdrop.classList.add("open");
//   });
// });

// console.dir(backdrop.style.backgroundImage);

backdrop.addEventListener("click", function () {
  // mobile.style.display = "none";
  // backdrop.style.display = "none";
  mobile.classList.remove("open");
  closeModal();
});
if (modalnobutton) {
  modalnobutton.addEventListener("click", closeModal);
}

function closeModal() {
  // backdrop.style.display = "none";
  // modal.style.display = "none";
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}

togglebutton.addEventListener("click", function () {
  // mobile.style.display = "block";
  // backdrop.style.display = "block";
  mobile.classList.add("open");
  backdrop.classList.add("open");
});
