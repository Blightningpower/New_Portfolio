// Interactive media Dropdown

let dropContentdv = document.querySelector(".dropdown-contentdv");
let learningOutcomesdv = document.querySelector(".LOdv");
let timeoutIddv; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementdv(elementdv, event) {
  let boundingdv = elementdv.getBoundingClientRect();
  return (
    event.clientX >= boundingdv.left &&
    event.clientX <= boundingdv.right &&
    event.clientY >= boundingdv.top &&
    event.clientY <= boundingdv.bottom
  );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomesdv.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContentdv.style.opacity = "1";
  dropContentdv.style.visibility = "visible";
  dropContentdv.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutIddv);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomesdv.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutIddv = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElementdv(dropContentdv, event)) {
      dropContentdv.style.opacity = "0";
      dropContentdv.style.visibility = "hidden";
      dropContentdv.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentdv.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIddv);
});

// Add event listener for mouseleave on dropContent
dropContentdv.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutIddv = setTimeout(function () {
    dropContentdv.style.opacity = "0";
    dropContentdv.style.visibility = "hidden";
    dropContentdv.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let learningOutcomes3 = document.querySelector('.LO');
let activedv = document.querySelector('.activedv');

// Event listeners for learningOutcomesdv
learningOutcomesdv.addEventListener("mouseenter", function () {
  activedv.style.display = "flex";
  activedv.style.opacity = "1";
  activedv.style.visibility = "visible";
});

learningOutcomesdv.addEventListener("mouseleave", function () {
  activedv.style.display = "none";
  activedv.style.opacity = "0";
  activedv.style.visibility = "hidden";
});

// Event listeners for dropContentdv
dropContentdv.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIddv);
});

dropContentdv.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContentdv after 0.1 seconds when mouse leaves dropContent
  timeoutIddv = setTimeout(function () {
    activedv.style.display = "none";
    activedv.style.opacity = "0";
    activedv.style.visibility = "hidden";
  }, 100); // 0.1 seconds
});

// Other parts of your existing code...

let linksdv = document.querySelectorAll(".headerNavigation a");
let bodyIddv = document.querySelector("body").id;

for (let link of linksdv) {
  if (link.dataset.active == bodyIddv) {
    link.classList.add("active");
    dropContentdv.style.display = "flex";
    dropContentdv.style.opacity = "1";
    dropContentdv.style.visibility = "visible";
  }
}
