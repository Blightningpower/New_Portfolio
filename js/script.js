document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll(".headerNavigation a");
  let section = document.querySelector(".learningOutcomesSection");

  // Check if the section exists before proceeding
  if (section) {
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
      let offset = 100;

      if (section.offsetTop - offset <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        for (let link of links) {
          link.classList.remove("active");
          if (link.dataset.active === "learningOutcomesSection") {
            link.classList.add("active");
          }
        }
      } else {
        for (let link of links) {
          if (link.dataset.active === document.body.id) {
            link.classList.add("active");
          } else if (link.dataset.active === "learningOutcomesSection") {
            link.classList.remove("active");
          }
        }
      }
    });
  }
});

// Type effect name
document.addEventListener("DOMContentLoaded", function() {
  const nameElement = document.getElementById("typedName");
  const name = "Bavli Armanyous";

  // Display each character of the name with a delay
  for (let i = 0; i < name.length; i++) {
    setTimeout(function() {
      nameElement.textContent += name[i];
    }, i * 100); // Adjust the delay (in milliseconds) as needed
  }
});