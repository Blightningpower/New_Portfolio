// button active state on current page
document.addEventListener("DOMContentLoaded", function () {
    let links = document.querySelectorAll(".headerNavigation a");
    let section = document.querySelector(".learningOutcomesSection");
  
    window.addEventListener("scroll", function () {
      let scrollPosition = window.scrollY;
  
      // Adjust the offset value as needed to account for any fixed headers or other elements
      let offset = 100;
  
      if (section.offsetTop - offset <= scrollPosition && section.offsetTop + section.offsetHeight > scrollPosition) {
        // The section is in view
        for (let link of links) {
          link.classList.remove("active");
          if (link.dataset.active === "learningOutcomesSection") {
            link.classList.add("active");
          }
        }
      } else {
        // The section is not in view
        for (let link of links) {
          if (link.dataset.active === document.body.id) {
            link.classList.add("active");
          } else if (link.dataset.active === "learningOutcomesSection") {
            link.classList.remove("active");
          }
        }
      }
    });
  });  