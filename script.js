const photoInput = document.getElementById("photoInput");
const dogPhoto = document.getElementById("dogPhoto");
const maskPhoto = document.getElementById("maskPhoto");
const maskInitial = document.getElementById("maskInitial");

const previewName = document.getElementById("previewName");
const previewBirthday = document.getElementById("previewBirthday");
const previewMessage = document.getElementById("previewMessage");
const previewInstagram = document.getElementById("previewInstagram");

const nameInput = document.getElementById("nameInput");
const birthdayInput = document.getElementById("birthdayInput");
const messageInput = document.getElementById("messageInput");
const instagramInput = document.getElementById("instagramInput");
const initialInput = document.getElementById("initialInput");

const photoX = document.getElementById("photoX");
const photoY = document.getElementById("photoY");
const photoScale = document.getElementById("photoScale");

const maskSelect = document.getElementById("maskSelect");
const maskX = document.getElementById("maskX");
const maskY = document.getElementById("maskY");
const maskScale = document.getElementById("maskScale");

photoInput.addEventListener("change", function(){
  const file = this.files[0];
  if(!file) return;

  dogPhoto.src = URL.createObjectURL(file);
  dogPhoto.style.display = "block";
  updatePhoto();
});

function updatePhoto(){
  const x = photoX.value;
  const y = photoY.value;
  const scale = photoScale.value / 100;

  dogPhoto.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;
}

function updateMask(){
  const x = maskX.value;
  const y = maskY.value;
  const scale = maskScale.value / 100;

  maskPhoto.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`;

  maskInitial.style.transform =
    `translate(calc(-50% + ${x}px), calc(-50% + ${y * 0.35}px)) scale(${scale})`;
}

function updateText(){
  previewName.textContent = nameInput.value || "名前";
  previewBirthday.textContent = birthdayInput.value || "誕生日";
  previewMessage.textContent = messageInput.value || "一言";
  previewInstagram.textContent = instagramInput.value || "Instagram";
  maskInitial.textContent = (initialInput.value || "P").toUpperCase();
}

maskSelect.addEventListener("change", function(){
  maskPhoto.src = maskSelect.value;
});

photoX.addEventListener("input", updatePhoto);
photoY.addEventListener("input", updatePhoto);
photoScale.addEventListener("input", updatePhoto);

maskX.addEventListener("input", updateMask);
maskY.addEventListener("input", updateMask);
maskScale.addEventListener("input", updateMask);

nameInput.addEventListener("input", updateText);
birthdayInput.addEventListener("input", updateText);
messageInput.addEventListener("input", updateText);
instagramInput.addEventListener("input", updateText);
initialInput.addEventListener("input", updateText);

document.getElementById("saveBtn").addEventListener("click", function(){
  html2canvas(document.getElementById("card"), {
    scale: 3,
    useCORS: true,
    backgroundColor: null
  }).then(function(canvas){
    const link = document.createElement("a");
    link.download = "meishi.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  });
});

updatePhoto();
updateMask();
updateText()
const maskPhoto = document.getElementById("maskPhoto");

if(maskPhoto){
    maskPhoto.src = "black.png";
}
