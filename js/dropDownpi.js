// Interactive media Dropdown

let dropContentpi = document.querySelector(".dropdown-contentpi");
let learningOutcomespi = document.querySelector(".LOpi");
let timeoutIdpi; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementpi(elementpi, event) {
  let boundingpi = elementpi.getBoundingClientRect();
  return (
    event.clientX >= boundingpi.left &&
    event.clientX <= boundingpi.right &&
    event.clientY >= boundingpi.top &&
    event.clientY <= boundingpi.bottom
  );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomespi.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContentpi.style.opacity = "1";
  dropContentpi.style.visibility = "visible";
  dropContentpi.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutIdpi);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomespi.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutIdpi = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElementpi(dropContentpi, event)) {
      dropContentpi.style.opacity = "0";
      dropContentpi.style.visibility = "hidden";
      dropContentpi.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentpi.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdpi);
});

// Add event listener for mouseleave on dropContent
dropContentpi.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutIdpi = setTimeout(function () {
    dropContentpi.style.opacity = "0";
    dropContentpi.style.visibility = "hidden";
    dropContentpi.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let learningOutcomes3 = document.querySelector('.LO');
let activepi = document.querySelector('.active');

// Event listeners for learningOutcomes3
learningOutcomes3.addEventListener("mouseenter", function () {
  activepi.style.display = "flex";
  activepi.style.opacity = "1";
  activepi.style.visibility = "visible";
});

learningOutcomes3.addEventListener("mouseleave", function () {
  activepi.style.display = "none";
  activepi.style.opacity = "0";
  activepi.style.visibility = "hidden";
});

// Event listeners for dropContentpi
dropContentpi.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdpi);
});

dropContentpi.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContentpi after 0.1 seconds when mouse leaves dropContent
  timeoutIdpi = setTimeout(function () {
    activepi.style.display = "none";
    activepi.style.opacity = "0";
    activepi.style.visibility = "hidden";
  }, 100); // 0.1 seconds
});

// Other parts of your existing code...

let linkspi = document.querySelectorAll(".headerNavigation a");
let bodyIdpi = document.querySelector("body").id;

for (let link of linkspi) {
  if (link.dataset.active == bodyIdpi) {
    link.classList.add("active");
    dropContentpi.style.display = "flex";
    dropContentpi.style.opacity = "1";
    dropContentpi.style.visibility = "visible";
  }
}
