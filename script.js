// =========================
// Mobile Menu
// =========================

const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});


// =========================
// Close Mobile Menu
// =========================

const mobileLinks = document.querySelectorAll(".mobile-link");

mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
    });
});


// =========================
// Contact Form
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent =
            "Please fill in all fields.";

        formMessage.className =
            "text-center text-sm text-red-500";

        return;
    }

    formMessage.textContent =
        "Thank you! Your message has been submitted.";

    formMessage.className =
        "text-center text-sm text-green-600";

    contactForm.reset();
});