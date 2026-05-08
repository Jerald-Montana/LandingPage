const leftPlayer = document.querySelector(".left-player");
const rightPlayer = document.querySelector(".right-player");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


document.addEventListener("mousemove", (e) => {

    mouseX = (window.innerWidth / 2 - e.clientX) / 90;
    mouseY = (window.innerHeight / 2 - e.clientY) / 90;

});

/* TOUCH MOVE */

document.addEventListener("touchmove", (e) => {

    const touch = e.touches[0];

    mouseX = (window.innerWidth / 2 - touch.clientX) / 90;
    mouseY = (window.innerHeight / 2 - touch.clientY) / 90;

});


function animatePlayers(){

    currentX += (mouseX - currentX) * 0.03;
    currentY += (mouseY - currentY) * 0.03;

    leftPlayer.style.transform =
    `
    translate(${-currentX}px, ${-currentY}px)
    rotate(-1deg)
    `;

    rightPlayer.style.transform =
    `
    translate(${currentX}px, ${currentY}px)
    rotate(1deg)
    `;

    requestAnimationFrame(animatePlayers);
}

animatePlayers();


const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {

    button.addEventListener("mousemove", (e) => {

        const rect = button.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        button.style.setProperty("--x", `${x}px`);
        button.style.setProperty("--y", `${y}px`);

    });

});




const tournamentImage =
document.querySelector(".tournament-image-box");

document.addEventListener("mousemove", (e) => {

    const x =
    (window.innerWidth / 2 - e.clientX) / 45;

    const y =
    (window.innerHeight / 2 - e.clientY) / 45;

    tournamentImage.style.transform =
    `
    translate(${x}px, ${y}px)
    `;
});


const infoCards =
document.querySelectorAll(".info-card");

infoCards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
        card.getBoundingClientRect();

        const x =
        e.clientX - rect.left;

        const y =
        e.clientY - rect.top;

        card.style.background =
        `
        radial-gradient(
            circle at ${x}px ${y}px,
            rgba(255,255,255,0.18),
            rgba(255,255,255,0.08)
        )
        `;
    });

    card.addEventListener("mouseleave", () => {

        card.style.background =
        "rgba(255,255,255,0.08)";
    });

});