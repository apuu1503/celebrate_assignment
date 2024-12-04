// Initialize SwiperJS
// const swiper = new Swiper('.swiper-container', {
//     loop: true, // Enables looping of slides
//     navigation: {
//         nextEl: '.swiper-button-next', // Next button
//         prevEl: '.swiper-button-prev', // Previous button
//     },
//     autoplay: {
//         delay: 3000, // Auto-slide delay in milliseconds
//         disableOnInteraction: false, // Keep autoplay after user interaction
//     },
// });

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});


document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");

    if (name === "") {
        alert("Name is required.");
        nameField.focus();
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter a valid email address.");
        emailField.focus();
        return;
    }

    alert(`Thank you, ${name}! We will contact you at ${email}.`);
});


const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

