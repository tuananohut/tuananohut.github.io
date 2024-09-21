function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex"; // Show the modal as a flex container
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none"; // Hide the modal
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n >= slides.length) {slideIndex = 0} 
    if (n < 0) {slideIndex = slides.length - 1} 
    for (let i = 0; i < slides.length; i++) {
	slides[i].style.display = "none";  
    }
    slides[slideIndex].style.display = "block";  
}
