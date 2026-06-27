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

function updatePhoto(){
  dogPhoto.style.transform =
    `translate(${photoX.value}px, ${photoY.value}px) scale(${photoScale.value / 100})`;
}

function updateMask(){
  maskWrap.style.transform =
    `translate(${maskX.value}px, ${maskY.value}px) scale(${maskScale.value / 100})`;
}

function updateInitial(){
  initialText.textContent = (initialInput.value || "").toUpperCase();
  initialText.style.left = `calc(50% + ${initialX.value}px)`;
  initialText.style.top = `calc(20px + ${initialY.value}px)`;
  initialText.style.fontSize = initialSize.value + "px";
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
    dogPhoto.style.display = "block";
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

saveBtn.addEventListener("click", () => {

    const target = document.getElementById("card");

    html2canvas(target,{
        scale:4,
        backgroundColor:null,
        useCORS:true
    }).then(canvas=>{

        const link=document.createElement("a");
        link.download="WANCARD.png";
        link.href=canvas.toDataURL("image/png");
        link.click();

    });

});

updatePhoto();
updateMask();
updateInitial();
updateText();
