document.addEventListener("DOMContentLoaded", function() {
    const greeting = document.querySelector("header p");
    const hour = new Date().getHours();
    
    if (hour < 12) {
        greeting.textContent = "Good morning! Welcome to my personal website!";
    } else if (hour < 18) {
        greeting.textContent = "Good afternoon! Welcome to my personal website!";
    } else {
        greeting.textContent = "Good evening! Welcome to my personal website!";
    }
});
