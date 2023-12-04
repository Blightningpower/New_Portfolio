// Selecteer alle elementen met de class 'logoHover'
const logoHoverElements = document.querySelectorAll(".logoHover");

// Voeg een eventlistener toe aan elk 'logoHover' element
logoHoverElements.forEach((element) => {
  element.addEventListener("mouseover", () => {
    // Loop door alle 'logoHover' elementen en verander de 'src' attributen
    logoHoverElements.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      if (currentSrc.endsWith(".png")) {
        const newSrc = currentSrc.replace(".png", "_hover.png");
        img.setAttribute("src", newSrc);
      }
    });
  });

  // Voeg een eventlistener toe om terug te schakelen naar de normale afbeelding wanneer de muis de afbeelding verlaat
  element.addEventListener("mouseout", () => {
    logoHoverElements.forEach((img) => {
      const currentSrc = img.getAttribute("src");
      if (currentSrc.endsWith("_hover.png")) {
        const newSrc = currentSrc.replace("_hover.png", ".png");
        img.setAttribute("src", newSrc);
      }
    });
  });
});

// Logo animation script

const BAlogo = document.querySelector(".BAlogo");
const logoB = document.querySelector(".logoB");
const logoA = document.querySelector(".logoA");
const textRestFname = document.querySelector(".textRestFname");
const textRestLname = document.querySelector(".textRestLname");

let clickCount = 0;

function toggleFunctions() {
  // Fade out textRestFname and textRestLname
  textRestFname.style.opacity = "0";
  textRestLname.style.opacity = "0";

  // Trigger the animation
  logoA.classList.add("slide-in-animation");

  clickCount++;
}

// Add 'click' event listeners to both 'logoA' and 'logoB'
logoA.addEventListener("click", toggleFunctions);
logoB.addEventListener("click", toggleFunctions);

// Function to add 'clicked' class to 'logoA' and 'logoB'
function addClickedClass() {
  logoA.classList.add("clicked");
  logoB.classList.add("clicked");
}

// Add 'click' event listeners to both 'logoA' and 'logoB'
logoA.addEventListener("click", handleClick);
logoB.addEventListener("click", handleClick);

function handleClick() {
  // Check if 'logoA' has the 'slide-in-animation' class
  if (logoA.classList.contains("slide-in-animation")) {
    // Check if the 'clicked' class is present on 'logoA'
    if (logoA.classList.contains("clicked")) {
      // Redirect to the '/html/overMij.html' page
      window.location.href = "index.html";
    } else {
      // Add the 'clicked' class to 'logoA' and 'logoB'
      addClickedClass();
    }
  }
}

// Add an event listener for transitionend to detect when the slide-in animation completes
logoA.addEventListener("transitionend", handleTransitionEnd);

function handleTransitionEnd() {
  // Set the flag to true when the transition ends
  isLogoASlidedIn = true;
}

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