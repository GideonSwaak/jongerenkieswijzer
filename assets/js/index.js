const modal = document.getElementById("bottomModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");
const desktopToQuestions = document.getElementById("desktopToQuestions");
const mobileToQuestions = document.getElementById("mobileToQuestions");

desktopToQuestions.addEventListener("click", () => {
  window.location.href = "cards.html";
});
mobileToQuestions.addEventListener("click", () => {
  window.location.href = "cards.html";
});

function openModal() {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.height = isMobile() ? "17vh" : "23vh";
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
