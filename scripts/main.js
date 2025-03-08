document.querySelector("#show-login").addEventListener("click", function () {
  let popup = document.getElementById("loginPopup");
  let modal = document.querySelector(".modal");

  popup.style.display = "flex";
  setTimeout(() => {
    popup.classList.add("active");
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }, 10);
});

document
  .querySelector(".modal .close-btn")
  .addEventListener("click", function () {
    closePopup();
  });

document
  .getElementById("loginPopup")
  .addEventListener("click", function (event) {
    if (event.target === this) {
      closePopup();
    }
  });

function closePopup() {
  let popup = document.getElementById("loginPopup");
  let modal = document.querySelector(".modal");

  popup.classList.remove("active");
  modal.classList.remove("active");

  setTimeout(() => {
    popup.style.display = "none";
    document.body.style.overflow = "auto";
  }, 300);
}

// Toggle & Responsive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navLists = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navLists.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

// Clear form before unload
window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
