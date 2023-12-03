// Interactive media Dropdown

let dropContentim = document.querySelector(".dropdown-contentim");
let learningOutcomesim = document.querySelector(".LOim");
let timeoutIdim; // Variable to store the timeout ID

// Function to check if the mouse is over an element
function isMouseOverElementim(elementim, event) {
    let boundingim = elementim.getBoundingClientRect();
    return (
        event.clientX >= boundingim.left &&
        event.clientX <= boundingim.right &&
        event.clientY >= boundingim.top &&
        event.clientY <= boundingim.bottom
    );
}

// Add event listener for mouseenter on #learningOutcomes
learningOutcomesim.addEventListener("mouseenter", function () {
    // When mouse enters #learningOutcomes, set display of dropContent to "flex"
    dropContentim.style.display = "flex";

    // Clear any existing timeout
    clearTimeout(timeoutIdim);
});

// Add event listener for mouseleave on #learningOutcomes
learningOutcomesim.addEventListener("mouseleave", function (event) {
    // Set a timeout to hide dropContent after 0.1 seconds
    timeoutIdim = setTimeout(function () {
        // Check if the mouse is not over the dropContent before hiding
        if (!isMouseOverElementim(dropContentim, event)) {
            dropContentim.style.display = "none";
        }
    }, 100); // 0.1000 milliseconds (0.1 seconds)
});

// Add event listener for mouseenter on dropContent
dropContentim.addEventListener("mouseenter", function () {
    // Clear any existing timeout when mouse enters dropContent
    clearTimeout(timeoutIdim);
});

// Add event listener for mouseleave on dropContent
dropContentim.addEventListener("mouseleave", function () {
    // Set a timeout to hide dropContent after 0.1 seconds when mouse leaves dropContent
    timeoutIdim = setTimeout(function () {
        dropContentim.style.display = "none";
    }, 100); // 0.1000 milliseconds (0.1 seconds)
});