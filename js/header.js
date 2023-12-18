// Header dropdown script

document.addEventListener("DOMContentLoaded", function () {
  let dropdownContent = document.querySelector(".dropdown-content");
  let learningOutcomesLink = document.getElementById("learningOutcomes");

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

    dropdownContent.style.opacity = "1";
    dropdownContent.style.display = "flex";

    // Clear any existing timeout
    clearTimeout(timeoutId);
  });

  // Add event listener for mouseleave on #learningOutcomes
  learningOutcomesLink.addEventListener("mouseleave", function (event) {
    // Set a timeout to hide dropContent after 0.1 seconds
    timeoutId = setTimeout(function () {
      // Check if the mouse is not over the dropContent before hiding
      if (!isMouseOverElement(dropdownContent, event)) {
        dropdownContent.style.opacity = "0";
        dropdownContent.style.display = "none";
      }
    }, 100); // 0.1 seconds
  });

  // Add event listener for mouseenter on dropdownContent
  dropdownContent.addEventListener("mouseenter", function () {
    // Clear any existing timeout when the mouse enters dropdownContent
    clearTimeout(timeoutId);
  });

  // Add event listener for mouseleave on dropdownContent
  dropdownContent.addEventListener("mouseleave", function () {
    // Set a timeout to hide dropdownContent after 0.1 seconds when the mouse leaves dropdownContent
    timeoutId = setTimeout(function () {
      dropdownContent.style.opacity = "0";
      dropdownContent.style.display = "none";
    }, 100); // 0.1 seconds
  });
});
