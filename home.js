function hidePanel() {
    document.getElementById("panel").classList.add("hidden");
    document.getElementById("navigation").classList.remove("hidden"); //Show Nav
    document.getElementById("navigation").classList.add("nav"); // Show Navigation CSS
    document.getElementById("about").classList.add("active"); // Show about section
    document.getElementById("about").classList.remove("hidden"); // Show about section
}

const sections = [
    'about',
    'education',
    'skills',
    'projects',
    'contact'
];

function show(selected_navigation) {
    console.log({selected_navigation})

    sections.forEach(function(section, i){
        if (selected_navigation == section) {
            document.querySelector(`div[data-target="${section}"]`).classList.add("active");
            document.getElementById(section).classList.remove("hidden");
        } else {
            document.querySelector(`div[data-target="${section}"]`).classList.remove("active");
            document.getElementById(section).classList.add("hidden");
        }
    })
}

function showAbout(){
        document.getElementById("about").classList.remove("hidden");
        document.getElementById("education").classList.add("hidden");
        document.getElementById("skills").classList.add("hidden");
        document.getElementById("projects").classList.add("hidden");
        document.getElementById("contact").classList.add("hidden");
}

function showEducation(){
        document.getElementById("about").classList.add("hidden");
        document.getElementById("education").classList.remove("hidden");
        document.getElementById("skills").classList.add("hidden");
        document.getElementById("projects").classList.add("hidden");
        document.getElementById("contact").classList.add("hidden");
}

function showSkills(){
        document.getElementById("about").classList.add("hidden");
        document.getElementById("education").classList.add("hidden");
        document.getElementById("skills").classList.remove("hidden");
        document.getElementById("projects").classList.add("hidden");
        document.getElementById("contact").classList.add("hidden");
}
function showProjects(){
        document.getElementById("about").classList.add("hidden");
        document.getElementById("education").classList.add("hidden");
        document.getElementById("skills").classList.add("hidden");
        document.getElementById("projects").classList.remove("hidden");
        document.getElementById("contact").classList.add("hidden");
}
function showContact(){
        document.getElementById("about").classList.add("hidden");
        document.getElementById("education").classList.add("hidden");
        document.getElementById("skills").classList.add("hidden");
        document.getElementById("projects").classList.add("hidden");
        document.getElementById("contact").classList.remove("hidden");
}
    
// Typing Animation Function
function typeText(elementId, texts = [], speed = 100, delay = 1500) {
    const element = document.getElementById(elementId);
    let textIndex = 0, charIndex = 0, isDeleting = false;

    function updateText() {
        element.textContent = texts[textIndex].substring(0, charIndex);
    }

    function type() {
        if (!isDeleting && charIndex < texts[textIndex].length) {
            charIndex++;
            updateText();
            setTimeout(type, speed);
        } else if (!isDeleting) {
            isDeleting = true;
            setTimeout(type, delay);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            updateText();
            setTimeout(type, speed / 2);
        } else {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, speed);
        }
    }

    type();
}

// Run animations when the page loads
window.onload = () => {
    typeText("typing-text", ["Web Developer", "Software Engineer", "Full Stack Developer", "Network Engineer"]);
};

let isScrolling = false;

window.addEventListener('scroll', function () {
    if (!isScrolling) {
        isScrolling = true;

        // Your scroll logic
        console.log("Scrolled once!");

        // Allow another scroll event after a short delay
        setTimeout(() => {
            try {
                const activeNavigation = document.querySelector('#navigation div.active').getAttribute('data-target')
                const nextSectionIndex = sections.indexOf(activeNavigation) + 1;
                const nextSectionID = sections[nextSectionIndex];

                console.log({activeNavigation, nextSectionIndex, nextSectionID})

                document.querySelector(`div[data-target="${activeNavigation}"]`).classList.remove("active");
                document.querySelector(`div[data-target="${nextSectionID}"]`).classList.remove("active");
                document.querySelector(`div[data-target="${nextSectionID}"]`).classList.remove("active");

                show(nextSectionID)
            } catch (error) {
                
            }
            isScrolling = false;
        }, 1000); // Adjust delay based on scroll speed
    }
});