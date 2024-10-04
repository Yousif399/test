const showBio = (btn) => {
    var bio = btn.previousElementSibling
    if (bio.classList.contains('active')) {
        bio.classList.remove('active')
        btn.innerHTML = "View"
    } 
    else {
        bio.classList.add('active')
        btn.innerHTML = "Close"
    }
}

const carousel = document.querySelector('.owl-carousel'); // Change to your carousel selector
let startX, startY, distX, distY;

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
  startY = e.touches[0].clientY;
});

carousel.addEventListener('touchmove', (e) => {
  distX = e.touches[0].clientX - startX;
  distY = e.touches[0].clientY - startY;

  // Check if the swipe is more vertical than horizontal
  if (Math.abs(distY) > Math.abs(distX)) {
    // Allow the default behavior (vertical scrolling)
    e.stopPropagation();  // Stop the carousel from preventing the scroll
    return;
  }

  // Prevent vertical scrolling and allow horizontal carousel swipe
  e.preventDefault();
});
