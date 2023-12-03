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