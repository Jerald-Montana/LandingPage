const form = document.getElementById("piclForm");
const successMessage = document.getElementById("successMessage");

const divisionCards = document.querySelectorAll(".division-card");

divisionCards.forEach(card => {
  card.addEventListener("click", () => {
    divisionCards.forEach(item => item.classList.remove("active"));
    card.classList.add("active");
  });
});

const uploadInputs = document.querySelectorAll(".upload-btn input");

uploadInputs.forEach(input => {
  input.addEventListener("change", () => {
    const button = input.closest(".upload-btn");
    const icon = button.querySelector("i");
    const text = button.querySelector("span");

    if(input.files.length > 0){
      button.classList.remove("upload-error");
      button.classList.add("uploaded");
      icon.className = "fa-solid fa-check";
      text.textContent = "";
    }else{
      button.classList.remove("uploaded");
      icon.className = "fa-solid fa-cloud-arrow-up";
      text.textContent = "ID";
    }
  });
});

const teamLogoInput = document.getElementById("teamLogo");
const logoPreview = document.getElementById("logoPreview");

teamLogoInput.addEventListener("change", () => {
  const file = teamLogoInput.files[0];

  if(!file) return;

  const imageURL = URL.createObjectURL(file);

  logoPreview.innerHTML = `
    <img src="${imageURL}" alt="Team Logo Preview">
  `;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if(!form.reportValidity()){
    return;
  }

  const requiredUploads = document.querySelectorAll(".upload-btn input[required]");
  let uploadsComplete = true;

  requiredUploads.forEach(upload => {
    const button = upload.closest(".upload-btn");

    if(upload.files.length === 0){
      uploadsComplete = false;
      button.classList.add("upload-error");
    }else{
      button.classList.remove("upload-error");
    }
  });

  if(!uploadsComplete){
    alert("Please upload all required School IDs.");

    const firstError = document.querySelector(".upload-error");

    if(firstError){
      firstError.scrollIntoView({
        behavior:"smooth",
        block:"center"
      });
    }

    return;
  }

  successMessage.classList.add("show");

  setTimeout(() => {
    successMessage.scrollIntoView({
      behavior:"smooth",
      block:"center"
    });
  }, 100);
});