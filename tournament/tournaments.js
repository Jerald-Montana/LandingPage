const tournaments = [
    {
        image: "../images/14.jpeg",
        badge: "Featured Event",
        date: "May 16-17, 2026",
        title: "Philippine Pickleball Epic Championships 2026",
        location: "TBA",
        description:
        "Compete in the country's national Epic Championships and earn official rankings.",
        status: "Pre-Registration Open",
        link: "../events/epic-championships.html",
        buttonText: "View Event",
        buttonIcon: "fa-arrow-right",
        newTab: false
    },
    {
        image: "../images/13.jpeg",
        badge: "Registration Open",
        date: "Aug 30, 2026",
        title: "2026 Pickleball World Cup",
        location: "Da Nang, Vietnam",
        description:
        "The Philippine Pickleball Federation is calling on elite players to represent the nation at the 2026 Pickleball World Cup, taking place August 30 – September 5 in Da Nang, Vietnam!",
        status: "Registration Forms",
        link: "https://www.cognitoforms.com/Pickleball13/PickleballWorldCupQualificationExpressionOfInterest",
        buttonText: "Go to forms",
        buttonIcon: "fa-file-lines",
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