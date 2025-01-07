const rs = document.getElementById("result");

let date1 = new Date();
let date2 = new Date("12/24/2024");

// Calculating the time difference
// of two dates
let difference_in_time = date2.getTime() - date1.getTime();
console.log(difference_in_time);
console.log(date1.getTime()); // mili-giây

// Calculating the no. of days between
// two dates
let difference_in_days = Math.round(difference_in_time / (1000 * 3600 * 24));
// (1000 * 3600 * 24) -> cong thuc chuyen doi tu mili-giay -> ngay
// 1000 mili-giay = 1 giay
// 3600 giay = 1 gio
//24 gio = 1 ngay

rs.innerHTML = "From today to Christmas is: " + difference_in_days + " days";