playSound = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // if the key does not match then we leave the function
    audio.currentTime = 0; // this will make it so you can press on a button multiple times and hear the sound over and over without having to wait for it to finish
    audio.play();
    key.classList.add("playing"); // add the playing class
}
removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

//listen for the keydown event, when key is pressed we will get that event
window.addEventListener("keydown", playSound);