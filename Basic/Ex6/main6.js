const inp = document.getElementById('year');
const display = document.getElementById('display');


function checkYear() {
    const year = parseInt(inp.value);
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        display.innerHTML = `${year} is a leap year`;
    } else {
        display.innerHTML = `${year} is not a leap year`;
    }
}