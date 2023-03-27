//select element
const pianoKeysEl = document.querySelectorAll(".piano-keys .key");

pianoKeysEl.forEach(key => {
    key.addEventListener("click", () => playTune(key.dataset.key))
})