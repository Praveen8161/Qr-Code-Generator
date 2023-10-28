let text = document.querySelector(".text");
let cancel = document.querySelector(".cancel");
let submit = document.querySelector(".submit");

let qrCode = document.querySelector(".qr-code");

let url = " https://api.qrserver.com/v1/create-qr-code/?data=";

function getQr(inpText){
    fetch(`${url}${inpText}`,{
        method:"GET",
    })
    .then((res) => res.url)
    .then((data) => qrCode.innerHTML = `<img src="${data}" alt="Qr-Code">`)
    .catch((err) => console.log(err))
}

cancel.addEventListener("click",(e) => {
    e.preventDefault();
    qrCode.innerHTML = "";
    text.value = "";
})

submit.addEventListener("click", (e) => {
    e.preventDefault();
    let inpText = text.value;
    getQr(inpText);
    text.value= "";
})