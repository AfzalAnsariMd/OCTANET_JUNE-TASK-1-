// JavaScript functionality for the watch landing page
// JavaScript functionality for the watch landing page
document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.getElementsByClassName("button");
  
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        event.preventDefault();
        var watchName = this.parentNode.querySelector("h2").innerText;
        alert("You clicked 'Buy Now' for " + watchName);
      });
    }
  });

  
  // JavaScript functionality for the watch landing page
document.addEventListener("DOMContentLoaded", function() {
    var slides = document.querySelectorAll(".slide");
    var currentSlide = 0;
  
    // Set the first slide as active
    slides[currentSlide].classList.add("active");
  
    // Function to switch slides
    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }
  
    // Automatic slide transition every 5 seconds
    setInterval(nextSlide, 2000);
  
    var buttons = document.getElementsByClassName("button");
  
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function(event) {
        event.preventDefault();
        var watchName = this.parentNode.querySelector("h2").innerText;
        alert("You clicked 'Buy Now' for " + watchName);
      });
    }
  });
  