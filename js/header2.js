// button active state on current page

let links = document.querySelectorAll(".headerNavigation a");
let bodyId = document.querySelector("body").id;

for (let link of links) {
  if (link.dataset.active == bodyId) {
    link.classList.add("active");
  }
}

// Header dropdown script

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

// Add event listener for mouseenter on #learningOutcomes
learningOutcomes.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContent.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutId);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomes.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutId = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElement(dropContent, event)) {
      dropContent.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContent.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutId);
});

// Add event listener for mouseleave on dropContent
dropContent.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutId = setTimeout(function () {
    dropContent.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let dropDownIcon = document.querySelector(".dropDownIcon");

learningOutcomes.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropDownIcon.innerHTML = "▼"; // Change the arrow to right-pointing triangle
});

learningOutcomes.addEventListener("mouseleave", function () {
  // When mouse leaves #learningOutcomes, set display of dropContent to "none"
  dropDownIcon.innerHTML = "▶"; // Change the arrow to downward-pointing triangle
});

dropContent.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropDownIcon.innerHTML = "▼"; // Change the arrow to right-pointing triangle
});

dropContent.addEventListener("mouseleave", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropDownIcon.innerHTML = "▶"; // Change the arrow to right-pointing triangle
});