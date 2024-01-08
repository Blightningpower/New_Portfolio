document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        "../interactiveMediaProjects/imProject1.html",
        "../interactiveMediaProjects/imProject2.html",
        "../developmentProjects/dvProject1.html",
        "../developmentProjects/dvProject2.html",
        // "../designProjects/dsProject1.html",
        // "../designProjects/dsProject2.html",
        // "../designProjects/dsProject3.html",
        // "../designProjects/dsProject4.html",
        "../researchProjects/rsProject1.html",
        "../communicationProjects/cmProject1.html",
        // "../communicationProjects/cmProject2.html",
        "../professionalIdenitityProjects/pfiProject1.html",
    ];

    let currentProjectIndex = 0;

    // Extract the last two parts of the current URL
    const urlParts = window.location.pathname.split('/').filter(part => part); // Remove empty strings
    const currentUrlLastTwo = urlParts.slice(-2).join('/');

    // Find the index of the matching project in the projects array
    for (let i = 0; i < projects.length; i++) {
        const projectParts = projects[i].split('/').filter(part => part); // Remove empty strings
        const projectLastTwo = projectParts.slice(-2).join('/');
        
        if (projectLastTwo === currentUrlLastTwo) {
            currentProjectIndex = i;
            break;
        }
    }

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
            pageIndicator.textContent = `Project ${currentProjectIndex + 1} - ${projects.length}`;
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
