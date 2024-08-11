function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex"; // Show the modal as a flex container
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none"; // Hide the modal
}

// Close the modal when clicking outside of it
window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};
