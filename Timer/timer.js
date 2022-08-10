let hours;
let minutes;
let seconds;
let mSeconds;

const hour_hand = document.getElementById("hour-hand");
const minute_hand = document.getElementById("minute-hand");
const second_hand = document.getElementById("second-hand");

function calc() {
    var time = new Date();

    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();
    mSeconds = time.getMilliseconds();

    const secDeg = (seconds/60) * 360;
    second_hand.style.transform = "rotate ${secDeg}deg";
}

calc();

