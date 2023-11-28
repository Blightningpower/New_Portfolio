// //Adding .visible

// // Get the container element
// const container = document.querySelector('.container');

// // Function to add the "visible" class to the container
// function addVisibleClass() {
//   container.classList.add('visible');
// }

// // Function to remove the "visible" class from the container
// function removeVisibleClass() {
//   container.classList.remove('visible');
// }

// // Event listener for mouseover
// container.addEventListener('mouseover', addVisibleClass);

// // Event listener for mouseout
// container.addEventListener('mouseout', removeVisibleClass);

// // Event listener for scroll
// window.addEventListener('scroll', function() {
//   // Calculate the container's position relative to the viewport
//   const containerRect = container.getBoundingClientRect();

//   // Check if the container is in the viewport
//   if (
//     containerRect.top < window.innerHeight &&
//     containerRect.bottom > 0
//   ) {
//     addVisibleClass();
//   } else {
//     removeVisibleClass();
//   }
// });


// Making .arrows clickable
const arrows = document.querySelectorAll('.arrows');

arrows.forEach(arrow => {
  arrow.addEventListener('click', scrollToNextSection);
});

// Making .arrowsSmall clickable
const arrowsSmall = document.querySelectorAll('.arrowsSmall');

arrowsSmall.forEach(arrowsSmall => {
  arrowsSmall.addEventListener('click', scrollToNextSection);
});

// Making .sideArrows clickable
const sideArrows = document.querySelectorAll('.sideArrows');

sideArrows.forEach(arrow => {
  arrow.addEventListener('click', scrollToNextSection);
});

function scrollToNextSection() {
  const currentSection = this.closest('section');
  const nextSection = currentSection.nextElementSibling;

  // Calculate the scroll position of the next section
  const scrollPosition = nextSection.offsetTop;

  // Scroll to the next section with a slower scroll effect
  window.scrollTo({
    top: scrollPosition,
    behavior: 'smooth',
    // Adjust the scroll duration to your preference (e.g., 1000ms = 1 second)
    duration: 8000
  });
}