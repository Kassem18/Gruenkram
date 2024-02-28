//Slider
//Slider

let touchStartX = 0;
let touchEndX = 0;
let currentSlide = 0;

function startSwipe(event) {
  touchStartX = event.touches[0].clientX;
}

function swipe(event) {
  touchEndX = event.touches[0].clientX;
}

function endSwipe() {
  const swipeThreshold = 50;

  if (touchStartX - touchEndX > swipeThreshold) {
    showSlide(currentSlide + 1);
  } else if (touchEndX - touchStartX > swipeThreshold) {
    showSlide(currentSlide - 1);
  }

  touchStartX = 0;
  touchEndX = 0;
}

function showSlide(index) {
  const slider = document.querySelector('.slider');

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide = index;

  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const translateValue = -currentSlide * 100 + '%';
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = 'translateX(' + translateValue + ')';
}



//Rezept toggle
//Rezept toggle

function toggleText(index) {
  const textOverlay = document.querySelectorAll('.text-overlay')[index];
  const button = document.querySelectorAll('.toggle-btn')[index];

  if (textOverlay.style.opacity === '0') {
    textOverlay.style.opacity = '1';
    button.innerText = 'Rezept Ausblenden';
  } else {
    textOverlay.style.opacity = '0';
    button.innerText = 'Rezept Anzeigen';
  }
}


//scroll menu
//scroll menu

// $(document).ready(function () {
//   $('a[href^="#"]').on('click', function (event) {
//       var target = $($(this).attr('href'));

//       if (target.length) {
//           event.preventDefault();
//           $('html, body').animate({
//               scrollTop: target.offset().top
//           }, 1000);
//       }
//   });
// });
