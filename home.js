function hidePanel() {
    document.getElementById("panel").classList.add("hidden");

    let navigation = document.getElementById("navigation");
    if (navigation) {
        navigation.classList.remove("hidden");
        navigation.classList.add("nav");
    }

    let about = document.getElementById("about");
    if (about) {
        about.classList.remove("hidden");
    }
}

// Improve scroll event performance
let isScrolling = false;
document.getElementById("scroll-container").addEventListener("scroll", () => {
    if (!isScrolling) {
        requestAnimationFrame(() => {
            updateActiveLink();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

function updateActiveLink() {
    let sections = document.querySelectorAll("section");
    let links = document.querySelectorAll("nav a");
    let scrollPosition = document.getElementById("scroll-container").scrollTop;

    sections.forEach((section, index) => {
        let offsetTop = section.offsetTop;
        let offsetHeight = section.offsetHeight;

        if (scrollPosition >= offsetTop - offsetHeight / 2 && scrollPosition < offsetTop + offsetHeight / 2) {
            links.forEach(link => link.classList.remove("active"));
            links[index].classList.add("active");
        }
    });
}

function scrollToSection(sectionId) {
    let container = document.getElementById("scroll-container");
    let section = document.getElementById(sectionId);
    container.scrollTo({
        top: section.offsetTop,
        behavior: "smooth"
    });
}

function scrollByStep(step) {
    let container = document.getElementById("scroll-container");
    let sections = document.querySelectorAll("section");
    let currentScroll = container.scrollTop;
    let targetIndex = 0;

    sections.forEach((section, index) => {
        if (currentScroll >= section.offsetTop - section.offsetHeight / 2) {
            targetIndex = index;
        }
    });

    let nextIndex = targetIndex + step;
    if (nextIndex >= 0 && nextIndex < sections.length) {
        container.scrollTo({
            top: sections[nextIndex].offsetTop,
            behavior: "smooth"
        });
    }
}

// Keyboard Navigation
document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowDown") {
        scrollByStep(1);
    } else if (event.key === "ArrowUp") {
        scrollByStep(-1);
    }
});

// Reveal elements with intersection observer
function handleIntersection(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}

let observer = new IntersectionObserver(handleIntersection, { threshold: 0.6 });
document.querySelectorAll(".text").forEach(el => observer.observe(el));

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
            setTimeout(() => {
                isDeleting = true;
                type();
            }, delay);
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
    updateActiveLink();
};