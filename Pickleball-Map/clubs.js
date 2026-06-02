const clubs = window.clubs || [];

const map = L.map("philippinesMap", {
    zoomControl: true,
    scrollWheelZoom: true
}).setView([12.8797, 121.7740], 6);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const redPin = L.divIcon({
    className: "",
    html: `<div class="custom-pin"></div>`,
    iconSize: [34, 34],
    iconAnchor: [17, 34],
    popupAnchor: [0, -30]
});

const locationList = document.getElementById("locationList");
const clubSearch = document.getElementById("clubSearch");
const markers = [];

clubs.forEach((club) => {
    const marker = L.marker([club.lat, club.lng], {
        icon: redPin
    }).addTo(map);

    marker.bindPopup(`
        <div class="popup-card">
            <img src="${club.image}" class="popup-image" alt="${club.name}">

            <div class="popup-info">
                <h3>${club.name}</h3>

                <p>
                    <strong>Location:</strong>
                    ${club.location}
                </p>

                <p>
                    <strong>Contact Name:</strong>
                    ${club.contactName}
                </p>

                <p>
                    <strong>Contact Number:</strong>
                    ${club.contactNumber}
                </p>
            </div>
        </div>
    `);

    club.marker = marker;
    markers.push(marker);
});

function renderClubList(filteredClubs){
    locationList.innerHTML = "";

    if(filteredClubs.length === 0){
        locationList.innerHTML = `
            <div class="no-club-result">
                No clubs found.
            </div>
        `;
        return;
    }

    filteredClubs.forEach((club) => {
        const item = document.createElement("div");
        item.classList.add("location-item");

        item.innerHTML = `
            <h4>${club.name}</h4>
            <p>${club.location}</p>
            <span>${club.contactName}</span>
            <span>${club.contactNumber}</span>
        `;

        item.addEventListener("click", () => {
            document
            .querySelectorAll(".location-item")
            .forEach(listItem => listItem.classList.remove("active"));

            item.classList.add("active");

            map.flyTo([club.lat, club.lng], 12, {
                duration: 1.2
            });

            setTimeout(() => {
                club.marker.openPopup();
            }, 700);
        });

        locationList.appendChild(item);
    });
}

renderClubList(clubs);

clubSearch.addEventListener("input", () => {
    const keyword = clubSearch.value.toLowerCase().trim();

    const filtered = clubs.filter(club =>
        club.name.toLowerCase().includes(keyword) ||
        club.location.toLowerCase().includes(keyword) ||
        club.contactName.toLowerCase().includes(keyword) ||
        club.contactNumber.toLowerCase().includes(keyword)
    );

    renderClubList(filtered);
});

const registerToggle = document.getElementById("registerToggle");
const registerFormSection = document.getElementById("registerFormSection");

registerToggle.addEventListener("click", () => {
    registerToggle.classList.toggle("active");
    registerFormSection.classList.toggle("show");

    if(registerFormSection.classList.contains("show")){
        setTimeout(() => {
            registerFormSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }, 300);
    }
});

const clubForm = document.getElementById("clubForm");

clubForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const newCourt = document.getElementById("newCourt").checked;
    const updateCourt = document.getElementById("updateCourt").checked;

    const clubName = document.getElementById("clubName").value;
    const contactName = document.getElementById("contactName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const emailAddress = document.getElementById("emailAddress").value;
    const clubLocation = document.getElementById("clubLocation").value;
    const barangay = document.getElementById("barangay").value;
    const province = document.getElementById("province").value;
    const zipcode = document.getElementById("zipcode").value;
    const mapsLink = document.getElementById("mapsLink").value;
    const courtCount = document.getElementById("courtCount").value;
    const courtType = document.getElementById("courtType").value;
    const playSchedule = document.getElementById("playSchedule").value;
    const costToPlay = document.getElementById("costToPlay").value;
    const venuePhoto = document.getElementById("venuePhoto").files[0];
    const details = document.getElementById("details").value;

    const registrationTypes = [];

    if(newCourt){
        registrationTypes.push("New Court Registration");
    }

    if(updateCourt){
        registrationTypes.push("Update Existing Court Info");
    }

    const recipient = "yourpickleball@email.com";

    const subject = "Club / Court Registration Submission";

    const body =
`Club / Court Registration Submission

Registration Type:
${registrationTypes.join(", ") || "Not specified"}

Club / Court Name:
${clubName}

Contact Name:
${contactName}

Contact Number:
${contactNumber}

Email Address:
${emailAddress}

Location:
${clubLocation}

Barangay:
${barangay}

Province:
${province}

ZIP Code:
${zipcode}

Google Maps Link:
${mapsLink}

Number of Courts:
${courtCount}

Court Type:
${courtType}

Play Schedule:
${playSchedule}

Cost To Play:
${costToPlay}

Venue Photo:
${venuePhoto ? venuePhoto.name : "No file attached. Please attach manually if needed."}

Additional Details:
${details}`;

    const successMessage =
    document.getElementById("formSuccessMessage");

    successMessage.classList.add("show");

    const gmailURL =
    `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailURL, "_blank");

    clubForm.reset();
});