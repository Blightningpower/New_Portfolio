// Development Dropdown

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
        dropContentdv.style.display = "none";
    }, 100); // 0.1000 milliseconds (0.1 seconds)
});
