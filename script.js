const $ = id => document.getElementById(id);

const photoInput = $("photoInput");
const dogPhoto = $("dogPhoto");
const photoGuide = $("photoGuide");

const maskImg = $("maskImg");
const maskWrap = $("maskWrap");
const initialText = $("initialText");

const cardName = $("cardName");
const cardBirthday = $("cardBirthday");
const cardInstagram = $("cardInstagram");
const cardId = $("cardId");

const nameInput = $("nameInput");
const birthdayInput = $("birthdayInput");
const instagramInput = $("instagramInput");
const memberInput = $("memberInput");
const initialInput = $("initialInput");

const photoX = $("photoX");
const photoY = $("photoY");
const photoScale = $("photoScale");

const maskSelect = $("maskSelect");
const maskX = $("maskX");
const maskY = $("maskY");
const maskScale = $("maskScale");

const initialX = $("initialX");
const initialY = $("initialY");
const initialSize = $("initialSize");

const card = $("card");
const saveBtn = $("saveBtn");

function updatePhoto(){
  dogPhoto.style.transform =
    `translate(calc(-50% + ${photoX.value}px), calc(-50% + ${photoY.value}px)) scale(${photoScale.value / 100})`;
}

function updateMask(){
  maskWrap.style.transform =
    `translate(${maskX.value}px, ${maskY.value}px) scale(${maskScale.value / 100})`;
}

function updateInitial(){
  initialText.textContent = (initialInput.value || "").toUpperCase();
  initialText.style.left = `calc(50% + ${initialX.value}px)`;
  initialText.style.top = `calc(25% + ${initialY.value}px)`;
  initialText.style.fontSize = initialSize.value + "px";
}

function updateText(){
  cardName.textContent = nameInput.value || "Your Name";
  cardBirthday.textContent = birthdayInput.value || "BIRTHDAY";
  cardInstagram.textContent = instagramInput.value || "@instagram";
  cardId.textContent = memberInput.value || "2025-00001";
}

photoInput.addEventListener("change", function(){
  const file = photoInput.files[0];
  if(!file) return;

  const reader = new FileReader();
  reader.onload = function(e){
    dogPhoto.src = e.target.result;
    dogPhoto.style.display = "block";
    photoGuide.style.display = "none";
    updatePhoto();
  };
  reader.readAsDataURL(file);
});

maskSelect.addEventListener("change", function(){
  maskImg.src = maskSelect.value;
});

photoX.addEventListener("input", updatePhoto);
photoY.addEventListener("input", updatePhoto);
photoScale.addEventListener("input", updatePhoto);

maskX.addEventListener("input", updateMask);
maskY.addEventListener("input", updateMask);
maskScale.addEventListener("input", updateMask);

initialX.addEventListener("input", updateInitial);
initialY.addEventListener("input", updateInitial);
initialSize.addEventListener("input", updateInitial);
initialInput.addEventListener("input", updateInitial);

nameInput.addEventListener("input", updateText);
birthdayInput.addEventListener("input", updateText);
instagramInput.addEventListener("input", updateText);
memberInput.addEventListener("input", updateText);

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
updateInitial();
updateText();
