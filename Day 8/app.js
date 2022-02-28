const canvas = document.querySelector("#draw");
const context = canvas.getContext('2d');
//make the width and height as big as the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//settings the settings for the drawing
//there needs to be a color to start with and setting how the end of the line should be
context.strokeStyle = '#BADA55';
context.lineJoin = "round";
context.lineCap = "round";
context.lineWidth = 100;
context.globalCompositeOperation = 'multiply';


let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (e) => {
    if(!isDrawing) return; //stop function from running when they are not moused down
    //if mouse is clicked and moved around it will console.log the event
    console.log(e);
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`
    context.beginPath();
    //start from
    context.moveTo(lastX, lastY);
    //go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++; //increment the hue so the color changes
    if(hue >= 360) {
        hue = 0;
    }

    if(context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }
    if(direction){
        context.lineWidth++;
    }
    else{
        context.lineWidth--;
    }
    
}
//before we move the mouse lastX and lastY will update so we don't start at 0
canvas.addEventListener("mousedown", (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
//if mouse is out of screen
canvas.addEventListener("mouseout", () => isDrawing = false);