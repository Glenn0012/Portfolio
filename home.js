// Function to update active section and trigger fade effects
function updateActiveSection() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");
    const scrollContainer = document.getElementById("scroll-container");
    const scrollPosition = scrollContainer.scrollTop;

    sections.forEach((section, index) => {
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;

        // Check if the section is in view
        if (scrollPosition >= offsetTop - offsetHeight / 2 && scrollPosition < offsetTop + offsetHeight / 2) {
            // Highlight the active nav link
            links.forEach(link => link.classList.remove("active"));
            links[index].classList.add("active");

            // Apply fade-in effect
            const fadeElements = section.querySelectorAll(".fade");
            fadeElements.forEach(el => {
                el.classList.add("active");
                el.classList.remove("out");
            });
        } else {
            // Apply fade-out effect
            const fadeElements = section.querySelectorAll(".fade");
            fadeElements.forEach(el => {
                el.classList.remove("active");
                el.classList.add("out");
            });
        }
    });
}

// Scroll event listener
document.getElementById("scroll-container").addEventListener("scroll", updateActiveSection);

// Function to scroll to a section
function scrollToSection(sectionId) {
    let container = document.getElementById("scroll-container");
    let section = document.getElementById(sectionId);

    container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });

    // Ensure active link updates immediately
    updateActiveSection();
}

// Ensure everything works on page load
window.onload = updateActiveSection;