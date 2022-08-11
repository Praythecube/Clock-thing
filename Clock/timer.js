let hours;
let minutes;
let seconds;

const hour_hand = document.getElementById("hour-hand");
const minute_hand = document.getElementById("minute-hand");
const second_hand = document.getElementById("second-hand");

function calc() {
    var time = new Date();

    hours = time.getHours();
    minutes = time.getMinutes();
    seconds = time.getSeconds();

    const secDeg = (seconds / 60) * 360;
    second_hand.style.transform = `rotate(${secDeg}deg)`;

    const minDeg = ((minutes / 60) * 360) + ((seconds / 60) * 6) - 90;
    minute_hand.style.transform = `rotate(${minDeg}deg)`;

    const hourDeg = ((hours / 12) * 360) + ((minutes / 60) * 30) - 90;
    hour_hand.style.transform = `rotate(${hourDeg}deg)`;

    console.log(minDeg);


}

setInterval(calc, 1000);

calc();

