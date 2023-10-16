const modal = document.getElementById("bottomModal");
const openModalButton = document.getElementById("openModal");
const closeModalButton = document.getElementById("closeModal");

// Function to open the modal
function openModal() {
  modal.style.display = "block";
  setTimeout(() => {
    modal.style.height = isMobile() ? "17vh" : "23vh";
    document.querySelector("footer").style.zIndex = "-1"; // Set z-index to -1 for the footer
  }, 10);
}

// Function to close the modal
function closeModal() {
  modal.style.height = "0";
  setTimeout(() => {
    modal.style.display = "none";
    document.querySelector("footer").style.zIndex = "1"; // Set z-index back to 1 for the footer
  }, 300);
}

// Event listener for opening the modal
openModalButton.addEventListener("click", openModal);

// Event listener for closing the modal
closeModalButton.addEventListener("click", closeModal);

// Close the modal if the user clicks outside of it
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

// Check if the screen width is below a certain value (e.g., 768px) to determine if it's a mobile device
function isMobile() {
  return window.innerWidth <= 768;
}
