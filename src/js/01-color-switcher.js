const btnStart = document.querySelector(".btn-start-js");
const btnStop = document.querySelector(".btn-stop-js");
const body = document.querySelector("body")

let idTimer = null;
btnStop.disabled = true;
btnStart.addEventListener("click", goStart);
btnStop.addEventListener("click", goStop);
function goStart() {
    btnStart.disabled = true;
    btnStop.disabled = false;
    body.style.backgroundColor = getRandomHexColor();
  idTimer = setInterval(() => { body.style.backgroundColor = getRandomHexColor() },
        1000);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
function goStop() {
    btnStop.disabled = true;
    btnStart.disabled = false;
    clearInterval(idTimer)

}




