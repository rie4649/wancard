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
  const file = this.files && this.files[0];
  if(!file) return;

  dogPhoto.src = URL.createObjectURL(file);
  dogPhoto.style.display = "block";
  photoGuide.style.display = "none";
  updatePhoto();
});

function updatePhoto(){
  const x = Number(photoX.value);
  const y = Number(photoY.value);
  const s = Number(photoScale.value) / 100;

  dogPhoto.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${s})`;
}

function updateMask(){
  const x = Number(maskX.value);
  const y = Number(maskY.value);
  const s = Number(maskScale.value) / 100;

  maskGroup.style.transform =
    `translate(${x}px, ${y}px) scale(${s})`;
}

function updateText(){
  previewName.textContent = nameInput.value || "YOUR NAME";
  previewBirthday.textContent = birthdayInput.value || "BIRTHDAY";
  previewInstagram.textContent = instagramInput.value || "@instagram";
  previewMemberId.textContent = memberIdInput.value || "MEMBER ID";
  maskInitial.textContent = (initialInput.value || "").trim().toUpperCase();
}

maskSelect.addEventListener("change", function(){
  maskPhoto.src = this.value;
});

photoX.addEventListener("input", updatePhoto);
photoY.addEventListener("input", updatePhoto);
photoScale.addEventListener("input", updatePhoto);

maskX.addEventListener("input", updateMask);
maskY.addEventListener("input", updateMask);
maskScale.addEventListener("input", updateMask);

nameInput.addEventListener("input", updateText);
birthdayInput.addEventListener("input", updateText);
instagramInput.addEventListener("input", updateText);
initialInput.addEventListener("input", updateText);
memberIdInput.addEventListener("input", updateText);

saveBtn.addEventListener("click", function(){
  html2canvas(card, {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  }).then(function(canvas){
    const a = document.createElement("a");
    a.download = "wancard.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
});

updatePhoto();
updateMask();
updateText();
