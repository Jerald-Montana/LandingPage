const tournaments = [

    {
        image: "images/tournament1.jpg",
        badge: "FEATURED",
        date: "March 28-30, 2026",
        title: "Philippine Pickleball Amateur Nationals",
        location: "Las Piñas City, Philippines",
        description:
        "Compete in the country's national amateur championship and earn official rankings.",
        status: "Registration Open"
    },

    {
        image: "images/tournament2.jpg",
        badge: "OPEN",
        date: "April 12-14, 2026",
        title: "Manila Smash Open",
        location: "Pasig City, Philippines",
        description:
        "A high-energy tournament featuring singles, doubles, and mixed doubles divisions.",
        status: "Registration Open"
    },

    {
        image: "images/tournament3.jpg",
        badge: "PRO",
        date: "May 5-7, 2026",
        title: "Cebu Pickleball Clash",
        location: "Cebu City, Philippines",
        description:
        "Join elite and amateur players in one of the biggest pickleball events in Visayas.",
        status: "Few Slots Left"
    },

    {
        image: "images/tournament4.jpg",
        badge: "COMMUNITY",
        date: "June 10, 2026",
        title: "Davao Social Play Cup",
        location: "Davao City, Philippines",
        description:
        "Friendly social competition designed for beginners and casual players.",
        status: "Registration Open"
    }

];


const grid = document.getElementById("tournamentGrid");

tournaments.forEach((event, index) => {

    const card = document.createElement("div");

    card.classList.add("tournament-card");

    card.style.animationDelay = `${index * 0.15}s`;

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