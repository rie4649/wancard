const photoInput = document.getElementById("photoInput");
const dogPhoto = document.getElementById("dogPhoto");
const photoGuide = document.getElementById("photoGuide");

const maskPhoto = document.getElementById("maskPhoto");
const maskGroup = document.getElementById("maskGroup");
const maskInitial = document.getElementById("maskInitial");

const previewName = document.getElementById("previewName");
const previewBirthday = document.getElementById("previewBirthday");
const previewInstagram = document.getElementById("previewInstagram");
const previewMemberId = document.getElementById("previewMemberId");

const nameInput = document.getElementById("nameInput");
const birthdayInput = document.getElementById("birthdayInput");
const instagramInput = document.getElementById("instagramInput");
const initialInput = document.getElementById("initialInput");
const memberIdInput = document.getElementById("memberIdInput");

const photoX = document.getElementById("photoX");
const photoY = document.getElementById("photoY");
const photoScale = document.getElementById("photoScale");

const maskSelect = document.getElementById("maskSelect");
const maskX = document.getElementById("maskX");
const maskY = document.getElementById("maskY");
const maskScale = document.getElementById("maskScale");

const saveBtn = document.getElementById("saveBtn");
const card = document.getElementById("card");

maskPhoto.src = "black.png";

photoInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  dogPhoto.src = URL.createObjectURL(file);
  dogPhoto.style.display = "block";
  photoGuide.style.display = "none";
  updatePhoto();
});

function updatePhoto(){
  const x = photoX.value;
  const y = photoY.value;
  const s = photoScale.value / 100;

  dogPhoto.style.transform =
    `translate(${x}px, ${y}px) scale(${s})`;
}

function updateMask(){
  const x = maskX.value;
  const y = maskY.value;
  const s = maskScale.value / 100;

  maskGroup.style.transform =
    `translate(${x}px, ${y}px) scale(${s})`;
}

function updateText(){
  previewName.textContent = nameInput.value || "Your Name";
  previewBirthday.textContent = birthdayInput.value || "Birthday";
  previewInstagram.textContent = instagramInput.value || "@instagram";
  previewMemberId.textContent = memberIdInput.value || "2026-00001";

  const ini = initialInput.value.trim().toUpperCase();
  maskInitial.textContent = ini;
}

photoX.addEventListener("input", updatePhoto);
photoY.addEventListener("input", updatePhoto);
photoScale.addEventListener("input", updatePhoto);

maskX.addEventListener("input", updateMask);
maskY.addEventListener("input", updateMask);
maskScale.addEventListener("input", updateMask);

maskSelect.addEventListener("change", function(){
  maskPhoto.src = this.value;
});

nameInput.addEventListener("input", updateText);
birthdayInput.addEventListener("input", updateText);
instagramInput.addEventListener("input", updateText);
initialInput.addEventListener("input", updateText);
memberIdInput.addEventListener("input", updateText);

saveBtn.addEventListener("click", function(){
  html2canvas(card, {
    backgroundColor: null,
    scale: 2
  }).then(canvas => {
    const link = document.createElement("a");
    link.download = "dog-card.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

updatePhoto();
updateMask();
updateText();
