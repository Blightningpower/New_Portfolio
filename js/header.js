// Header dropdown script

document.addEventListener("DOMContentLoaded", function () {
    let dropdownContent = document.querySelector(".dropdown-content");
    let learningOutcomesLink = document.getElementById("learningOutcomes");
    let highlightSpan = learningOutcomesLink.querySelectorAll(".highlight");

let timeoutId; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElement(element, event) {
  let bounding = element.getBoundingClientRect();
  return (
    event.clientX >= bounding.left &&
    event.clientX <= bounding.right &&
    event.clientY >= bounding.top &&
    event.clientY <= bounding.bottom
  );
}

// Add event listener for mouseenter on #learningOutcome
learningOutcomesLink.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes , set display of dropdownContent  to "flex"
  dropdownContent.style.opacity = "1";

  // Clear any existing timeout
  clearTimeout(timeoutId);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomesLink.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropdownContent  after 0.1 seconds
  timeoutId = setTimeout(function () {
    // Check if the mouse is not over the dropdownContent  before hiding
    if (!isMouseOverElement(dropdownContent, event)) {
      dropdownContent.style.opacity = "0";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropdownContent
dropdownContent.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropdownContent
  clearTimeout(timeoutId);
});

// Add event listener for mouseleave on dropdownContent
dropdownContent.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropdownContent  after 0.1 seconds when mouse leaves dropdownContent
  timeoutId = setTimeout(function () {
    dropdownContent.style.opacity = "0";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

dropdownContent.addEventListener("mouseover", function () {
    learningOutcomesLink.style.fontWeight = "700";
    if (highlightSpan) {
      highlightSpan.style.opacity = "1";
    }
  });

  dropdownContent.addEventListener("mouseout", function () {
    learningOutcomesLink.style.fontWeight = ""; // Reset to default value
    if (highlightSpan) {
      highlightSpan.style.opacity = ""; // Reset to default value
    }
  });
});
