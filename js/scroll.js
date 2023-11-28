  //   Code for the scroll up button
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Show the button when the user scrolls down 20px from the top of the document
  window.onscroll = function() {
      if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
          scrollToTopBtn.style.display = "flex";
          scrollToTopBtn.style.alignContent = "center";
          scrollToTopBtn.style.jus = "center";
          scrollToTopBtn.style.alignItems = "center";
      } else {
          scrollToTopBtn.style.display = "none";
      }
  };

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.addEventListener("click", function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });