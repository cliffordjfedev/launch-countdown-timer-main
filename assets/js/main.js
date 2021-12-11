let seconds = parseInt(document.querySelector('#second h5').textContent);
let minutes = parseInt(document.querySelector('#minute h5').textContent);
let hours = parseInt(document.querySelector('#hour h5').textContent);
let days = parseInt(document.querySelector('#day h5').textContent);

let setSecond = document.querySelector('#second h5');
let setMinute = document.querySelector('#minute h5');
let setHour = document.querySelector('#hour h5');
let setDay = document.querySelector('#day h5');

let myInterval = setInterval(startTimer, 1000);

function startTimer() {

    if (days > 0 || hours > 0 || minutes > 0 || seconds > 0) {

        secondTimer();

    } else {
        clearInterval(myInterval);
    }
}

function secondTimer() {
    seconds--;

    if (seconds === -1 && minutes > -1) {
        seconds = 59;
        setSecond.textContent = seconds;
        minuteTimer();

    } else {
        if (seconds < 10) {
            setSecond.textContent = `0${seconds}`;
        } else {
            setSecond.textContent = seconds;
        }
    }


}

function minuteTimer() {
    minutes--;
    if (minutes === -1 && hours > -1) {
        minutes = 59;
        setMinute.textContent = minutes;
        //setHour.textContent = hours;
        hourTimer();

    } else {
        if (minutes < 10) {
            setMinute.textContent = `0${minutes}`;
        } else {
            setMinute.textContent = minutes;
        }
    }
}

function hourTimer() {
    hours--;
    if (hours === 0 && days > 0) {
        hours = 23;
        setHour.textContent = hours;
        dayTimer();

    } else {
        if (hours < 10) {
            setHour.textContent = `0${hours}`;
        } else {
            setHour.textContent = hours;
        }
    }
}

function dayTimer() {

    if (days > 0) {
        days--;
        if (days < 10) {
            setDay.textContent = `0${days}`;
        } else {
            setDay.textContent = days;
        }
    }
}






