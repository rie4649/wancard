const photoInput = document.getElementById("photoInput");
const dogPhoto = document.getElementById("dogPhoto");

const previewName = document.getElementById("previewName");
const previewBirthday = document.getElementById("previewBirthday");
const previewMessage = document.getElementById("previewMessage");
const previewInstagram = document.getElementById("previewInstagram");
const maskInitial = document.getElementById("maskInitial");

const nameInput = document.getElementById("nameInput");
const birthdayInput = document.getElementById("birthdayInput");
const messageInput = document.getElementById("messageInput");
const instagramInput = document.getElementById("instagramInput");
const initialInput = document.getElementById("initialInput");

const maskPhoto = document.getElementById("maskPhoto");
const maskSelect = document.getElementById("maskSelect");

photoInput.addEventListener("change", function(e){

    const file = e.target.files[0];

    if(!file) return;

    dogPhoto.src = URL.createObjectURL(file);

});

nameInput.addEventListener("input",()=>{
    previewName.textContent=nameInput.value;
});

birthdayInput.addEventListener("input",()=>{
    previewBirthday.textContent=birthdayInput.value;
});

messageInput.addEventListener("input",()=>{
    previewMessage.textContent=messageInput.value;
});

instagramInput.addEventListener("input",()=>{
    previewInstagram.textContent=instagramInput.value;
});

initialInput.addEventListener("input",()=>{
    maskInitial.textContent=initialInput.value.toUpperCase();
});

maskSelect.addEventListener("change",()=>{
    maskPhoto.src=maskSelect.value;
});

document.getElementById("saveBtn").addEventListener("click",()=>{

    html2canvas(document.getElementById("card")).then(canvas=>{

        const link=document.createElement("a");

        link.download="meishi.png";

        link.href=canvas.toDataURL();

        link.click();

    });

});
