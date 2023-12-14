// Interactive media Dropdown

let dropContentds = document.querySelector(".dropdown-contentds");
let learningOutcomesds = document.querySelector(".LOds");
let timeoutIdds; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementds(elementds, event) {
  let boundingds = elementds.getBoundingClientRect();
  return (
    event.clientX >= boundingds.left &&
    event.clientX <= boundingds.right &&
    event.clientY >= boundingds.top &&
    event.clientY <= boundingds.bottom
  );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomesds.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContentds.style.opacity = "1";
  dropContentds.style.visibility = "visible";
  dropContentds.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutIdds);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomesds.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutIdds = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElementds(dropContentds, event)) {
      dropContentds.style.opacity = "0";
      dropContentds.style.visibility = "hidden";
      dropContentds.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentds.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdds);
});

// Add event listener for mouseleave on dropContent
dropContentds.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutIdds = setTimeout(function () {
    dropContentds.style.opacity = "0";
    dropContentds.style.visibility = "hidden";
    dropContentds.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let learningOutcomes3 = document.querySelector('.LO');
let activeds = document.querySelector('.active');

// Event listeners for learningOutcomesds
learningOutcomesds.addEventListener("mouseenter", function () {
  activeds.style.display = "flex";
  activeds.style.opacity = "1";
  activeds.style.visibility = "visible";
});

learningOutcomesds.addEventListener("mouseleave", function () {
  activeds.style.display = "none";
  activeds.style.opacity = "0";
  activeds.style.visibility = "hidden";
});

// Event listeners for dropContentds
dropContentds.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdds);
});

dropContentds.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContentds after 0.1 seconds when mouse leaves dropContent
  timeoutIdds = setTimeout(function () {
    activeds.style.display = "none";
    activeds.style.opacity = "0";
    activeds.style.visibility = "hidden";
  }, 100); // 0.1 seconds
});

// Other parts of your existing code...

let linksds = document.querySelectorAll(".headerNavigation a");
let bodyIdds = document.querySelector("body").id;

for (let link of linksds) {
  if (link.dataset.active == bodyIdds) {
    link.classList.add("active");
    dropContentds.style.display = "flex";
    dropContentds.style.opacity = "1";
    dropContentds.style.visibility = "visible";
  }
}