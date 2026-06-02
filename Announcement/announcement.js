const announcements = [

    {
        tag: "TOURNAMENT",

        title: "Epic Championships Registration Opens",

        description:
        "Official registration for the Philippine Pickleball Epic Championships 2026 is now open for all players nationwide. Players may now secure their slots and participate in one of the country's largest pickleball events.",

        date: "May 10, 2026",

        link: "../tournament/tournaments.html",

        buttonText: "Go To Tournament",

        buttonIcon: "fa-trophy"
    },

    {
        tag: "REGISTRATION",

        title: "2026 Pickleball World Cup",

        description:
        "The Philippine Pickleball Federation is calling on elite players to represent the nation at the 2026 Pickleball World Cup, taking place August 30 – September 5 in Da Nang, Vietnam! If you have what it takes to compete at the highest level and proudly carry the Philippine flag on the world stage, we want to hear from you. This is your opportunity to be part of history. ​Eligibility is open to Filipinos born in the Philippines, holders of a Philippine passport, or permanent residents who have been residing in the Philippines for a minimum of five (5) years. If you meet the criteria and are ready to give your all for the nation, register your interest now using this form Pickleball World Cup and take the first step toward wearing the colors of the Philippines at the World Cup!",

        date: "Aug 30, 2026",

        link: "https://www.cognitoforms.com/Pickleball13/PickleballWorldCupQualificationExpressionOfInterest",

        buttonText: "Go To Forms",

        buttonIcon: "fa-file-lines"
    },
];

const grid =
document.getElementById("announcementGrid");

const emptyState =
document.getElementById("emptyAnnouncement");

const detail =
document.getElementById("announcementDetail");

/* DETAIL PANEL */

function renderDetail(item){

    detail.innerHTML = `

        <div class="detail-content">

            <div class="detail-tag">
                ${item.tag}
            </div>

            <h2>
                ${item.title}
            </h2>

            <div class="detail-date">

                <i class="fa-solid fa-calendar-days"></i>

                ${item.date}

            </div>

            <p class="detail-message">
                ${item.description}
            </p>

            <a href="${item.link}" class="detail-btn"target="_blank">

                ${item.buttonText}

                <i class="fa-solid ${item.buttonIcon}"></i>

            </a>

        </div>

    `;
}

/* EMPTY STATE */

if(announcements.length === 0){

    grid.style.display = "none";

    detail.style.display = "none";

    emptyState.classList.add("show");

}

/* DISPLAY ANNOUNCEMENTS */

else{

    emptyState.classList.remove("show");

    announcements.forEach((item, index) => {

        const card =
        document.createElement("div");

        card.classList.add("announcement-card");

        card.innerHTML = `

            <div class="card-tag">

                ${item.tag}

            </div>

            <h3>

                ${item.title}

            </h3>

            <p>

                ${item.description}

            </p>

            <div class="card-date">

                ${item.date}

            </div>

        `;

        /* CLICK EVENT */

        card.addEventListener("click", () => {

            document
            .querySelectorAll(".announcement-card")
            .forEach(card => {

                card.classList.remove("active");

            });

            card.classList.add("active");

            renderDetail(item);

            /* MOBILE AUTO SCROLL */

            if(window.innerWidth <= 950){

                detail.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

        grid.appendChild(card);

        /* DEFAULT ACTIVE */

        if(index === 0){

            card.classList.add("active");

            renderDetail(item);

        }

    });

}