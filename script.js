//select element
const pianoKeysEl = document.querySelectorAll(".piano-keys .key");

//audio file location
let audio = new Audio("/tunes/a.wav");

//function to play tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
}

pianoKeysEl.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key))
})