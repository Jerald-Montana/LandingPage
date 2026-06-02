const memberClubs = window.memberClubs || [];

const clubsGrid = document.getElementById("clubsGrid");
const clubSearch = document.getElementById("clubSearch");
const emptyState = document.getElementById("emptyState");
const clubCounter = document.getElementById("clubCounter");

function renderClubs(data){
    clubsGrid.innerHTML = "";

    if(data.length === 0){
        emptyState.classList.add("show");
        return;
    }

    emptyState.classList.remove("show");

    data.forEach((club, index) => {
        const card = document.createElement("div");

        card.classList.add("club-card");

        card.style.animationDelay = `${index * 0.12}s`;

        card.innerHTML = `
            <div class="club-photo">
                <img src="${club.photo}" alt="${club.name}">
            </div>

            <div class="club-content">

                <div class="club-logo-wrap">
                    <img src="${club.logo}" alt="${club.name} Logo">
                </div>

                <h3>
                    ${club.name}
                </h3>

                <div class="club-location">
                    <i class="fa-solid fa-location-dot"></i>
                    ${club.location}
                </div>

                <div class="club-actions">
                    <a href="${club.facebook}" target="_blank" class="club-link">
                        <i class="fa-brands fa-facebook"></i>
                        Visit Club Page
                    </a>
                </div>

            </div>
        `;

        clubsGrid.appendChild(card);
    });
}

function animateCounter(target){
    let current = 0;
    const speed = 20;

    if(target === 0){
        clubCounter.textContent = 0;
        return;
    }

    const counter = setInterval(() => {
        current++;

        clubCounter.textContent = current;

        if(current >= target){
            clearInterval(counter);
        }

    }, speed);
}

clubSearch.addEventListener("input", () => {
    const keyword = clubSearch.value.toLowerCase().trim();

    const filtered = memberClubs.filter(club =>
        club.name.toLowerCase().includes(keyword) ||
        club.location.toLowerCase().includes(keyword)
    );

    renderClubs(filtered);
});

renderClubs(memberClubs);
animateCounter(memberClubs.length);