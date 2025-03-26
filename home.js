function hidePanel() {
    // Hide intro panel
    document.getElementById("panel").classList.add("hidden"); 

    // Show navigation and about section
    document.getElementById("navigation").classList.remove("hidden"); // Show navigation
    document.getElementById("about").classList.remove("hidden"); // Show about section

    document.getElementById("navigation").classList.add("showItem"); // Apply fade-in effect
    document.getElementById("about").classList.add("showItem"); // Apply fade-in effect
}

// Function to show different sections
function showSection(sectionId) {
    document.querySelectorAll(".section").forEach(section => section.classList.add("hidden")); // Hide all sections
    document.getElementById(sectionId).classList.remove("hidden"); // Show selected section
    document.getElementById(sectionId).classList.add("showContent"); // Add animation
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