        // Hover for Learning outcomes icons
        let learningOutcomes = document.getElementsByClassName("learningOutcome");

        for (let i = 0; i < learningOutcomes.length; i++) {
            let img = learningOutcomes[i].getElementsByTagName("img")[0];
            let text = learningOutcomes[i].getElementsByTagName("span")[0];
            let originalSrc = img.src; // store the original image src
            let originalColor = text.style.color; // store the original text color

            learningOutcomes[i].addEventListener("mouseover", function() {
                img.src = img.src.replace(".png", " White.png");
                text.style.color = "#590404"; 
                text.style.textShadow = "0 0 10px #f2f2f2, 0 0 20px #f2f2f2, 0 0 30px #f2f2f2, 0 0 40px #f2f2f2, 0 0 50px #f2f2f2, 0 0 60px #f2f2f2, 0 0 70px #f2f2f2";
            });

            learningOutcomes[i].addEventListener("mouseout", function() {
                img.src = originalSrc; // set the src back to the original image src
                text.style.color = originalColor; // set the text color back to the original color
                text.style.textShadow = "";
            });
        }