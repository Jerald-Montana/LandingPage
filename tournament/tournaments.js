const tournaments = [
    {
        image: "../images/Tournament/elite-championship.png",
        badge: "REGISTRATION OPEN",
        date: "May 2026",
        title: "Philippine Pickleball Elite Championships 2026",
        location: "TBA",
        description:
        "The Philippine Pickleball Federation is calling on elite players to represent the nation at the 2026 Pickleball World Cup, taking place August 30 – September 5 in Da Nang, Vietnam!",
        status: "Pre-Registration Open",
        link: "https://www.cognitoforms.com/Pickleball13/PHWorldCupQualifiers",
        buttonText: "Go to Forms",
        buttonIcon: "fa-arrow-right",
        newTab: true
    },
    {
        image: "../images/PICKLEBALL-WORLD-CUP.jpg",
        badge: "FEATURED EVENT",
        date: "Aug 30, 2026",
        title: "2026 Pickleball World Cup",
        location: "Da Nang, Vietnam",
        description:
        "Over 65 delegations, fighting for a dream 🌍 🏆 One World, One Game, One Champion 🗓️ Aug 30th - Sep 6th, 2026",
        status: "Registration Forms",
        link: "https://en.vietnamplus.vn/pickleball-world-cup-2026-to-be-held-in-da-nang-post341769.vnp",
        buttonText: "View Event ",
        buttonIcon: "fa-eye",
        newTab: true
    },
    {
        image: "../images/Tournament/PICL.png",
        badge: "REGISTRATION OPEN",
        date: "TBA",
        title: "Pickleball Inter-Collegiate League",
        location: "Philippines",
        description:
        "The Pickleball Inter Collegiate League (PICL) brings together top collegiate athletes, rising junior talents, and distinguished alumni from leading schools in a competitive showcase of skill, sportsmanship, and school pride.",
        status: "Registration Forms",
        link: "../PICL/picl-registrationForm.html",
        buttonText: "Register ",
        buttonIcon: "fa-arrow-right",
        newTab: true
    }
];

const grid = document.getElementById("tournamentGrid");
const emptyState = document.getElementById("emptyTournamentState");

if(tournaments.length === 0){
    grid.style.display = "none";
    emptyState.classList.add("show");
}else{
    grid.style.display = "grid";
    emptyState.classList.remove("show");

    tournaments.forEach((event, index) => {
        const card = document.createElement("div");
        card.classList.add("tournament-card");
        card.style.animationDelay = `${index * 0.15}s`;

        card.innerHTML = `
            <div class="card-image">
                <div class="card-badge">${event.badge}</div>
                <img src="${event.image}" alt="${event.title}">
            </div>

            <div class="card-content">
                <div class="card-date">${event.date}</div>
                <div class="card-title">${event.title}</div>
                <div class="card-location">📍 ${event.location}</div>

                <div class="card-description">${event.description}</div>

                <button class="read-more-btn" type="button">
                    View More
                </button>

                <div class="card-footer">
                    <div class="card-status">${event.status}</div>

                    <a href="${event.link}" 
                       class="card-btn"
                       ${event.newTab ? 'target="_blank"' : ''}>
                        ${event.buttonText}
                        <i class="fa-solid ${event.buttonIcon}"></i>
                    </a>
                </div>
            </div>
        `;

        grid.appendChild(card);

        const description = card.querySelector(".card-description");
        const readMoreBtn = card.querySelector(".read-more-btn");

        if(event.description.length <= 120){
            readMoreBtn.style.display = "none";
        }

        readMoreBtn.addEventListener("click", () => {
            description.classList.toggle("expanded");

            readMoreBtn.textContent =
            description.classList.contains("expanded")
            ? "View Less"
            : "View More";
        });
    });
}