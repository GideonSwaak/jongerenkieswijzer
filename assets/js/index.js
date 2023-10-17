const modal = document.getElementById("bottomModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const desktopToQuestions = document.getElementById("desktopToQuestions");
const mobileToQuestions = document.getElementById("mobileToQuestions");

document
  .getElementById("desktopToQuestions")
  .addEventListener("click", function () {
    const transition = document.createElement("div");
    transition.className = "page-transition";
    document.body.appendChild(transition);

    transition.addEventListener("animationend", function () {
      window.location.href = "cards.html";
    });
  });

document
  .getElementById("mobileToQuestions")
  .addEventListener("click", function () {
    const transition = document.createElement("div");
    transition.className = "page-transition";
    document.body.appendChild(transition);

    transition.addEventListener("animationend", function () {
      window.location.href = "cards.html";
    });
  });

function openModal() {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.height = isMobile() ? "100svh" : "100svh";
    document.querySelector("footer").style.zIndex = "-1";
  }, 10);
}

function closeModal() {
  modal.style.height = "0";
  setTimeout(() => {
    modal.style.display = "none";
    document.querySelector("footer").style.zIndex = "1";
  }, 300);
}

openModalButton.addEventListener("click", openModal);

closeModalButton.addEventListener("click", closeModal);

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function isMobile() {
  return window.innerWidth <= 768;
}
