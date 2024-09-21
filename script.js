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
let slideIndexFlocking = 0;
let slideIndexVisualizingMath = 0;
let slideIndexPydewValley = 0;

showSlidesCircle(slideIndexCircle);
showSlidesEngine(slideIndexEngine);
showSlidesFlocking(slideIndexFlocking);
showSlidesVisualizingMath(slideIndexVisualizingMath);
showSlidesPydewValley(slideIndexPydewValley);

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

function plusSlidesFlocking(n) {
    showSlidesFlocking(slideIndexFlocking += n);
}

function showSlidesFlocking(n) {
    let slides = document.getElementsByClassName("mySlidesFlocking");
    if (n >= slides.length) { slideIndexFlocking = 0; }
    if (n < 0) { slideIndexFlocking = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexFlocking].style.display = "block";
}

function plusSlidesVisualizingMath(n) {
    showSlidesVisualizingMath(slideIndexVisualizingMath += n);
}

function showSlidesVisualizingMath(n) {
    let slides = document.getElementsByClassName("mySlidesVisualizingMath");
    if (n >= slides.length) { slideIndexVisualizingMath = 0; }
    if (n < 0) { slideIndexVisualizingMath = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexVisualizingMath].style.display = "block";
}

function plusSlidesPydewValley(n) {
    showSlidesPydewValley(slideIndexPydewValley += n);
}

function showSlidesPydewValley(n) {
    let slides = document.getElementsByClassName("mySlidesPydewValley");
    if (n >= slides.length) { slideIndexPydewValley = 0; }
    if (n < 0) { slideIndexPydewValley = slides.length - 1; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexPydewValley].style.display = "block";
}
