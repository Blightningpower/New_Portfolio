/* Dit zijn de elementen die zorgen voor
 de automatische animatie bij het eerste bezoek aan de pagina*/
const image = document.querySelector(".fade-out-image");
const fadeInElements = document.querySelector(".fadeInElements");
const copyRightText = document.querySelector(".copyrightText");

if (!localStorage.getItem("visitedBefore")) {
  image.addEventListener("transitionend", () => {
    fadeInElements.classList.add("fadeIn");
    copyRightText.classList.add("fadeIn");
    fadeInElements.classList.remove("fadeInElements");
  });

  setTimeout(() => {
    image.classList.add("fadeOut");
    copyRightText.classList.add("fadeIn");
    copyRightText.style.transition = "opacity 3.5s ease-in";
    copyRightText.style.opacity = "1";
  }, 1000);

  localStorage.setItem("visitedBefore", true);
} else {
  fadeInElements.classList.add("fadeIn");
  copyRightText.classList.add("fadeIn");
  copyRightText.style.opacity = "1";
  image.style.opacity = "0";
}

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
  logoA.classList.add('clicked');
  logoB.classList.add('clicked');
}

// Add 'click' event listeners to both 'logoA' and 'logoB'
logoA.addEventListener('click', handleClick);
logoB.addEventListener('click', handleClick);

function handleClick() {
  // Check if 'logoA' has the 'slide-in-animation' class
  if (logoA.classList.contains('slide-in-animation')) {
    // Check if the 'clicked' class is present on 'logoA'
    if (logoA.classList.contains('clicked')) {
      // Redirect to the '/html/overMij.html' page
      window.location.href = 'index.html';
    } else {
      // Add the 'clicked' class to 'logoA' and 'logoB'
      addClickedClass();
    }
  }
}

// Add an event listener for transitionend to detect when the slide-in animation completes
logoA.addEventListener('transitionend', handleTransitionEnd);

function handleTransitionEnd() {
  // Set the flag to true when the transition ends
  isLogoASlidedIn = true;
}