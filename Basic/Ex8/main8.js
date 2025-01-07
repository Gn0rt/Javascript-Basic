const value = document.getElementById('inpNumber');
const rs = document.getElementById('result');

let randomNum = Math.floor(Math.random() * 10)
console.log(randomNum)
function checkNum() {
    let number = parseInt(value.value);
    if (number === randomNum) {
        rs.innerHTML = "Good Work!";
    } else {
        rs.innerHTML = "Not matched!";
    }
}

function reload_page() {
    location.reload();
}