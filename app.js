const countdown =()=>{
    const vacationDate = new Date('Mar 3, 2023 17:00:00').getTime();
    const currentDate= new Date().getTime()
    const gap = vacationDate - currentDate;
    


// to calculate the time difference in months, weeks, days etc

const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;
const week = day * 7;

//calculate the actual weeks 
const humanWeek = Math.floor(gap / week);
const humanDay = Math.floor((gap % week) / day)
const humanHour = Math.floor((gap % day) / hour)
const humanMinute = Math.floor ((gap % hour) / minute)
const humanSecond = Math.floor((gap % minute) / second)

//to display the Weeks, Days, Hours etc till the deadline in the DOM
document.querySelector('.week').innerText =humanWeek;
document.querySelector('.day').innerText =humanDay;
document.querySelector('.hour').innerText =humanHour;
document.querySelector('.minute').innerText =humanMinute;
document.querySelector('.second').innerText =humanSecond;
}
setInterval(countdown, 1000);