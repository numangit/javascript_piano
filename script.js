//select element
const pianoKeysEl = document.querySelectorAll(".piano-keys .key");

//audio file location
let audio = new Audio("/tunes/a.wav");

//function to play tune
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
}

//event to get the key pressed by mouse
pianoKeysEl.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key));
})

//function to handle key press
const pressedKey = (e) => {
    playTune(e.key);
}

//event to get the key pressed by keyboard
document.addEventListener("keydown", pressedKey);