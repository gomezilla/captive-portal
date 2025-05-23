window.onload = function() {
  // Tab and Collapsible Behavior Functions
  var coll = document.getElementsByClassName("collapsible");
  var i;

  for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function() {
          var alreadyActive = this.classList.contains('active');
          // first, collapse all buttons
          for (var j = 0; j < coll.length; j++) {
              coll[j].classList.remove("active");
              coll[j].nextElementSibling.style.display = "none";
              coll[j].style.backgroundImage = "url('res/img/down-arrow.png')";
          }
          // then expand the clicked one, if it wasn't already active
          if (!alreadyActive) {
              this.classList.add("active");
              this.nextElementSibling.style.display = "block";
              this.style.backgroundImage = "url('res/img/up-arrow.png')";
          }
      });
  }

  // Password Show
  var passwordInput = document.getElementById('password');
  var toggleButton = document.getElementById('togglePassword');

  function showPassword() {
      passwordInput.setAttribute('type', 'text');
  }

  function hidePassword() {
      passwordInput.setAttribute('type', 'password');
  }

  toggleButton.addEventListener('mousedown', showPassword);
  toggleButton.addEventListener('mouseup', hidePassword);
  toggleButton.addEventListener('mouseout', hidePassword);

  toggleButton.addEventListener('touchstart', showPassword);
  toggleButton.addEventListener('touchend', hidePassword);

  // Carousel section
  var images = document.getElementsByClassName('carouselImage');
  var currentImageIndex = 0;

  function changeImage() {
      for (var i = 0; i < images.length; i++) {
          images[i].style.display = 'none'; // hide all images
      }
      images[currentImageIndex].style.display = 'block'; // show current image
      currentImageIndex = (currentImageIndex + 1) % images.length; // go to next image index
  }

  setInterval(changeImage, 3000); // Change image every 3 seconds
};
