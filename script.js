function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
};

let slideIndexCircle = 0;
let slideIndexEngine = 0;

showSlidesCircle(slideIndexCircle);
showSlidesEngine(slideIndexEngine);

function plusSlidesCircle(n) {
    showSlidesCircle(slideIndexCircle += n);
}

function showSlidesCircle(n) {
    let slides = document.getElementsByClassName("mySlidesCircle"); 
    if (n >= slides.length) { slideIndexCircle = 0; }
    if (n < 0) { slideIndexCircle = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexCircle].style.display = "block";
}

function plusSlidesEngine(n) {
    showSlidesEngine(slideIndexEngine += n);
}

function showSlidesEngine(n) {
    let slides = document.getElementsByClassName("mySlidesEngine");
    if (n >= slides.length) { slideIndexEngine = 0; }
    if (n < 0) { slideIndexEngine = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexEngine].style.display = "block";
}
