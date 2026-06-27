const $ = id => document.getElementById(id);

const photoInput = $("photoInput");
const dogPhoto = $("dogPhoto");
const photoGuide = $("photoGuide");

const maskImg = $("maskImg");
const maskWrap = $("maskWrap");
const initialText = $("initialText");

const cardName = $("cardName");
const cardBirthday = $("cardBirthday");
const cardMessage = $("cardMessage");
const cardInstagram = $("cardInstagram");

const nameInput = $("nameInput");
const birthdayInput = $("birthdayInput");
const messageInput = $("messageInput");
const instagramInput = $("instagramInput");
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

const saveBtn = $("saveBtn");
const card = $("card");
const savePreview = $("savePreview");
const saveCardArea = $("saveCardArea");

function updatePhoto(){
  if(!dogPhoto) return;

  dogPhoto.style.setProperty("position","absolute","important");
  dogPhoto.style.setProperty("left","50%","important");
  dogPhoto.style.setProperty("top","50%","important");
  dogPhoto.style.setProperty("width","100%","important");
  dogPhoto.style.setProperty("height","100%","important");
  dogPhoto.style.setProperty("object-fit","cover","important");

  dogPhoto.style.setProperty(
    "transform",
    `translate(-50%, -50%) translate(${photoX.value}px, ${photoY.value}px) scale(${photoScale.value / 100})`,
    "important"
  );
}

function updateMask(){
  if(!maskWrap) return;

  maskWrap.style.setProperty(
    "transform",
    `translate(${maskX.value}px, ${maskY.value}px) scale(${maskScale.value / 100})`,
    "important"
  );
}

function updateInitial(){
  if(!initialText) return;

  initialText.textContent = (initialInput.value || "").toUpperCase();

  initialText.style.setProperty("left", `calc(50% + ${initialX.value}px)`, "important");
  initialText.style.setProperty("top", `calc(20px + ${initialY.value}px)`, "important");
  initialText.style.setProperty("font-size", initialSize.value + "px", "important");
}

function updateText(){
  cardName.textContent = nameInput.value || "Your Name";
  cardBirthday.textContent = birthdayInput.value || "Birthday";
  cardMessage.textContent = messageInput.value || "Message";
  cardInstagram.textContent = instagramInput.value || "@instagram";
}

photoInput.addEventListener("change", function(){
  const file = photoInput.files[0];
  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(e){
    dogPhoto.src = e.target.result;
    dogPhoto.style.setProperty("display","block","important");

    if(photoGuide){
      photoGuide.style.display = "none";
    }

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
messageInput.addEventListener("input", updateText);
instagramInput.addEventListener("input", updateText);

saveBtn.addEventListener("click", function(){

  saveCardArea.innerHTML = "";
  savePreview.classList.add("show");

  html2canvas(card,{
    scale:3,
    useCORS:true,
    backgroundColor:null
  }).then(function(canvas){

    const img = document.createElement("img");
    img.src = canvas.toDataURL("image/png");
    img.style.width = "100%";
    img.style.borderRadius = "18px";

    saveCardArea.innerHTML = "";
    saveCardArea.appendChild(img);

  });

});
savePreview.addEventListener("click", function(){
  savePreview.classList.remove("show");
  saveCardArea.innerHTML = "";
});

updatePhoto();
updateMask();
updateInitial();
updateText();
