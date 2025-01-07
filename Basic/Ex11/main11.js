const rs = document.getElementById('result');
const temperture = document.getElementById('temperature');

//Formula : c/5 = (f-32)/9
function ConvertCtoF() {
    let value = parseFloat(temperture.value);
    return rs.innerHTML = (value * 9 / 5) + 32 + "℉";
}

function ConvertFtoC() {
    let value = parseFloat(temperture.value);
    return rs.innerHTML = ((value - 32) / 9) * 5 + "℃";
}