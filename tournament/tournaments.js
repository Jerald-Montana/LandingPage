const tournaments = [

    
    {
        image: "../images/14.jpeg",
        badge: "Featured Event",
        date: "May 16-17, 2026",
        title: "Philippine Pickleball Epic Championships 2026",
        location: "TBA",
        description:
        "Compete in the country's national Epic Championships and earn official rankings.",
        status: "Pre-Registration Open"
    },
    

];

const grid =
document.getElementById("tournamentGrid");

const emptyState =
document.getElementById("emptyTournamentState");

/* EMPTY STATE */

if(tournaments.length === 0){

    grid.style.display = "none";

    emptyState.classList.add("show");

}

/* DISPLAY TOURNAMENTS */

else{

    grid.style.display = "grid";

    emptyState.classList.remove("show");

    tournaments.forEach((event, index) => {

        const card =
        document.createElement("div");

        card.classList.add("tournament-card");

        card.style.animationDelay =
        `${index * 0.15}s`;

        card.innerHTML = `

            <div class="card-image">

                <div class="card-badge">
                    ${event.badge}
                </div>

                <img src="${event.image}" alt="${event.title}">

            </div>

            <div class="card-content">

                <div class="card-date">
                    ${event.date}
                </div>

                <div class="card-title">
                    ${event.title}
                </div>

                <div class="card-location">
                    📍 ${event.location}
                </div>

                <div class="card-description">
                    ${event.description}
                </div>

                <div class="card-footer">

                    <div class="card-status">
                        ${event.status}
                    </div>

                    <a href="#" class="card-btn">
                        View Event
                    </a>

                </div>

            </div>

        `;

        grid.appendChild(card);

    });

}