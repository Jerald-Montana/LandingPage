const coaches = window.coaches || [];

const coachGrid =
document.getElementById("coachGrid");

const coachCounter =
document.getElementById("coachCounter");

function animateCounter(target){

    let current = 0;

    const speed = 40;

    if(target === 0){
        coachCounter.textContent = 0;
        return;
    }

    const counter = setInterval(() => {

        current++;

        coachCounter.textContent = current;

        if(current >= target){

            clearInterval(counter);
        }

    }, speed);

}

animateCounter(coaches.length);

coaches.forEach((coach) => {

    const card =
    document.createElement("div");

    card.classList.add("coach-card");

    card.innerHTML = `

        <div class="coach-image-wrapper">

            <img 
                src="${coach.image}" 
                alt="${coach.name}" 
                class="coach-image"
            >

        </div>

        <div class="coach-content">

            <h3 class="coach-name">
                ${coach.name}
            </h3>

            <div class="coach-title">
                ${coach.title}
            </div>

            <div class="coach-info">

                <div>
                    <i class="fa-solid fa-location-dot"></i>
                    ${coach.location}
                </div>

                <a href="tel:${coach.phone}">
                    <i class="fa-solid fa-phone"></i>
                    ${coach.phone}
                </a>

                <a href="mailto:${coach.email}"
                    class="copy-email"
                    data-email="${coach.email}">

                    <span>
                        <i class="fa-solid fa-envelope"></i>
                        ${coach.email}
                    </span>

                    <button class="copy-btn">
                        <i class="fa-regular fa-copy"></i>
                    </button>

                </a>

                <a href="${coach.facebook}" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                    Facebook Profile
                </a>

            </div>

            <div class="certificate-box">

                <h4>
                    Coaching Certificate
                </h4>

                <img 
                    src="${coach.certificate}" 
                    alt="Certificate of ${coach.name}" 
                    class="certificate-img"
                >

            </div>

        </div>

    `;

    coachGrid.appendChild(card);

});

document.addEventListener("click", (e) => {

    const copyButton =
    e.target.closest(".copy-btn");

    if(!copyButton) return;

    e.preventDefault();

    const emailElement =
    copyButton.closest(".copy-email");

    const email =
    emailElement.dataset.email;

    navigator.clipboard.writeText(email);

    copyButton.innerHTML =
    `<i class="fa-solid fa-check"></i>`;

    setTimeout(() => {

        copyButton.innerHTML =
        `<i class="fa-regular fa-copy"></i>`;

    }, 1800);

});