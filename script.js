const $ = id => document.getElementById(id);

const photoInput = $("photoInput");
const dogPhoto = $("dogPhoto");
const photoGuide = $("photoGuide");
const maskPhoto = $("maskPhoto");
const maskGroup = $("maskGroup");
const maskInitial = $("maskInitial");

const previewName = $("previewName");
const previewBirthday = $("previewBirthday");
const previewInstagram = $("previewInstagram");
const previewMemberId = $("previewMemberId");

const nameInput = $("nameInput");
const birthdayInput = $("birthdayInput");
const instagramInput = $("instagramInput");
const initialInput = $("initialInput");
const memberIdInput = $("memberIdInput");

const photoX = $("photoX");
const photoY = $("photoY");
const photoScale = $("photoScale");

const maskSelect = $("maskSelect");
const maskX = $("maskX");
const maskY = $("maskY");
const maskScale = $("maskScale");

const saveBtn = $("saveBtn");
const card = $("card");

maskPhoto.src = maskSelect.value || "black.png";

photoInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  dogPhoto.src = URL.createObjectURL(file);
  dogPhoto.style.display = "block";
  photoGuide.style.display = "none";
  updatePhoto();
});

function updatePhoto(){
  dogPhoto.style.transform =
    `translate(${photoX.value}px, ${photoY.value}px) scale(${photoScale.value / 100})`;
}

function updateMask(){
  maskGroup.style.transform =
    `translate(${maskX.value}px, ${maskY.value}px) scale(${maskScale.value / 100})`;
}

function updateText(){
  previewName.textContent = nameInput.value || "Your Name";
  previewBirthday.textContent = birthdayInput.value || "Birthday";
  previewInstagram.textContent = instagramInput.value || "@instagram";
  previewMemberId.textContent = memberIdInput.value || "2025-00001";
  maskInitial.textContent = (initialInput.value || "").toUpperCase();
}

maskSelect.addEventListener("change", function(){
  maskPhoto.src = this.value;
});

[photoX, photoY, photoScale].forEach(el => el.addEventListener("input", updatePhoto));
[maskX, maskY, maskScale].forEach(el => el.addEventListener("input", updateMask));
[nameInput, birthdayInput, instagramInput, initialInput, memberIdInput].forEach(el => {
  el.addEventListener("input", updateText);
});

saveBtn.addEventListener("click", function(){
  html2canvas(card, {scale:2}).then(canvas => {
    const a = document.createElement("a");
    a.download = "wancard.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
});

updatePhoto();
updateMask();
updateText();
