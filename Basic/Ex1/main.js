const getDay = document.getElementById('getDay');
const getTime = document.getElementById('getTime');

const d = new Date();
const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = d.getDay();
let date = d.getDate();
let year = d.getFullYear();
let month = d.getMonth();

let hours = d.getHours();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
let rsDay = `To day is ${allDays[day]}, ${date} ${allMonths[month]} ${year}`;
let rsTime = '';
if (hours < 12) {
    rsTime = `Time is ${hours}:${minutes}:${seconds} AM`;
} else {
    rsTime = `Time is ${hours}:${minutes}:${seconds} PM`;
}
getDay.innerHTML = rsDay;
getTime.innerHTML = rsTime;
console.log(day);
