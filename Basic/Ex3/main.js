const getDay = document.getElementById('getDay');


const d = new Date();
const allDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const allMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let day = d.getDay();
let date = d.getDate();
let year = d.getFullYear();
let month = d.getMonth();

let rsDay = `To day is ${allDays[day]}, ${date} ${allMonths[month]} ${year}`;

getDay.innerHTML = rsDay;
