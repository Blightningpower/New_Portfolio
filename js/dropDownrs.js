// Interactive media Dropdown

let dropContentrs = document.querySelector(".dropdown-contentrs");
let learningOutcomesrs = document.querySelector(".LOrs");
let timeoutIdrs; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementrs(elementrs, event) {
  let boundingrs = elementrs.getBoundingClientRect();
  return (
    event.clientX >= boundingrs.left &&
    event.clientX <= boundingrs.right &&
    event.clientY >= boundingrs.top &&
    event.clientY <= boundingrs.bottom
  );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomesrs.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContentrs.style.opacity = "1";
  dropContentrs.style.visibility = "visible";
  dropContentrs.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutIdrs);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomesrs.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutIdrs = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElementrs(dropContentrs, event)) {
      dropContentrs.style.opacity = "0";
      dropContentrs.style.visibility = "hidden";
      dropContentrs.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentrs.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdrs);
});

// Add event listener for mouseleave on dropContent
dropContentrs.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutIdrs = setTimeout(function () {
    dropContentrs.style.opacity = "0";
    dropContentrs.style.visibility = "hidden";
    dropContentrs.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let learningOutcomes3 = document.querySelector('.LO');
let activers = document.querySelector('.activers');

// Event listeners for learningOutcomes3
learningOutcomes3.addEventListener("mouseenter", function () {
  activers.style.display = "flex";
  activers.style.opacity = "1";
  activers.style.visibility = "visible";
});

learningOutcomes3.addEventListener("mouseleave", function () {
  activers.style.display = "none";
  activers.style.opacity = "0";
  activers.style.visibility = "hidden";
});

// Event listeners for dropContentrs
dropContentrs.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdrs);
});

dropContentrs.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContentrs after 0.1 seconds when mouse leaves dropContent
  timeoutIdrs = setTimeout(function () {
    activers.style.display = "none";
    activers.style.opacity = "0";
    activers.style.visibility = "hidden";
  }, 100); // 0.1 seconds
});

// Other parts of your existing code...

let linksrs = document.querySelectorAll(".headerNavigation a");
let bodyIdrs = document.querySelector("body").id;

for (let link of linksrs) {
  if (link.dataset.active == bodyIdrs) {
    link.classList.add("active");
    dropContentrs.style.display = "flex";
    dropContentrs.style.opacity = "1";
    dropContentrs.style.visibility = "visible";
  }
}
