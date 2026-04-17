// smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// typing effect
const text = "Game Developer | Unreal Engine | C++";
let i = 0;

function typing() {
    if (i < text.length) {
        document.querySelector(".typing").innerHTML += text[i];
        i++;
        setTimeout(typing, 50);
    }
}
typing();

// custom cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.top = e.clientY + "px";
    cursor.style.left = e.clientX + "px";
});

// reveal animation
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const pos = sec.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            sec.style.opacity = 1;
            sec.style.transform = "translateY(0)";
        }
    });
});

sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(50px)";
    sec.style.transition = "0.6s";
});
