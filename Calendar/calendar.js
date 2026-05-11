const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentDate = new Date();

const events = [

    {
        start: "2026-05-16",
        end: "2026-05-19",
        title: "Philippine Pickleball Epic Championships 2026",
        color: "blue",
        location: "Manila"
    },

    {
        start: "2026-05-16",
        end: "2026-05-16",
        title: "Junior Pickleball Open",
        color: "green",
        location: "Pasig"
    },

    {
        start: "2026-05-18",
        end: "2026-05-20",
        title: "Training Camp",
        color: "orange",
        location: "Taguig"
    }

];

function renderCalendar(){

    calendarGrid.innerHTML = "";

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay =
    new Date(year, month, 1).getDay();

    const totalDays =
    new Date(year, month + 1, 0).getDate();

    const monthNames = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];

    monthYear.innerText =
    `${monthNames[month]} ${year}`;

    for(let i = 0; i < firstDay; i++){

        const empty =
        document.createElement("div");

        calendarGrid.appendChild(empty);
    }

    for(let day = 1; day <= totalDays; day++){

        const dayBox =
        document.createElement("div");

        dayBox.classList.add("day");

        const today = new Date();

        if(
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear()
        ){
            dayBox.classList.add("today");
        }

        const dateKey =
        `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        let matchedEvents = [];

        events.forEach(event => {

            const current =
            new Date(dateKey);

            const start =
            new Date(event.start);

            const end =
            new Date(event.end);

            if(current >= start && current <= end){

                matchedEvents.push(event);

            }

        });

        let eventHTML = "";

        matchedEvents.forEach(event => {

            eventHTML += `

                <div class="event ${event.color}">
                    ${event.title}
                </div>

            `;

        });

        dayBox.innerHTML = `

            <div class="day-number">
                ${day}
            </div>

            ${eventHTML}

        `;

        if(matchedEvents.length > 0){

            dayBox.addEventListener("click", () => {

                openEventModal(
                    dateKey,
                    matchedEvents
                );

            });

        }

        calendarGrid.appendChild(dayBox);

    }

}

function openEventModal(date, eventsList){

    let modal =
    document.querySelector(".calendar-modal");

    if(modal){

        modal.remove();

    }

    modal =
    document.createElement("div");

    modal.classList.add("calendar-modal");

    let eventsHTML = "";

    eventsList.forEach(event => {

        eventsHTML += `

            <div class="modal-event-card">

                <div class="modal-event-top">

                    <div class="event-indicator ${event.color}"></div>

                    <h3>${event.title}</h3>

                </div>

                <p>
                    ${event.location}
                </p>

                <span>
                    ${event.start} → ${event.end}
                </span>

            </div>

        `;

    });

    modal.innerHTML = `

        <div class="calendar-modal-overlay"></div>

        <div class="calendar-modal-content">

            <button class="close-modal">
                ×
            </button>

            <div class="modal-tag">
                EVENT DETAILS
            </div>

            <h2>
                ${date}
            </h2>

            <div class="modal-events-list">

                ${eventsHTML}

            </div>

        </div>

    `;

    document.body.appendChild(modal);

    setTimeout(() => {

        modal.classList.add("show");

    }, 10);

    modal
    .querySelector(".close-modal")
    .addEventListener("click", () => {

        closeModal();

    });

    modal
    .querySelector(".calendar-modal-overlay")
    .addEventListener("click", () => {

        closeModal();

    });

}

function closeModal(){

    const modal =
    document.querySelector(".calendar-modal");

    if(modal){

        modal.classList.remove("show");

        setTimeout(() => {

            modal.remove();

        }, 300);

    }

}

prevBtn.addEventListener("click", () => {

    currentDate.setMonth(
        currentDate.getMonth() - 1
    );

    renderCalendar();

});

nextBtn.addEventListener("click", () => {

    currentDate.setMonth(
        currentDate.getMonth() + 1
    );

    renderCalendar();

});

renderCalendar();