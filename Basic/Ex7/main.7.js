const inpDay = document.getElementById('day');
const inpMonth = document.getElementById('month');
const display = document.getElementById('display');



function check() {
    const day = parseInt(inpDay.value);
    const month = parseInt(inpMonth.value) - 1;
    let rs = '';
    for (let year = 2014; year <= 2050; year++) {
        const date = new Date(year, month, day);
        if (date.getDay() === 0) {
            rs += `${year}: ${day}/${month + 1} is a Sunday!<br>`;
        } else {
            rs += `${year}: ${day}/${month + 1} is not a Sunday!<br>`;
        }
    }
    display.innerHTML = rs;
}