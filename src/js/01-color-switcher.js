
const refs = {
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]')

};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

let timeIntervalId = null;
const isDisabled  = true;

refs.stopBtn.disabled = isDisabled;

function changeBgc(){
    document.body.style.backgroundColor = getRandomHexColor();
};


refs.startBtn.addEventListener('click', () => {

    timeIntervalId = setInterval(changeBgc, 1000);
    refs.startBtn.disabled = isDisabled;
    refs.stopBtn.disabled = !isDisabled;
   
});

refs.stopBtn.addEventListener('click', () => {

   
    clearInterval(timeIntervalId);
     refs.startBtn.disabled = !isDisabled;
    refs.stopBtn.disabled = isDisabled;
});
