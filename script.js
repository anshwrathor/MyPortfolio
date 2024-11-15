document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle
    const themeToggle = document.getElementById("theme-toggle");
    themeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

    // Typing Effect
    const dynamicText = "Ansh, a tech enthusiast!";
    let index = 0;

    function typeEffect() {
        if (index < dynamicText.length) {
            document.getElementById("dynamic-text").textContent += dynamicText.charAt(index);
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed
        }
    }
    typeEffect();

    // Carousel
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;

    setInterval(() => {
        items.forEach((item, index) => {
            item.style.transform = `translateX(-${currentIndex * 100}%)`;
        });
        currentIndex = (currentIndex + 1) % items.length;
    }, 3000);

    // Easter Egg
    let clickCount = 0;
    document.querySelector("header").addEventListener("click", () => {
        clickCount++;
        if (clickCount === 10) {
            alert("You found an Easter Egg!");
        }
    });

    // AOS Initialization
    AOS.init();

    // Particles.js
    particlesJS.load("particles-js", "https://cdn.jsdelivr.net/particles.js/2.0.0/demo/particles.json", function () {
        console.log("Particles.js loaded!");
    });
});
