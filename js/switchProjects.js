document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        "../interactiveMediaProjects/imProject1.html",
        "../developmentProjects/dvProject1.html",
        "../designProjects/dsProject1.html",
        "../researchProjects/rsProject1.html",
        "../communicationProjects/cmProject1.html",
        "../professionalIdenitityProjects/pfiProject1.html",
    ];

    let currentProjectIndex = localStorage.getItem('currentProjectIndex') || 0;

    const prevButtons = document.querySelectorAll(".prevButton");
    const nextButtons = document.querySelectorAll(".nextButton");
    const pageIndicators = document.querySelectorAll(".pageIndicator");

    prevButtons.forEach(prevButton => {
        prevButton.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentProjectIndex > 0) {
                currentProjectIndex--;
                updatePagination();
                navigateToProject();
            }
        });
    });

    nextButtons.forEach(nextButton => {
        nextButton.addEventListener("click", function (event) {
            event.preventDefault();
            if (currentProjectIndex < projects.length - 1) {
                currentProjectIndex++;
                updatePagination();
                navigateToProject();
            }
        });
    });

    function updatePagination() {
        prevButtons.forEach(prevButton => {
            prevButton.href = projects[currentProjectIndex - 1] || "#";
        });

        nextButtons.forEach(nextButton => {
            nextButton.href = projects[currentProjectIndex + 1] || "#";
        });

        pageIndicators.forEach(pageIndicator => {
            pageIndicator.textContent = `Project ${currentProjectIndex} - ${projects.length}`;
        });

        // Save the currentProjectIndex to local storage
        localStorage.setItem('currentProjectIndex', currentProjectIndex);
    }

    function navigateToProject() {
        window.location.href = projects[currentProjectIndex];
    }

    // Initial setup
    updatePagination();
});
