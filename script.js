const apiUrl = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";
const text = document.getElementById("text");
const qrBtn = document.getElementById("btn");
const qrImg = document.getElementById("qr-img");
const imgBox = document.getElementById("img-box");

qrBtn.addEventListener("click", () => {
  if (text.value.length > 0) {
    qrImg.src = apiUrl + text.value;
    imgBox.classList.add("show-img");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 600);
  }
});
