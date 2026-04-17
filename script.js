// Typing Effect
const text = "Game Developer | Unreal Engine | C++";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
typeEffect();

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});

// Custom Cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// Scroll Reveal
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 400;

        if (top > offset) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

// Initial styles for animation
sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
