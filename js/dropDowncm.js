// Interactive media Dropdown

let dropContentcm = document.querySelector(".dropdown-contentcm");
let learningOutcomescm = document.querySelector(".LOcm");
let timeoutIdcm; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementcm(elementcm, event) {
  let boundingcm = elementcm.getBoundingClientRect();
  return (
    event.clientX >= boundingcm.left &&
    event.clientX <= boundingcm.right &&
    event.clientY >= boundingcm.top &&
    event.clientY <= boundingcm.bottom
  );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomescm.addEventListener("mouseenter", function () {
  // When mouse enters #learningOutcomes, set display of dropContent to "flex"
  dropContentcm.style.opacity = "1";
  dropContentcm.style.visibility = "visible";
  dropContentcm.style.display = "flex";

  // Clear any existing timeout
  clearTimeout(timeoutIdcm);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomescm.addEventListener("mouseleave", function (event) {
  // Set a timeout to hide dropContent after 0.1 seconds
  timeoutIdcm = setTimeout(function () {
    // Check if the mouse is not over the dropContent before hiding
    if (!isMouseOverElementcm(dropContentcm, event)) {
      dropContentcm.style.opacity = "0";
      dropContentcm.style.visibility = "hidden";
      dropContentcm.style.display = "none";
    }
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentcm.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdcm);
});

// Add event listener for mouseleave on dropContent
dropContentcm.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
  timeoutIdcm = setTimeout(function () {
    dropContentcm.style.opacity = "0";
    dropContentcm.style.visibility = "hidden";
    dropContentcm.style.display = "none";
  }, 100); // 0.1000 milliseconds (0.1 seconds)
});

let learningOutcomes3 = document.querySelector('.LO');
let activecm = document.querySelector('.active');

// Event listeners for learningOutcomes3
learningOutcomes3.addEventListener("mouseenter", function () {
  activecm.style.display = "flex";
  activecm.style.opacity = "1";
  activecm.style.visibility = "visible";
});

learningOutcomes3.addEventListener("mouseleave", function () {
  activecm.style.display = "none";
  activecm.style.opacity = "0";
  activecm.style.visibility = "hidden";
});

// Event listeners for dropContentcm
dropContentcm.addEventListener("mouseenter", function () {
  // Clear any existing timeout when mouse enters dropContent
  clearTimeout(timeoutIdcm);
});

dropContentcm.addEventListener("mouseleave", function () {
  // Set a timeout to hide dropContentcm after 0.1 seconds when mouse leaves dropContent
  timeoutIdcm = setTimeout(function () {
    activecm.style.display = "none";
    activecm.style.opacity = "0";
    activecm.style.visibility = "hidden";
  }, 100); // 0.1 seconds
});

// Other parts of your existing code...

let linkscm = document.querySelectorAll(".headerNavigation a");
let bodyIdcm = document.querySelector("body").id;

for (let link of linkscm) {
  if (link.dataset.active == bodyIdcm) {
    link.classList.add("active");
    dropContentcm.style.display = "flex";
    dropContentcm.style.opacity = "1";
    dropContentcm.style.visibility = "visible";
  }
}
