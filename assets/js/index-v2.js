// Disable scrolling on smaller screens
if (window.innerWidth <= 600) {
  document.body.style.overflow = "hidden";
}

// Re-enable scrolling on larger screens
window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    document.body.style.overflow = "auto";
  } else {
    document.body.style.overflow = "hidden";
  }
});
