// ===============================
// Dark Mode Toggle
// ===============================

const themeToggle = document.getElementById("theme-toggle");


themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    } else {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    }
});

// ===============================
// Fade Animation on Scroll
// ===============================

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

const sections = document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .education-card, .contact-grid div"
);

sections.forEach((section) => {
    section.classList.add("fade-up");
    observer.observe(section);
});

// ===============================
// Active Navigation Link
// ===============================

const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    document.querySelectorAll("section").forEach((section) => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// ===============================
// Navbar Shadow
// ===============================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.08)";
    }

});

// ===============================
// Typing Effect
// ===============================

const title = document.querySelector(".hero-text h2");

const text = "Cloud Engineer Intern";

let index = 0;

function typeWriter() {

    if (index < text.length) {

        title.textContent += text.charAt(index);

        index++;

        setTimeout(typeWriter, 100);

    }

}

title.textContent = "";

typeWriter();

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// Console Message
// ===============================

console.log("AWS EC2 CI/CD Portfolio Loaded Successfully");