const secondHand = document.querySelector(".second-hand");
const minHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");

const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`
    console.log(seconds);

    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) + ((seconds/60) * 6)) + 90;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + ((minutes/60)*30) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    //the following if statments makes the clock not reset for a few seconds everytime the minute hand is due to move
    if(seconds === 60)
    {
        minHand.classList.remove("transition");
    }
    else 
    {
        minHand.classList.add("transition");
    }
}

setInterval(setDate, 1000); //will change every second