// Code for the scroll up button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
    const scrollPosition = document.body.scrollTop || document.documentElement.scrollTop;

    // Check if the scroll position is greater than or equal to 20 and not in the "homepageSection"
    if (scrollPosition >= 20 && !isInHomepageSection()) {
        scrollToTopBtn.style.display = "flex";
        scrollToTopBtn.style.alignContent = "center";
        scrollToTopBtn.style.justifyContent = "center";
        scrollToTopBtn.style.alignItems = "center";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Function to check if the current section has the class "homepageSection"
function isInHomepageSection() {
    const homepageSection = document.querySelector(".homepageSection");
    if (homepageSection) {
        const rect = homepageSection.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
}

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// Initial check to hide the button if the document is at the top
if (document.body.scrollTop < 20 && document.documentElement.scrollTop < 20) {
    scrollToTopBtn.style.display = "none";
}
