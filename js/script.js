// button active state on current page

let links = document.querySelectorAll(".headerNavigation a");
        let bodyId = document.querySelector("body").id;
        
        for (let link of links) {
            if (link.dataset.active == bodyId) {
                link.classList.add("active");
        }
    }