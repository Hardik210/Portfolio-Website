body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background: #050505;
    color: white;
    overflow-x: hidden;
}

/* GRID BACKGROUND */
.bg-grid {
    position: fixed;
    width: 100%;
    height: 100%;
    background: linear-gradient(#0f0f0f 1px, transparent 1px),
                linear-gradient(90deg, #0f0f0f 1px, transparent 1px);
    background-size: 40px 40px;
    z-index: -1;
    animation: moveGrid 10s linear infinite;
}

@keyframes moveGrid {
    0% {transform: translateY(0);}
    100% {transform: translateY(40px);}
}

/* NAVBAR */
header {
    position: fixed;
    width: 100%;
    backdrop-filter: blur(10px);
    background: rgba(0,0,0,0.5);
}

nav {
    display: flex;
    justify-content: space-between;
    padding: 15px 40px;
}

.logo {
    font-family: 'Orbitron';
    color: #00fff7;
}

/* HERO */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

/* NEON TEXT */
.glow {
    font-family: 'Orbitron';
    font-size: 40px;
    color: #00fff7;
    text-shadow: 0 0 10px #00fff7, 0 0 20px #00fff7;
}

/* BUTTON */
button {
    padding: 12px 25px;
    border: none;
    background: transparent;
    color: #00fff7;
    border: 1px solid #00fff7;
    cursor: pointer;
    transition: 0.3s;
}

button:hover {
    background: #00fff7;
    color: black;
    box-shadow: 0 0 20px #00fff7;
}

/* SECTIONS */
.section {
    padding: 100px 20px;
    text-align: center;
}

/* CARDS */
.cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.card {
    margin: 15px;
    padding: 30px;
    border: 1px solid #00fff7;
    border-radius: 10px;
    transition: 0.3s;
}

/* GAMING HOVER EFFECT */
.card:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 0 20px #00fff7;
}

/* EXTRA GLOW */
.glow-card {
    position: relative;
}

.glow-card::before {
    content: "";
    position: absolute;
    inset: -2px;
    background: linear-gradient(45deg, #00fff7, transparent);
    filter: blur(10px);
    opacity: 0;
    transition: 0.3s;
}

.glow-card:hover::before {
    opacity: 1;
}

/* CURSOR */
.cursor {
    width: 10px;
    height: 10px;
    background: #00fff7;
    position: fixed;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 10px #00fff7;
}

/* MOBILE */
@media(max-width:768px){
    .cards{
        flex-direction: column;
    }
}
