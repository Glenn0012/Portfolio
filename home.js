// Function to highlight the active navigation link based on scroll position
function updateActiveLink() {
    const sections = document.querySelectorAll("section");
    const links = document.querySelectorAll("nav a");
    const scrollPosition = document.getElementById("scroll-container").scrollTop;

    sections.forEach((section, index) => {
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;

        // Check if the scroll position is within the section
        if (scrollPosition >= offsetTop - offsetHeight / 2 && scrollPosition < offsetTop + offsetHeight / 2) {
            links.forEach(link => link.classList.remove("active"));
            links[index].classList.add("active"); // Add active class to the corresponding link
        }
    });
}

// Scroll event listener to update active link as the user scrolls
document.getElementById("scroll-container").addEventListener("scroll", updateActiveLink);

// Function to scroll to the specific section smoothly when a link is clicked
function scrollToSection(sectionId) {
    let container = document.getElementById("scroll-container");
    let section = document.getElementById(sectionId);

    // Scroll to the section smoothly
    container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

// Call the function on page load to highlight the first section
window.onload = updateActiveLink;