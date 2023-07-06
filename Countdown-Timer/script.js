let days = document.getElementById(`days`);
let hours = document.getElementById(`hours`);
let mins = document.getElementById(`mins`); 
let seconds = document.getElementById(`seconds`); 
const newYear = new Date(`01/01/2024`);
const countDown= ()=>{
    const restTime = newYear.getTime() - new Date().getTime();

const totalSeconds = restTime / 1000;
const totalHours = totalSeconds / 3600;

const restDays = Math.floor((totalHours)/24); 

const restHours = Math.floor(totalHours%24);

const restMins = (Math.floor(totalSeconds/60) % 60);

const restSeconds = (Math.floor(totalSeconds % 60));

console.log(restDays,restHours,restMins,restSeconds);
days.innerHTML = formatTime(restDays);  
hours.innerHTML = formatTime(restHours);  
mins.innerHTML = formatTime(restMins);  
seconds.innerHTML = formatTime(restSeconds);  
}

function formatTime(time) {
    return (time < 10) ? `0${time}` : time;
}

countDown();//Initial Call
setInterval(countDown, 1000);